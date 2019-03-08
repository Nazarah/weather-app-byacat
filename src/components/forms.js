import React from "react";

class Forms extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeatherData}>
        <input type="text" name="city" placeholder="city..."/>
        <input type="text" name="country" placeholder="country..."/>
        <button>Get Weather</button>
      </form>
    );
  }
};

export default Forms;
