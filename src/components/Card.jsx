import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CardComp = ({ title, onCardClick, checked, image }) => {
  const handleCardClick = () => {
    onCardClick(title);
  };

  return (
    <Card sx={{ maxwidth: 345 }}>
      <CardActionArea onClick={handleCardClick}>
        <Checkbox {...label} checked={checked} />
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
          sx={{
            padding: "20px",
          }}
        />
        <CardContent
          sx={{
            backgroundColor: "#e4f0e2",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Create
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComp;
