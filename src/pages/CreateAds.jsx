import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardComp from "../components/Card.jsx";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import img1 from '../assets/image1.svg'
import img2 from '../assets/image2.svg'

const textAd = "Text Ad";
const mediaAd = "Media Ad";

const CreateAds = () => {
  let navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (title) => {
    if (selectedCard === title) {
      setSelectedCard(null); // Uncheck the card if it's already selected
    } else {
      setSelectedCard(title); // Check the card
    }
  };

  const handleClick = () => {
    if (selectedCard === textAd) {
      navigate("/text-ad");
    } else if (selectedCard === mediaAd) {
      navigate("/media-ad");
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#e4f0e2",
        p: "10px",
        display: "flex",
        justifyContent: "center",
        mt:'60px'
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Grid container justifyContent="right">
            <CardComp
              title={textAd}
              onCardClick={handleCardClick}
              checked={selectedCard === textAd}
              image={img1}
            />
          </Grid>
        </Grid>
        <Grid item xs={6} md={6}>
          <Grid container justifyContent="left">
            <CardComp
              title={mediaAd}
              onCardClick={handleCardClick}
              checked={selectedCard === mediaAd}
              image={img2}
            />
          </Grid>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{ position: "absolute", right: 20, bottom: 20 }}
        disabled={!selectedCard}
        onClick={handleClick}
      >
        Next
      </Button>
    </Box>
  );
};

export default CreateAds;
