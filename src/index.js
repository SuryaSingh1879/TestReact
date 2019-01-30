import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
  getname() {
    return "surya";
  }
  render() {
    return <h1>Hello {this.getname()}</h1>;
  }
}
class World extends React.Component {
  constructor() {
    super();
    this.name = "welcome";
  }
  render() {
    return <p>World {this.name}</p>;
  }
}

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <Hello /> <World />
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById("app"));
