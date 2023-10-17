import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";

function createData(name, clicks, cost, conversion, revenue) {
  return { name, clicks, cost, conversion, revenue };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const calculateTotals = (data) => {
  const totals = {
    name: "Total",
    clicks: 0,
    cost: 0,
    conversion: 0,
    revenue: 0,
  };

  for (const row of data) {
    totals.clicks += row.clicks;
    totals.cost += row.cost;
    totals.conversion += row.conversion;
    totals.revenue += row.revenue;
  }

  return totals;
};

const total = calculateTotals(rows);

const DataTable = () => {
  const [orderBy, setOrderBy] = useState("name");
  const [order, setOrder] = useState("asc");

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const getComparator = (order, orderBy) => {
    return order === "asc"
      ? (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1)
      : (a, b) => (a[orderBy] > b[orderBy] ? -1 : 1);
  };

  const sortedRows = rows.slice().sort(getComparator(order, orderBy));

  return (
    <TableContainer component={Paper} sx={{ height: 450 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>
              <h2>Ad Insights</h2>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>
              Campaigns
              <TableSortLabel
                active={orderBy === "name"}
                direction={orderBy === "name" ? order : "asc"}
                onClick={() => handleRequestSort("name")}
              />
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Clicks
              <TableSortLabel
                active={orderBy === "clicks"}
                direction={orderBy === "clicks" ? order : "asc"}
                onClick={() => handleRequestSort("clicks")}
              />
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Cost
              <TableSortLabel
                active={orderBy === "cost"}
                direction={orderBy === "cost" ? order : "asc"}
                onClick={() => handleRequestSort("cost")}
              />
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Conversion
              <TableSortLabel
                active={orderBy === "conversion"}
                direction={orderBy === "conversion" ? order : "asc"}
                onClick={() => handleRequestSort("conversion")}
              />
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Revenue
              <TableSortLabel
                active={orderBy === "revenue"}
                direction={orderBy === "revenue" ? order : "asc"}
                onClick={() => handleRequestSort("revenue")}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.clicks}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
              <TableCell align="right">{row.conversion}</TableCell>
              <TableCell align="right">{row.revenue}</TableCell>
            </TableRow>
          ))}
          <TableRow sx={{backgroundColor:'#e4f0e2'}}>
            <TableCell component="th" scope="row">
              {total.name}
            </TableCell>
            <TableCell align="right">{total.clicks}</TableCell>
            <TableCell align="right">{total.cost}</TableCell>
            <TableCell align="right">{total.conversion}</TableCell>
            <TableCell align="right">{total.revenue}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
