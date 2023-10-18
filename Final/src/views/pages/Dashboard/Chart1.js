import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const options = {
    series: [{
      data: [1100, 690, 1380, 1150, 1200, 430, 1200, 1380, 1300, 1200, 1170, 1100, 1200]
    }],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '80%',
        borderRadius: 5, // Set the border radius for the bars
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      axisBorder: {
        show: false, // Hide the x-axis line
      },
    },
    yaxis: {
      show: false, // Hide the y-axis labels
    },
    grid: {
      show: false, // Hide both vertical and horizontal grid lines
    },
    colors: ['#f1efff'],
  };

  return (
    <div>
      <ReactApexChart options={options} series={options.series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
