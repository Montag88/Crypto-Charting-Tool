import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

function BPIChart({ bpiData }) {
  const chartRef = React.createRef();

  const renderChart = () => {
    const ctx = chartRef.current.getContext('2d');
    const bpiChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'BitCoin Price Index',
          data: bpiData.data,
        }],
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              displayFormats: {
                quarter: 'MMM YYYY',
              },
            },
            distribution: 'series',
          }],
          yAxes: [{
            ticks: {
              beginAtZero: false,
            },
          }],
        },
      },
    });
  };

  useEffect(() => {
    renderChart();
  }, [bpiData]);

  return (
    <canvas id="bpichart" ref={chartRef} width="400" height="400" />
  );
}
export default BPIChart;

BPIChart.propTypes = {
  bpiData: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};
