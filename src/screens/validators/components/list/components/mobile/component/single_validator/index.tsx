import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Typography,
} from '@material-ui/core';
import { useStyles } from './styles';

const SingleValidator: React.FC<{
  className?: string;
  idx: string;
  validator: React.ReactNode;
  commission: string;
  votingPower: React.ReactNode;
  status: {
    inActiveSet: boolean;
    theme: string;
  };
}> = ({
  className,
  validator,
  commission,
  votingPower,
  status,
}) => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)}>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('validator')}
        </Typography>
        {validator}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('votingPower')}
        </Typography>
        {votingPower}
      </div>
      <div className={classes.flex}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('inActiveSet')}
          </Typography>
          <Typography variant="body1" className={classnames('value', 'status', status.theme)}>
            {status.inActiveSet}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('commission')}
          </Typography>
          <Typography variant="body1" className="value">
            {commission}
          </Typography>
        </div>
      </div>
    </div>

  );
};

export default SingleValidator;
