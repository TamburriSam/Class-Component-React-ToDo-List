import React, { Component } from "react";
import Lists from "./Lists";
import uniqid from "uniqid";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import "../App.css";
import FactCheckIcon from "@mui/icons-material/FactCheck";

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        text: "",
        id: uniqid(),
        checked: false,
        isEditing: false,
      },
      tasks: [],
    };

    this.submitNewTask = this.submitNewTask.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  deleteTask = (task) => {
    const todos = this.state.tasks.filter((item) => {
      return item.id !== task;
    });
    this.setState({ tasks: todos });
  };

  onHandleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        checked: this.state.task.checked,
        isEditing: this.state.task.isEditing,
      },
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: "",
        id: uniqid(),
        checked: false,
        isEditing: false,
      },
    });
    document.getElementById("sub").value = "";
  };

  editTask = (task) => {
    let updatedTodos = this.state.tasks.map((todo) => {
      if (todo.id === task.id) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });

    this.setState({
      tasks: updatedTodos,
    });
  };

  updateTask = (e, task) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        checked: this.state.task.checked,
        isEditing: this.state.task.isEditing,
      },
    });
  };

  submitNewTask = (e, task) => {
    const updatedTodos = [...this.state.tasks].map((todo) => {
      if (todo.id === task.id) {
        return (todo = {
          text: this.state.task.text,
          id: uniqid(),
          isEditing: false,
        });
      }
      return todo;
    });
    document.getElementById("sub").value = "";
    this.setState({ tasks: updatedTodos });
  };

  componentDidMount() {
    fetch("https://api.coinbase.com/v2/currencies")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    const { subtitle } = this.props;

    return (
      <div
        style={{
          width: "30vw",
          margin: "auto",
          marginTop: "60px",
          padding: "60px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          backgroundColor: "white",
          height: "60vh",
          borderRadius: "10px",
          transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
        }}
      >
        <h1>
          {" "}
          <FactCheckIcon></FactCheckIcon> {subtitle}
        </h1>
        <br></br>
        <div id='container1'>
          <Input
            id='sub'
            onChange={this.onHandleChange}
            placeholder='Submit Task'
          ></Input>
          <Button variant='outlined' onClick={this.onSubmit}>
            Submit Item
          </Button>
        </div>
        <Lists
          deleteTask={this.deleteTask}
          tasks={this.state.tasks}
          editTask={this.editTask}
          updateTask={this.updateTask}
          submitNewTask={this.submitNewTask}
        />
      </div>
    );
  }
}

export default MyComponent;
