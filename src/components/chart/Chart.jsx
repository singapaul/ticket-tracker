import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),

const Chart = ({ teamData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        display:false,
      },
      title: {
        display: true,
        text: "No. of tickets",
      },
    },
  };


 const labels = teamData.map(member => member.name)

  const data = {
    labels,
    datasets: [
      {
        label: "No. of tickets",
        data: teamData.map(member => member.counter),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />;
    </div>
  );
};

export default Chart;
