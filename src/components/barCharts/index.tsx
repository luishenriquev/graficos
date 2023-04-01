import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import styled from "styled-components";

export const BarBasic = () => {
  const options = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    chart: {
      background: "#262D47",
      zoom: {
        enabled: false
    }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#fff'
        }
      },
      categories: [
          
      ],
    },
    xaxis: {
      labels: {
        style: {
          colors: '#fff'
        }
      }
    },
    grid: {
      borderColor: "#6e8192",
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        gradientToColors: ['#6095eab7']
      }
    },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      
  };

  return (
    <DivBarbasic>
      <ReactApexChart
        width="100%"
        height={300}
        type="bar"
        series={options.series}
        options={options}
      />
    </DivBarbasic>
  );
};

const DivBarbasic = styled.div`
  width: 55%;
`;
