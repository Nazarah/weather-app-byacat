import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.city && this.props.country && <p className="attribute"> Location:
            <span className="value"> {this.props.city}, {this.props.country} </span>
          </p>
        }
        {
          this.props.temperature && <p className="attribute"> Temperature:
            <span className="value"> {this.props.temperature} </span>
          </p>
        }
        {
          this.props.description && <p className="attribute"> Condition:
            <span className="value"> {this.props.description} </span>
           </p>
        }
        {
          this.props.humidity && <p className="attribute"> Humidity:
            <span className="value"> {this.props.humidity} </span>
          </p>
        }
        {
          this.props.windSpeed && this.props.windDeg  && <p className="attribute"> Wind:
            <span className="value"> {this.props.windSpeed}, {this.props.windDeg} </span>
          </p>
        }
        {
          this.props.error && <p className="error">{this.props.error}</p>
        }
      </div>
    );
  }
};

export default Weather;
