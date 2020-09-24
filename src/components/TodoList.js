import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">To-Do List</h3>
          <TodoItem />
          <button
            type="button"
            className="btn btn-danger btn-block text-capitalize mt-5"
          >
            Clear List
          </button>
        </ul>
      </div>
    );
  }
}

export default TodoList;
