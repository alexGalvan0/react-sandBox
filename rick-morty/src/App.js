import Nav from './componenets/Nav';
import ActionAreaCard from './componenets/ActionAreaCard'
import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {
  const [data, setData] = useState([])
  const url = "https://rickandmortyapi.com/api/character";
  
  useEffect(() => {
    axios.get(url)
      .then((resp) => {
        setData(resp.data.results);
      })
  }, []);

  return (
    <div className="App container-fluid">
      <Nav />
      <Grid container justifyContent="center" spacing={2}>
        {data.map((c) => <ActionAreaCard key={c.name} character={c} />)}
      </Grid>
    </div>
  );
}

export default App;
