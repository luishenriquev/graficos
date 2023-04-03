import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

export const Bar = () => {
  const [data, updateData] = useState([44, 55, 57, 56, 61, 58, 63, 60, 66]);

  useEffect(() => {
    const interval = setInterval(() => {
      const val = Math.floor(Math.random() * (20 - 10 + 1)) + 30;
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
        name: "Net Profit",
        data: data,
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 88, 94],
      },
      {
        name: "Free Cash Flow",
        data: data,
      },
    ],
    chart: {
      background: "#262D47",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        endingShape: "rounded",
      },
    },

    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "#6e8192",
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: ["#dc354646", "#dc354646", "#dc354646"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#ffc107", "#ffc107", "#ffc107"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      width: 0,
    },
    legend: {
      show: false,
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: "#fff",
        },
      },
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
        },
      },
    ],
    tooltip: {
      y: {
        formatter: function (val: any) {
          return "$ " + val + " thousands";
        },
      },
    },
  };

  return (
    <DivBar>
      <ReactApexChart
        type={"bar"}
        width="97%"
        height={300}
        options={options}
        series={options.series}
      />
    </DivBar>
  );
};

const DivBar = styled.div`
  width: 40%;
`;
