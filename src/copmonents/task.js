import React, { Component } from 'react'

class Task extends Component {
  render () {
    const {taskCopy, triggerRemoveTask} = this.props;
    return (
      <li className="task">
        <label className="task__checkbox" htmlFor="taskComplete">
          <span className="t-hidden">Mark Task complete</span>
          <input id="taskComplete" type="checkbox" />
          <span className="task__checkbox__custom"></span>
        </label>
        <p className="task__copy t-body">{taskCopy}</p>
        <button onClick={triggerRemoveTask} className="task__remove-task t-button">Remove Task</button>
      </li>
    )
  }
}

export default Task;