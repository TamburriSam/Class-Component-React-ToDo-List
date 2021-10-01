import React, { Component } from "react";
import "../App.css";

class ListItem extends Component {
  render() {
    const { tasks, deleteTask, editTask, updateTask, submitNewTask } =
      this.props;

    return (
      <ul id='list'>
        {tasks.map((task) => {
          if (!task.isEditing) {
            return (
              <li className={"color"} key={task.id}>
                {task.text}

                <button data-id={task.id} onClick={() => deleteTask(task.id)}>
                  Delete
                </button>

                <button onClick={() => editTask(task)}> Edit</button>
              </li>
            );
          } else {
            return (
              <li key={task.id}>
                <input
                  type='input'
                  onChange={(e) => updateTask(e, task)}
                  placeholder={task.text}
                ></input>

                <button onClick={(e) => submitNewTask(e, task)}>
                  Submit New Item
                </button>
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

export default ListItem;
