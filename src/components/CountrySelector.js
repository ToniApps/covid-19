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
    updateCountryName(
      _.find(countries.countries, country => country.iso3 === e.target.value)
        .name
    );
  };

  if (errors) {
    console.error(errors);
    return <div>Error!!</div>;
  }
  if (loading) {
    return <CircularProgress />;
  }

  const options = countries.countries.map(({ name, iso2, iso3 }) => {
    return (
      <MenuItem value={iso3} key={`${iso3}${iso2}${name}`}>
        {name}
      </MenuItem>
    );
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
