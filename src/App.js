import {useState} from "react";
import './App.css';
import axios from 'axios';
import { Button} from 'react-bootstrap'


function App() {
  // used an api 
  const api_key = "628a2b32d4ad509122904ca3a0c0ffc2";
  const [location, setLocation] = useState('');
  const [data, setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`

  const fetchData = async () => {
    try {
      if (location.trim() === '') return alert("Enter a city");
      const response = await axios.get(url);
      setData(response.data);
      setLocation('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') fetchData();
  };
    return (
        <div className="App">
          <div className="box">
            <div className="boxx">
              <div className="search">
              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Button onClick={fetchData}>Search</Button>
              </div>
              <div className="location">
                {/* <p>{data.name}</p> */}
                {data.name ? <h4>{data.name}</h4> : <center> Search for a City </center> }
                {data.main ? <h2>{data.main.temp.toFixed()}°C</h2> : null}
                {data.weather ? <p>{data.weather[0].main}</p> : null}
              </div>
            </div>
          </div>
        </div>
    );
}

export default App;

                    