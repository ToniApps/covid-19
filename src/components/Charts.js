import React from 'react';
import DailyChart from './charts/DailyChart';
import CountryDailyChart from './charts/CountryDailyChart';

export default function Charts() {
  return (
    <>
      <DailyChart></DailyChart>
      <CountryDailyChart></CountryDailyChart>
    </>
  );
}
