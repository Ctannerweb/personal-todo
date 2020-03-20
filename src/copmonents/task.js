import React, { Component } from 'react'

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskCompleted: false
    }

    this.toggleTaskCompleted = this.toggleTaskCompleted.bind(this);
  }

  toggleTaskCompleted = () => {
    this.setState((currentState) => ({
      taskCompleted: !currentState.taskCompleted
    }))
  }

  render () {
    const {taskCompleted} = this.state;
    const {taskCopy, triggerRemoveTask, taskID} = this.props;

    return (
      <li className="task" data-state-completed={taskCompleted ? "true" : "false"}>
        <label className="task__checkbox" htmlFor={taskID}>
          <span className="t-hidden">Mark TODO complete</span>
          <input onClick={this.toggleTaskCompleted} id={taskID} type="checkbox" />
          <span className="task__checkbox__custom"></span>
        </label>
        <p className="task__copy t-body">{taskCopy}</p>
        <button onClick={triggerRemoveTask} className="task__remove-task t-button">Remove</button>
      </li>
    )
  }
}

export default Task;