import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

import axios from "axios";

export default function ActionAreaCard({ character }) {
  // const [char, setChar] = useState("");
  // const [num, setNum] = useState(0);
  // const [image, setImage] = useState("");

  // const getChat = () => {
  //   setChar(data[num].name);
  //   setImage(data[num].image);
  //   setNum(num < 19 ? num + 1 : 0);
  // };

  return (
    <Grid item>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={character.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {character.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
