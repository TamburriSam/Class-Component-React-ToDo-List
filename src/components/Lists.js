import React, { Component } from "react";
import "../App.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

class Lists extends Component {
  render() {
    const { tasks, deleteTask, editTask, updateTask, submitNewTask } =
      this.props;

    return (
      <List id='list'>
        {tasks.map((task) => {
          if (!task.isEditing) {
            return (
              <ListItem className={"listItem"} key={task.id}>
                <p id='text'>{task.text}</p>

                <div id='button-container'>
                  <Button
                    variant='outlined'
                    data-id={task.id}
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </Button>

                  <Button variant='outlined' onClick={() => editTask(task)}>
                    {" "}
                    Edit
                  </Button>
                </div>
              </ListItem>
            );
          } else {
            return (
              <ListItem key={task.id}>
                <div id='update-container'>
                  <Input
                    type='input'
                    onChange={(e) => updateTask(e, task)}
                    placeholder='New Task'
                  ></Input>

                  <Button
                    variant='outlined'
                    onClick={(e) => submitNewTask(e, task)}
                  >
                    Submit New Item
                  </Button>
                </div>
              </ListItem>
            );
          }
        })}
      </List>
    );
  }
}

export default Lists;
