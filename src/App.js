import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      items: [
        { text: "houssem", isCompleted: false },
        { text: "hatem", isCompleted: false },
        { text: "dhia", isCompleted: false },
      ],
    };
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  addItem = () => {
    this.setState({
      items: [...this.state.items, { text: this.state.input }],
    });
  };
  handleDelete = (indice) => {
    this.setState({
      items: this.state.items.filter((el, key) => key !== indice),
    });
  };
  handleComplete = (id) => {
    this.setState({
      items: this.state.items.map((el, index) =>
        index === id ? { ...el, isCompleted: !el.isCompleted } : el
      ),
    });
  };
  render() {
    return (
      <div>
        <div className="header">
          <h1>To-Do App!</h1>
          <h4>Add New To-Do</h4>
          <input
            className="itemname"
            type="text"
            placeholder="Enter new task"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button className="btnadd" onClick={this.addItem}>
            Add
          </button>
        </div>
        <p className="paragraph">Let's get some work done!</p>
        <div>
          {this.state.items.map((el, index) => (
            <div className="buttons">
              <button
                className="comp-del"
                onClick={() => this.handleComplete(index)}
              >
                {el.isCompleted ? "undo" : "complete"}
              </button>
              <button
                className="comp-del"
                onClick={() => this.handleDelete(index)}
              >
                delete
              </button>
              <p style={{ textDecoration: el.isCompleted && "line-through" }}>
                {el.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
