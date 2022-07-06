import { useState } from "react";
import "./App.css";
import axios from 'axios';
function App() {
  const [Photo, setPhoto] = useState("");
  const [clientId, setclienId] = useState(
    "O95FLnUmi9JM0NfbbmyKfee9qBtc1GbZ02fGOKL3jnE"
  );
  const [result, setResult] = useState([]);

  function handleChange(event) {
    setPhoto(event.target.value);
  }
  function handleSubmit(event) {
    console.log(Photo);
    const url =
      "https://api.unsplash.com/search/photos?query=" +
      Photo +
      "&client_id=" +
      clientId;
    axios.get(url).then((response) => {
      setResult(response.data.results);
      console.log(response);
    });
  }

  return (
    <div className="App">
      <div id="title">Search Images</div>
      <div className="content">
      <input type="text" name="photo" onChange={handleChange} />
      <button onClick={handleSubmit}>search</button>
      </div>
      <div className="main">
      <div className="imagesoutput">
      {result.map((Photo) => (
        <img src={Photo.urls.small} alt="imag" />
      ))}
      </div>
    </div>
    </div>
  );
}

export default App;
