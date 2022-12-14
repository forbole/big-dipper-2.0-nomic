import { useState } from 'react';
import Big from 'big.js';
import * as R from 'ramda';
import numeral from 'numeral';
import {
  useValidatorsQuery,
  ValidatorsQuery,
} from '@graphql/types/general_types';
import { useOnlineVotingPower } from '../../../home/components/hero/components/online_voting_power/hooks';
import {
  ValidatorsState,
  ItemType,
  ValidatorType,
} from './types';

export const useValidators = () => {
  const [search, setSearch] = useState('');
  const [state, setState] = useState<ValidatorsState>({
    loading: true,
    exists: true,
    items: [],
    votingPowerOverall: 0,
    tab: 0,
    sortKey: 'validator.name',
    sortDirection: 'asc',
  });
  const { onlineVPState } = useOnlineVotingPower();

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ==========================
  // Fetch Data
  // ==========================
  useValidatorsQuery({
    onCompleted: (data) => {
      handleSetState({
        loading: false,
        ...formatValidators(data),
      });
    },
  });

  // ==========================
  // Parse data
  // ==========================
  const formatValidators = (data: ValidatorsQuery) => {
    const votingPowerOverall = onlineVPState.votingPower;

    let formattedItems: ValidatorType[] = data.validator.map((x) => {
      const inActiveSetString = R.pathOr('false', ['validatorStatuses', 'in_active_set'], x);
      const jailedString = R.pathOr('false', ['validatorStatuses', 'jailed'], x);
      const tombstonedString = R.pathOr('false', ['validatorStatuses', 'tombstoned'], x);
      const votingPower = R.pathOr(0, ['validatorVotingPowers', 0, 'votingPower'], x);
      const votingPowerPercent = numeral((votingPower / votingPowerOverall) * 100).value();

      return ({
        validator: x.selfDelegateAddress,
        votingPower,
        votingPowerPercent,
        commission: R.pathOr(0, ['validatorCommissions', 0, 'commission'], x) * 100,
        inActiveSet: inActiveSetString,
        jailed: jailedString,
        tombstoned: tombstonedString,
      });
    });

    // get the top 34% validators
    formattedItems = formattedItems.sort((a, b) => {
      return a.votingPower > b.votingPower ? -1 : 1;
    });

    // add key to indicate they are part of top 34%
    let cumulativeVotingPower = Big(0);
    let reached = false;
    formattedItems.forEach((x) => {
      if (x.inActiveSet) {
        const totalVp = cumulativeVotingPower.add(x.votingPowerPercent);
        if (totalVp.lte(34) && !reached) {
          x.topVotingPower = true;
        }

        if (totalVp.gt(34) && !reached) {
          x.topVotingPower = true;
          reached = true;
        }

        cumulativeVotingPower = totalVp;
      }
    });

    return {
      votingPowerOverall,
      items: formattedItems,
    };
  };

  const handleTabChange = (_event: any, newValue: number) => {
    setState((prevState) => ({
      ...prevState,
      tab: newValue,
    }));
  };

  const handleSort = (key: string) => {
    if (key === state.sortKey) {
      setState((prevState) => ({
        ...prevState,
        sortDirection: prevState.sortDirection === 'asc' ? 'desc' : 'asc',
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        sortKey: key,
        sortDirection: 'asc', // new key so we start the sort by asc
      }));
    }
  };

  const sortItems = (items: ItemType[]) => {
    let sorted: ItemType[] = R.clone(items);

    if (state.tab === 0) {
      sorted = sorted.filter((x) => x.inActiveSet === 'true');
    }

    if (state.tab === 1) {
      sorted = sorted.filter((x) => x.inActiveSet !== 'true');
    }

    if (search) {
      sorted = sorted.filter((x) => {
        const formattedSearch = search.toLowerCase().replace(/ /g, '');
        return (
          x.validator.name.toLowerCase().replace(/ /g, '').includes(formattedSearch)
          || x.validator.address.toLowerCase().includes(formattedSearch)
        );
      });
    }

    if (state.sortKey && state.sortDirection) {
      sorted.sort((a, b) => {
        let compareA = R.pathOr(undefined, [...state.sortKey.split('.')], a);
        let compareB = R.pathOr(undefined, [...state.sortKey.split('.')], b);

        if (typeof compareA === 'string') {
          compareA = compareA.toLowerCase();
          compareB = compareB.toLowerCase();
        }

        if (compareA < compareB) {
          return state.sortDirection === 'asc' ? -1 : 1;
        }
        if (compareA > compareB) {
          return state.sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return sorted;
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return {
    state,
    handleTabChange,
    handleSort,
    handleSearch,
    sortItems,
  };
};
