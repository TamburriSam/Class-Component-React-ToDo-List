import React, { Component } from "react";
import List from "./List";
import uniqid from "uniqid";
import Card from "@mui/material/Card";

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

    console.log(todos);
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

    console.log(this.state.tasks);
  };

  editTask = (task) => {
    let updatedTodos = this.state.tasks.map((todo) => {
      if (todo.id === task.id) {
        console.log("ok");
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

    console.log(this.state.task);
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

    this.setState({ tasks: updatedTodos });
  };

  submitSubNewTask = () => {};

  render() {
    const { title, subtitle } = this.props;

    return (
      <div>
        <h2>{subtitle}</h2>
        <p>{this.state.count}</p>
        <br></br>
        <div id='container1'>
          <input onChange={this.onHandleChange}></input>
          <button onClick={this.onSubmit}>Submit Item</button>
        </div>
        <List
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
