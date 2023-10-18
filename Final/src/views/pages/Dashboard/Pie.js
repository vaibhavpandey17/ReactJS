import { Typography } from '@material-ui/core';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Pie = () => {
  const options = {
    series: [20, 43, 40],
    chart: {
      type: 'donut',
    },
    responsive: [
      {
        breakpoint: 0, // Set the breakpoint to 0 to apply these options for all screen sizes
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    dataLabels: {
      enabled: false, // Set this to false to hide labels and values
    },
    legend: {
      show: false, // Set this to false to hide color descriptions
    },
    colors: ['#f04399', '#643be8', '#f1efff'],
  };

  return (
    <div
      style={{
        width: '100%',
        height: '300px',
        position: 'relative',
      }}
    >
      <ReactApexChart options={options} series={options.series} type="donut" height="100%" />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          fontSize: '18px',
          color: '#000',
          textAlign: 'center',
          fontWeight: 600,
        }}
      >
        <Typography variant='h4' style={{ fontWeight: 800 }}>65%</Typography>
        <Typography variant='p' style={{ fontWeight: 400 }}>Total New</Typography><br />
        <Typography variant='p' style={{ fontWeight: 400 }}>Customers</Typography>
      </div>
    </div>
  );
};

export default Pie;
