import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const KEY = "b29c9a1a";
  //let movieQuery = title.replaceAll(" ", "+");
  let url = ` http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&t=${title}`;

  let getData = () => {
    axios.get(url).then((resp) => {
      setData(resp.data);
    });
  };

  let getInput = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="App">
      <button onClick={getData}>get Movie</button>
      <img src={data.Poster}></img>
      <ul>
        <li>{data.Title}</li>
        <br />
        <li>{data.Plot}</li>
        <br />
        <li>{data.Genre}</li>
      </ul>
      <input type="text" onChange={getInput} />
    </div>
  );
}

export default App;
