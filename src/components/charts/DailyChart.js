import React from 'react';
import { LinearProgress, Typography } from '@material-ui/core';
import useApiData from '../../services/api';
import { Line } from 'react-chartjs-2';
import { green, amber } from '@material-ui/core/colors';

export default function DailyChart() {
  const [data, errors, loading] = useApiData('daily');

  if (errors) {
    console.error(errors);
    return <div>Error!!</div>;
  }
  if (loading) {
    return <LinearProgress />;
  }

  const confirmedCases = data.map(day => day.totalConfirmed);
  const recoveredCases = data.map(day => day.totalRecovered);
  const labels = data.map(day => day.reportDateString);

  const dataSets = {
    labels,
    datasets: [
      {
        label: 'Confirmed',
        data: confirmedCases,
        backgroundColor: amber['100'] + '40',
        borderColor: amber['500']
      },
      {
        label: 'Recovered',
        data: recoveredCases,
        backgroundColor: green['100'] + '80',
        borderColor: green['500']
      }
    ]
  };

  return (
    <>
      <Typography variant="h4" component="h4">
        Daily Chart
      </Typography>
      <Line data={dataSets}></Line>
    </>
  );
}
