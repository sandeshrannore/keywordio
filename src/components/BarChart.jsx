import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

const chartSetting = {
  yAxis: [
    {
      label: "",
    },
  ],
  width: 400,
  height: 305,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

const chartDataByName = [
  { id: 0, value: 40, label: "Category A" },
  { id: 1, value: 35, label: "Category B" },
  { id: 2, value: 25, label: "Category C" },
];

const chartDataByCost = [
  { id: 0, value: 50, label: "Category A" },
  { id: 1, value: 30, label: "Category B" },
  { id: 2, value: 70, label: "Category C" },
];

const chartDataByRevenue = [
  { id: 0, value: 15, label: "Category X" },
  { id: 1, value: 35, label: "Category Y" },
  { id: 2, value: 50, label: "Category Z" },
];

const valueFormatter = (value) => `${value}mm`;

export default function BarChartTable({ selectedValue }) {
  let dataset = [];

  if (selectedValue === "name") {
    dataset = chartDataByName;
  } else if (selectedValue === "cost") {
    dataset = chartDataByCost;
  } else if (selectedValue === "revenue") {
    dataset = chartDataByRevenue;
  }

  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "label" }]}
      series={[{ dataKey: "value", label: "Count", valueFormatter }]}
      {...chartSetting}
      slotProps={{
        legend: {
          direction: "column",
          position: { vertical: "top", horizontal: "middle" },
        },
      }}
    />
  );
}
