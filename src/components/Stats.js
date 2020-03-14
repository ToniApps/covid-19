import React from 'react';
import { useApiData } from '../services/api';
import StatCard from './StatCard';
import { Grid, Typography, LinearProgress } from '@material-ui/core';
import { red, green } from '@material-ui/core/colors';

export default function Stats({ url, style }) {
  const [data, errors, loading] = useApiData(url);

  if (errors) {
    console.error(errors);
    return <div>Error!!</div>;
  }
  if (loading) {
    return <LinearProgress />;
  }
  if (data && 'error' in data) {
    return (
      <Typography variant="h4" component="h4" style={{ marginTop: '2rem' }}>
        There's no data available for this country
      </Typography>
    );
  }

  return (
    <Grid style={style} container spacing={3}>
      <Grid item xs={12} md={4}>
        <StatCard title="Confirmed" data={data.confirmed} />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatCard
          title="Recovered"
          data={data.recovered}
          color={green['500']}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatCard title="Deaths" data={data.deaths} color={red['500']} />
      </Grid>
    </Grid>
  );
}
