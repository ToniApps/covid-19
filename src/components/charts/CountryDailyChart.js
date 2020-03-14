import React, { useState } from 'react';
import {
  LinearProgress,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField
} from '@material-ui/core';
import useApiData from '../../services/api';
import { Bar } from 'react-chartjs-2';
import { green, red, amber } from '@material-ui/core/colors';
import Moment from 'moment';
import _ from 'lodash';

function parseDate(date) {
  return Moment(date).format('M-D-YYYY');
}

export default function CountryDailyChart() {
  const [date, setDate] = useState(parseDate(Moment().subtract(1, 'day')));
  const [showChina, setShowChina] = useState(false);
  const [minData, setMinData] = useState(100);
  const [data, errors, loading] = useApiData('daily/' + date);

  if (errors) {
    console.error(errors);
    return <div>Error!!</div>;
  }
  if (loading) {
    return <LinearProgress />;
  }

  const labels = [];
  const confirmedCases = [];
  const recoveredCases = [];
  const deathCases = [];

  let filteredData = _.filter(data, d => parseInt(d.confirmed) > minData);
  filteredData = _.groupBy(filteredData, d => d.countryRegion);
  _.forEach(filteredData, (values, country) => {
    labels.push(country);
    confirmedCases.push(values.map(d => parseInt(d.confirmed)).reduce(d => d));
    recoveredCases.push(values.map(d => parseInt(d.recovered)).reduce(d => d));
    deathCases.push(values.map(d => parseInt(d.deaths)).reduce(d => d));
  });

  if (!showChina) {
    labels.shift();
    confirmedCases.shift();
    recoveredCases.shift();
    deathCases.shift();
  }

  const dataSet = {
    labels,
    datasets: [
      {
        label: 'Confirmed Cases',
        data: confirmedCases,
        backgroundColor: amber['500'],
        borderColor: amber['500']
      },
      {
        label: 'Recovered Cases',
        data: recoveredCases,
        backgroundColor: green['500'],
        borderColor: green['500']
      },
      {
        label: 'Death Cases',
        data: deathCases,
        backgroundColor: red['500'],
        borderColor: red['500']
      }
    ]
  };

  const options = {
    scales: {
      xAxes: [
        {
          stacked: true
        }
      ],
      yAxes: [
        {
          stacked: true
        }
      ]
    }
  };

  const handleShowChina = e => {
    setShowChina(!showChina);
  };

  const handleDateChange = e => {
    e.persist();
    setDate(parseDate(e.target.value));
  };

  const handleMinDataChange = e => {
    e.persist();
    setMinData(e.target.value);
  };

  return (
    <>
      <Typography variant="h4" component="h4">
        Daily Chart Per Country
      </Typography>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={showChina}
              onChange={handleShowChina}
              value={showChina}
              color="primary"
            />
          }
          label="Show China"
        />
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue={Moment(date).format('YYYY-MM-DD')}
          onChange={handleDateChange}
          style={{ marginLeft: '1rem' }}
        />
        <TextField
          id="minCases"
          label="Minimum Nº of Cases"
          type="number"
          defaultValue={minData}
          defaultMin="0"
          onChange={handleMinDataChange}
          style={{ marginLeft: '1rem' }}
        />
      </FormGroup>
      <Bar data={dataSet} options={options}></Bar>
    </>
  );
}
