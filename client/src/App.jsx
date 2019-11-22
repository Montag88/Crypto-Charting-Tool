import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BPIChart from './Chart';

function App() {
  const [bpiDataState, setBpiData] = useState({});

  const getBpiData = () => {
    axios.get('http://localhost:3000/api/bpiData')
      .then(({ data }) => {
        // console.log('DATA', data);
        setBpiData(data);
      });
  };

  useEffect(() => {
    getBpiData();
  }, []);

  return (
    <div>
      <h1>Cryptocurrency Charting Tool</h1>
      <BPIChart bpiData={bpiDataState} />
      <p>Powered By CoinDesk</p>
    </div>
  );
}

export default App;
