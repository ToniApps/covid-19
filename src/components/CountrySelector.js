import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress
} from '@material-ui/core';
import _ from 'lodash';
import useApiData from '../services/api';

export default function CountrySelector({
  value,
  onCountrySelected,
  updateCountryName
}) {
  const [countries, errors, loading] = useApiData('countries');
  const handleCountryChanged = e => {
    onCountrySelected(e.target.value);
    updateCountryName(_.invert(countries.countries)[e.target.value]);
  };

  if (errors) {
    console.error(errors);
    return <div>Error!!</div>;
  }
  if (loading) {
    return <CircularProgress />;
  }

  const options = Object.entries(countries.countries).map(([country, key]) => {
    return <MenuItem value={key}>{country}</MenuItem>;
  });

  return (
    <FormControl>
      <InputLabel id="country-select-label">Country</InputLabel>
      <Select
        labelId="country-select-label"
        id="country-select"
        value={value}
        onChange={handleCountryChanged}
      >
        {options}
      </Select>
    </FormControl>
  );
}
