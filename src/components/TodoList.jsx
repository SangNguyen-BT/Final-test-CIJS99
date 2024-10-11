import React from "react";

const TodoList = (props) => {
  const { todos = [], toggleTodo } = props;
  return (
    <div className="col-12">
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <div
              className="form-check pt-4"
              key={index}
              style={{ textDecoration: todo.active ? 'none' : 'line-through' }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                checked={!todo.active}
                onChange={() => toggleTodo(index)}
              />
             {todo.text}
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
