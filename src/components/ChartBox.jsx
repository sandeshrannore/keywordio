import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MaterialUISwitch } from "../utilities/SwitchUi";
import Chart from "./PieChart";
import BarChartTable from "./BarChart";

const ChartBox = ({ handleSwitchChange, isChecked, selectedValue }) => {
  return (
    <div style={{ marginLeft: "100px" }}>
      {isChecked ? (
        <BarChartTable selectedValue={selectedValue} />
      ) : (
        <Chart selectedValue={selectedValue} />
      )}
      <FormGroup>
        <FormControlLabel
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
          control={
            <MaterialUISwitch sx={{ m: 1 }} onChange={handleSwitchChange} />
          }
        />
      </FormGroup>
    </div>
  );
};

export default ChartBox;
