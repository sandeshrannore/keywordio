import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
// import { ChartData } from "../utilities/Data";

const Chart = ({ selectedValue }) => {
  // Dummy data for the Pie Chart
  const dummyData = [
    { name: "Category 1", value: 30, label: "Category 1" },
    { name: "Category 2", value: 40, label: "Category 2" },
    { name: "Category 3", value: 20, label: "Category 3" },
    { name: "Category 4", value: 10, label: "Category 4" },
  ];

  // Update data based on the selected value
  let chartData = [];
  if (selectedValue === "name") {
    // Display data by name
    chartData = dummyData;
  } else if (selectedValue === "cost") {
    // Display data by cost
    // Update chartData based on cost data
    chartData = [
      { name: "Category A", value: 50, label: "Category 1" },
      { name: "Category B", value: 30, label: "Category 2" },
      { name: "Category C", value: 70, label: "Category 3" },
    ];
  } else if (selectedValue === "revenue") {
    // Display data by revenue
    // Update chartData based on revenue data
    chartData = [
      { name: "Category X", value: 15, label: "Category 1" },
      { name: "Category Y", value: 35, label: "Category 2" },
      { name: "Category Z", value: 50, label: "Category 3" },
    ];
  }

  return (
    <PieChart
      series={[
        {
          data: chartData, // Use the updated data based on the selected value
          innerRadius: 60,
          outerRadius: 100,
          paddingAngle: 2,
          cornerRadius: 0,
          startAngle: 0,
          endAngle: 360,
        },
      ]}
      slotProps={{
        legend: {
          direction: "column",
          position: { vertical: "middle", horizontal: "right" },
          padding: 0,
        },
      }}
      width={400}
      height={305}
    />
  );
};

export default Chart;
