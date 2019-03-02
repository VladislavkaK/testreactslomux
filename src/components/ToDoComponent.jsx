import React, { Component } from 'react';

class ToDoComponent extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            todoText: ''
        }

        this.updateText = this.updateText.bind(this);
    }

    updateText(e) {
        const {
            value
        } = e.target

        this.setState({
            todoText: value
        });
    }

    addTodo() {
        
        this.props.addTodo(this.state.todoText)

        this.setState({
            todoText: ''
        })
    }
  
    render() {
    
      return (
        <div>
          <label>{this.props.title || 'Без названия'}</label>
          <div>
            <input
              value={this.state.todoText}
              placeholder="Название задачи"
              onChange={this.updateText}
            />
            <button onClick={(e) => this.addTodo(e)}>Добавить</button>
            <ul>
              {this.props.todos.map((todo, idx) => <li key={idx}>{todo}</li>)}
            </ul>
          </div>
        </div>
      )
    }
}

export default ToDoComponent;