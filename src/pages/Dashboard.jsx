import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DataTable from "../components/DataTable.jsx";
import Chart from "../components/PieChart.jsx";
import ChartBox from "../components/ChartBox.jsx";
import styles from "../styles/Dashboard.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState("name"); // State for the selected value

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update the selected value when the user makes a selection
  };

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#e4f0e2",
        p: "10px",
        height: "100%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Item sx={{ backgroundColor: "transparent" }} elevation={0}>
            <DataTable />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item sx={{ backgroundColor: "transparent" }} elevation={0}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      <h2>Ad Insights</h2>
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          size="small"
                          value={selectedValue} // Use the selected value from the state
                          onChange={handleChange} // Handle the change event
                        >
                          <MenuItem value="name">Name</MenuItem>
                          <MenuItem value="cost">Cost</MenuItem>
                          <MenuItem value="revenue">Revenue</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        backgroundColor: "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      elevation={0}
                    >
                      <div className={styles.box}>
                        <ChartBox
                          handleSwitchChange={handleSwitchChange}
                          isChecked={isChecked}
                          selectedValue={selectedValue} // Pass the selected value to ChartBox
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
