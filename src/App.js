// App.js

import React, { Component } from "react";
import MyComponent from "./components/MyComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "To Do List",
    };

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log("Button has been clicked!");
  }

  render() {
    return (
      <div style={{ border: "2px solid black" }}>
        <br></br>
        <MyComponent
          title='React'
          subtitle={this.state.title}
          onButtonClicked={this.onClickBtn}
        />
      </div>
    );
  }
}

export default App;
