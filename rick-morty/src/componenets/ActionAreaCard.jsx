import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import axios from 'axios'

export default function ActionAreaCard() {
  const [ char, setChar ] = useState('');
  const [ num, setNum ] = useState(0);
  const [ image, setImage ] = useState('');
  const [ response, setResponse ] = useState('');


  const url = 'https://rickandmortyapi.com/api/character'


  const getChat = async () => {
    const response = await axios.get(url)

    setChar(response.data.results[num].name)
    setImage(response.data.results[num].image)
    setNum(num<19 ? num+1: 0)

  }

  useEffect(()=>{
    getChat()
  },[])




  return (
    <Card sx={{ maxWidth: 345 }} onClick={getChat}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {char}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}