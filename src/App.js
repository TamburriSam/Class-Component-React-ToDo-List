// App.js

import React, { Component } from "react";
import MyComponent from "./components/MyComponent";
import FactCheckIcon from "@mui/icons-material/FactCheck";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "{ todo }",
    };

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log("Button has been clicked!");
  }

  render() {
    return (
      <div
        style={{
          background:
            "linear-gradient(69deg, hsla(10, 82%, 65%, 1) 0%, hsla(290, 79%, 13%, 1) 100%)",
          height: "100vh",
        }}
      >
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
