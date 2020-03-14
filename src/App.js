import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import useApiData from './services/api';
import CountryStats from './components/CountryStats';
import GlobalStats from './components/GlobalStats';
import Moment from 'moment';
import Charts from './components/Charts';

function App() {
  const [data, ,] = useApiData();

  let lastUpdate = '...';

  if (data) {
    lastUpdate = Moment(data.lastUpdate).toString();
  }

  return (
    <Container style={{ marginTop: '3rem' }}>
      <Typography variant="h1" component="h1">
        COVID-19 Daily Data
      </Typography>
      <Typography variant="h5" component="h5">
        Created by&nbsp;
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/antonio-mora-rives/"
        >
          Antonio Mora Rives
        </Link>
      </Typography>

      <Typography variant="h2" component="h2" style={{ marginTop: '1rem' }}>
        Data
      </Typography>

      <GlobalStats style={{ marginTop: '1rem' }}></GlobalStats>
      <CountryStats style={{ marginTop: '3rem' }}></CountryStats>

      <Typography variant="h2" component="h2" style={{ marginTop: '1rem' }}>
        Charts
      </Typography>
      <Charts></Charts>

      <Typography variant="h6" component="h6" style={{ marginTop: '3rem' }}>
        API data provided by&nbsp;
        <Link target="_blank" href="https://covid19.mathdro.id/">
          Mathdroid
        </Link>
      </Typography>
      <Typography variant="h6" component="h6" style={{ marginBottom: '3rem' }}>
        Updated {lastUpdate}
      </Typography>
    </Container>
  );
}

export default App;
