import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import styled from "styled-components";

export const BarBasic = () => {
  const [data, updateData] = useState([
    400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const val = Math.floor(Math.random() * (20 - 1 + 1)) + 30;
      let array = [...data, val];
      console.log(array);
      array.shift();
      updateData(array);
    }, 6000);
    return () => {
      window.clearInterval(interval); // clear the interval in the cleanup function
    };
  }, [data]);
  const options = {
    series: [
      {
        data: data,
      },
    ],
    chart: {
      background: "#262D47",
      zoom: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff",
        },
      },
      categories: [],
    },
    xaxis: {
      labels: {
        style: {
          colors: "#fff",
        },
      },
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
      type: "gradient",
      gradient: {
        gradientToColors: ["#6095eab7"],
      },
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
