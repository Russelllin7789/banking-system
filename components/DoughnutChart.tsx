"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  return (
    <>
      <Doughnut data={accounts} />
    </>
  );
};

export default DoughnutChart;
