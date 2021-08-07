import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./TaskItem.css";
import TaskList from "./TaskList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  handleInput = (event) => {
    // let target = event.target;
    // let value = target.value;
    // let name = target.name;
    this.setState({
      ...this.state,
      currentItem: {
        text: event.target.value,
        key: Date.now(),
      },
    });
  };
  submitHandler = (event) => {
    // const { text } = this.state;
    event.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };
  deleteItem = (key) => {
    const { items } = this.state;
    const remainingItem = items.filter((item) => item.key !== key);
    this.setState({ items: remainingItem });
  };
  setUpdate = (text, key) => {
    const { items } = this.state;
    items.map((item) => {
      if (item.key === key) {
        console.log("Item key to modify - ", item.key + " " + key);
        item.text = text;
      }
    });
    this.setState({ items: items });
  };

  render() {
    // const { items } = this.state;
    return (
      <div className='container App'>
        <div className='mx-auto'>
          <h1 className='hading1'>Add items To Do </h1>
          {/* <hr /> */}
          <form className='formelement mx:auto' onSubmit={this.submitHandler}>
            <div>
              <label className='mx-auto'>Enter Task</label>
              <input
                type='text'
                placeholder='Rahul task to do'
                value={this.state.currentItem.text}
                name='taskItem'
                className='margin-left:140px input1'
                onChange={this.handleInput}></input>
            </div>

            <div>
              <button type='submit' className='btn btn-danger mt-10'>
                Add Task
              </button>
            </div>
          </form>

          <p>{this.state.items.text}</p>
          {this.state.items.length > 0 ? <h3>Task List</h3> : ""}

          {console.log("Item value- ", this.state.items)}
          <TaskList
            data={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TaskItem;
