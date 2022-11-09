import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const KEY = "b29c9a1a";
  let movie = ""
  let movieQuery = movie.replaceAll(" ","+")
  let url = ` http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&t=${movieQuery}`;


  const [data,setData] = useState([])


  useEffect(() => {
    axios.get(url).then((resp) => {
      setData(resp.data);
    });
  }, []);

  if (data.length == 0){
    console.log('no data')
  }
  else{
    console.log(data)
    return <div className="App">
      <input type="text"></input>
      <img src={data.Poster}></img>
    </div>;
  }

}

export default App;
