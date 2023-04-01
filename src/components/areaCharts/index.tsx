import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import styled from "styled-components";

export const Line = () => {

  const options: ApexOptions = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
        background: "#262D47",
        zoom: {
            enabled: false
        }
      },
      legend: {
        show: false,
      },
      grid: {
        borderColor: "#6e8192",
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        type: "datetime",
        labels: {
          style: {
            colors: '#fff'
          }
        },
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: '#fff'
          }
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      colors: ['#20c997', '#ffc107'],
    
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      

  };

  return (
    <DivLine>

        <ReactApexChart width={'100%'}  height={300} type="area" options={options} series={options.series} />
    </DivLine>
    
  );
};

const DivLine = styled.div`
width: 97%;
`;
