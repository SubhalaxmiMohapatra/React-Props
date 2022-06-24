import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Cat1
          name="Subhalaxmi Mohapatra"
          Contact="6370677565"
          Email="subhalaxmi123@gmail.com"
          Designation="Assitant system engineer"
        />
      </div>
    );
  }
}

const Cat1 = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.Email}</h3>
 <h3>{props.Designation}</h3>
 <h3>{props.Contact}</h3>



    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
