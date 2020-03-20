import React, { Component } from 'react'
import Task from './task'

class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTask: ['Example TODO Task'],
      message: ''
    }
    
    this.handleTodoTask = this.handleTodoTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  handleTodoTask(e) {
    e.preventDefault();
    const {todoTask} = this.state;
    const newTask = this.newTask.value;

    const isOnTheList = todoTask.includes(newTask);
    if(isOnTheList) {
      this.setState({
        message: 'That Task is already on the list'
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
    const newTodoTask = this.state.todoTask.filter(todoTask => {
      return todoTask !== task;
    })

    this.setState({
      todoTask: [...newTodoTask]
    })

    if(newTodoTask.length === 0) {
      this.setState({
        message: 'There are no TODOs left!!!'
      })
    }
  }

  removeAllTodoTasks(e) {
    const {todoTask} = this.state;

    if(todoTask !== 0) {
      this.setState({
        todoTask: [],
        message: 'There are no TODOs left!!!'
      })
    }
  }

  render () {
    const {todoTask, message} = this.state;

    return (
      <>
      <section>
        <form className="add-task" ref={input => this.addForm = input} onSubmit={(e) => {this.handleTodoTask(e)}}>
          <label className="t-hidden" htmlFor="newTask">Add New TODO</label>
          <input className="add-task__input t-body" placeholder="Enter new TODO" id="newTask" ref={input => this.newTask = input} type="text"/>

          <button className="add-task__new-task t-body" type="submit">Add</button>
        </form>

        {
          (message !== '' || todoTask.length === 0) && <p className="task-message t-section-heading">{message}</p>
        }
        
        {
          todoTask.length > 0 &&
          <>
          <ul>
            {
              todoTask.map((todoTask, index) => {
                return (
                  <>
                  <Task key={index} triggerRemoveTask={(e) => this.removeTask(todoTask)} taskCopy={todoTask} taskID={"task" + index}/>
                  </>
                )
              })
            }
          </ul>
          <div className="add-task__button-wrap">
            <button className="add-task__remove-tasks t-button" onClick={(e) => this.removeAllTodoTasks(todoTask)}>Remove All</button>
          </div>
          </>
        }
      </section>
      </>
    )
  }
}

export default AddTask;