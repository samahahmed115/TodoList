import React from "react";

const Todo = (props) => {
  return (
    <div className="t-d">
      <div>{props.todo.text}</div>
      <button className="delete-btn" onClick={props.onDelete} >x</button>
    </div>
  );
};

export default Todo;
