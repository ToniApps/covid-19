import React, { useState } from 'react';
import Stats from './Stats';
import { Typography } from '@material-ui/core';
import CountrySelector from './CountrySelector';

export default function CountryStats(props) {
  const [country, setCountry] = useState('ES');
  const [countryName, setCountryName] = useState('Spain');

  const url = `/countries/${country}`;
  return (
    <div style={props.style}>
      <Typography variant="h3" component="h3">
        Results for {countryName}
      </Typography>

      <CountrySelector
        value={country}
        onCountrySelected={setCountry}
        updateCountryName={setCountryName}
      ></CountrySelector>

      <Stats style={{ marginTop: '1rem' }} url={url}></Stats>
    </div>
  );
}
