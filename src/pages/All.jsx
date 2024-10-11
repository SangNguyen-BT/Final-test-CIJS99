import React from "react";
import TodoList from "../components/TodoList";

const All = (props) => {
  const { input, handleChange, handleSubmitForm, todos, toggleTodo } = props;
  return (
    <>
      <form onSubmit={handleSubmitForm} className="d-flex gap-3">
        <input
          className="form-control"
          placeholder="add details"
          name="input"
          value={input}
          onChange={handleChange}
        />
        <button className="btn btn-primary">Add</button>
      </form>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </>
  );
};

export default All;
