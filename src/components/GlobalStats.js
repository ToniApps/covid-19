import React from 'react';
import { Typography } from '@material-ui/core';
import Stats from './Stats';

export default function GlobalStats({ style }) {
  return (
    <div style={style}>
      <Typography variant="h2" component="h2">
        Global Results
      </Typography>
      <Stats style={{ marginTop: '1rem' }}></Stats>
    </div>
  );
}
