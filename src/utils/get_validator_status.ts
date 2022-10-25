/**
 * Util to get the validator status and theme
 * @param status changes from Cosmos 0-3 to Nomic boolean
 * @param jailed boolean
 * @returns an object with status and theme
 */
export const getValidatorStatus = (inActiveSet: boolean, jailed: boolean, tombstoned: boolean) => {
  const results = {
    inActiveSet: false,
    status: 'na',
    theme: 'zero',
  };

  // jailed and tombstone statuses are prioritised over their unbonding state
  if (tombstoned) {
    results.inActiveSet = false;
    results.status = 'tombstoned';
    results.theme = 'two';
    return results;
  }

  if (jailed) {
    results.inActiveSet = false;
    results.status = 'jailed';
    results.theme = 'two';
    return results;
  }

  if (inActiveSet) {
    results.inActiveSet = true;
    results.status = 'active';
    results.theme = 'one';
  } else {
    results.inActiveSet = true;
    results.status = 'unknown';
    results.theme = 'zero';
  }

  return results;
};
