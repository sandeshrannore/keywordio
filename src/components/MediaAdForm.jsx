import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SubmittedModal from "./SubmittedModal";
import { useNavigate } from "react-router-dom";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const MediaAdForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let navigate = useNavigate();

  const handeleSubmit = () => {
    handleOpen();
    setTimeout(() => {
      handleClose();
      navigate("/ads");
    }, 600);
  };

  const handeleBack = () => {
    navigate("/ads");
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: "10px",
        height: "100%",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          p: "10px",
          height: "100%",
          position: "relative",
        }}
        component={Paper}
      >
        <h3>Create Text & Media</h3>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div>
              <h4>Heading 01</h4>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder="Add a heading that would make users interested"
                fullWidth
              />
            </div>
            <div>
              <h4>Heading 02</h4>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder="Add a heading that would make users interested"
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <h4>Description 01</h4>
              <TextField
                id="outlined-multiline-static"
                multiline
                size="small"
                rows={5}
                placeholder="Add your primary text to help users understand more about your products, services and offers"
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div>
              <h4>Landscape Marketing Image (1:9:1)</h4>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder="Add the URL of the image you want to use for the ad"
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div>
              <h4>Portrait Marketing Image (4:5)</h4>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder="Add the URL of the image you want to use for the ad"
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div>
              <h4>Square Marketing Image (1:1)</h4>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder="Add the URL of the image you want to use for the ad"
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <h4>Business Name</h4>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder="Add your Business name"
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <h4>Button Label</h4>
              <TextField
                id="outlined-select-currency"
                select
                placeholder="Select a label that best suits your ad"
                fullWidth
                size="small"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <div>
              <h4>Video URL</h4>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder="Add the URL of the video you want to use for the ad"
                fullWidth
              />
            </div>
          </Grid>
        </Grid>
        <div style={{ paddingBottom: "80px" }}>
          <h4>Website URL</h4>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            placeholder="Add the URL of the landing page you want to redirect users to"
            fullWidth
          />
        </div>
        <div
          style={{
            position: "absolute",
            right: 20,
            bottom: 20,
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Button onClick={handeleBack} variant="outlined">
            Back
          </Button>
          <Button onClick={handeleSubmit} variant="contained">
            Submit
          </Button>
          <SubmittedModal open={open} handleClose={handleClose} />
        </div>
      </Box>
    </Box>
  );
};

export default MediaAdForm;
