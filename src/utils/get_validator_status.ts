/**
 * Util to get the validator status and theme
 * @param status changes from Cosmos 0-3 to Nomic boolean
 * @param jailed boolean
 * @returns an object with status and theme
 */
export const getValidatorStatus = (inActiveSet, jailed, tombstoned: boolean) => {
  const results = {
    status: 'na',
    theme: 'zero',
  };

  // jailed and tombstone statuses are prioritised over their unbonding state
  if (tombstoned) {
    results.status = 'Tombstoned';
    results.theme = 'two';
    return results;
  }

  if (jailed) {
    results.status = 'Jailed';
    results.theme = 'two';
    return results;
  }

  if (inActiveSet === true) {
    results.status = 'Active';
    results.theme = 'one';
  } else {
    results.status = 'Unknown';
    results.theme = 'zero';
  }

  return results;
};
