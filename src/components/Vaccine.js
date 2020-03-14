import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  withStyles
} from '@material-ui/core';
import Moment from 'moment';

const BorderLinearProgress = withStyles({
  root: {
    height: 15
  }
})(LinearProgress);

export default function Vaccine({ style }) {
  const vaccineAnnouncementDate = Moment('2020-02-14');
  const vaccineDate = vaccineAnnouncementDate.add(15, 'months');

  const reaminingTime = vaccineDate.diff(Moment(), 'days');
  const remainingMonths = vaccineDate.diff(Moment(), 'months');

  const completed = vaccineAnnouncementDate.unix() / vaccineDate.unix();
  return (
    <Card style={style}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Vaccine Remaining Time
        </Typography>
        <BorderLinearProgress variant="determinate" value={completed} />

        <Typography color="textSecondary" style={{ marginTop: '0.5rem' }}>
          ~<strong>{reaminingTime}</strong> Days Remaining (
          <strong>{remainingMonths}</strong> Months)
        </Typography>
      </CardContent>
    </Card>
  );
}
