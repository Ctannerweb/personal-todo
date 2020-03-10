import React, { Component } from 'react'

class Task extends Component {
  render () {
    const {taskCopy} = this.props;
    return (
      <li className="task">
        <label htmlFor="taskComplete">Complete Task</label>
        <input id="taskComplete" type="checkbox" />
        <p className="task__copy">{taskCopy}</p>
        <button className="task__remove-task">Remove Task</button>
      </li>
    )
  }
}

export default Task;