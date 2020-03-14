import React from 'react';
// Styles
import { Card, CardContent, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export default function StatCard({ title, data, color = grey['900'] }) {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>

        <Typography variant="h4" component="h4" style={{ color }}>
          {data.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
