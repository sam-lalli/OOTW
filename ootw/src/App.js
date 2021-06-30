import { useState, useEffect } from 'react';
import axios from 'axios'
import Image from "./Image"
import './App.css';

function App() {

  const [image, setImage] = useState([])

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=C7pfrpBZTRra0Etc7eupBfATbpk2SJhrhyg0TwJ0")
    .then(res => {
      setImage(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(`${err}, Try Fetching Again`)
    })
  }, [])
  return (
    <div className="App">
      <Image image={image}/>
    </div>
  );
}

export default App;
