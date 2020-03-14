import React from 'react';
import { Container, Typography } from '@material-ui/core';
import useApiData, { BASE_URL } from './services/api';
import CountryStats from './components/CountryStats';
import GlobalStats from './components/GlobalStats';
import Moment from 'moment';

function App() {
  const [data, errors, loading] = useApiData();

  let lastUpdate = '...';

  if (data) {
    lastUpdate = Moment(data.lastUpdate).toString();
  }

  return (
    <Container style={{ marginTop: '3rem' }}>
      <Typography variant="h6" component="h6">
        Updated {lastUpdate}
      </Typography>

      <GlobalStats style={{ marginTop: '1rem' }}></GlobalStats>
      <CountryStats style={{ marginTop: '3rem' }}></CountryStats>
      <img
        src={`${BASE_URL}/og`}
        alt="Graphics"
        style={{
          maxWidth: '50%',
          marginTop: '3rem'
        }}
      />
    </Container>
  );
}

export default App;
