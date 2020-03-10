import React, { Component } from 'react'
import Task from './task'

class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTask: [],
      message: ''
    }
    
    this.handleClickChange = this.handletodoTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  handletodoTask(e) {
    e.preventDefault();
    const {todoTask} = this.state;
    const newTask = this.newTask.value;

    const isOnTheList = todoTask.includes(newTask);
    if(isOnTheList) {
      this.setState({
        message: 'This Task is already on the list'
      })

    } else {
      newTask !== '' && this.setState({
        todoTask: [...todoTask, newTask],
        message: ''
      });
    }

    this.addForm.reset();
  }
  removeTask(task) {
    const newtodoTask = this.state.todoTask.filter(todoTask => {
      return todoTask !== task;
    })

    this.setState({
      todoTask: [...newtodoTask]
    })
  }

  render () {
    const {todoTask, message} = this.state;

    return (
      <>
      <form ref={input => this.addForm = input} onSubmit={(e) => {this.handletodoTask(e)}}>
        <label htmlFor="newTask">Add New Task</label>
        <input id="newTask" ref={input => this.newTask = input} type="text"/>

        <button type="submit" id="newTask">Add Task</button>
      </form>

      {
        message !== '' && <p>{message}</p>
      }

      <ul>
        {
          todoTask.map(todoTask => {
            return (
              <>
              <Task onClick={this.removeTask} taskCopy={todoTask}/>
              <button onClick={(e) => this.removeTask(todoTask)} className="task__remove-task">Remove Task</button>
              </>
            )
          })
        }
      </ul>
      </>
    )
  }
}

export default AddTask;