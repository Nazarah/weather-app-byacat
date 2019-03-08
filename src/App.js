import React from "react"; // import React object from react package

import Titles from "./components/titles";
import Forms from "./components/forms";
import Weather from "./components/weather";

const API_KEY = "0541e132ca7f9757d2c2e10f6380bbdc";

//initializing component
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    windSpeed: undefined,
    windDeg: undefined,
    description: undefined,
    error: undefined
  }
  // functions to get weather information
  getWeatherData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const api_response_info = await api_response.json();
    if (city && country) {
      this.setState({
        temperature: api_response_info.main.temp,
        city: api_response_info.name,
        country: api_response_info.sys.country,
        humidity: api_response_info.main.humidity,
        windSpeed: api_response_info.wind.speed,
        windDeg: api_response_info.wind.deg,
        description: api_response_info.weather[0].description,
        error: ""
      });
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        windSpeed: undefined,
        windDeg: undefined,
        description: undefined,
        error: "Please enter name of the City and Country."
      });
    }
  }

  //to display the data in the component
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 title-block">
                  <Titles />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 form-block">
                  <Forms getWeatherData={this.getWeatherData} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 weather_block">
                  <Weather
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity}
                      windSpeed={this.state.windSpeed}
                      windDeg={this.state.windDeg}
                      description={this.state.description}
                      error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};



export default App;
