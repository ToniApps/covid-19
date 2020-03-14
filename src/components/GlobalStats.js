import React from 'react';
import { Typography } from '@material-ui/core';
import Stats from './Stats';

export default function GlobalStats({ style }) {
  return (
    <div style={style}>
      <Typography variant="h3" component="h3">
        Global Results
      </Typography>
      <Stats style={{ marginTop: '1rem' }}></Stats>
    </div>
  );
}
