import React from "react";

const Completed = (props) => {
  const { todos, setTodos } = props;
  const completedTodos = todos.filter((todo) => !todo.active);

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  function handleDeleteAll() {
    const newTodos = todos.filter((todo) => todo.active);
    setTodos(newTodos);
  }

  return (
    <>
      <div className="d-flex flex-column">
        {completedTodos.length > 0 ? (
          completedTodos.map((todo, index) => (
            <div
              key={index}
              className="form-check pt-4 d-flex justify-content-between"
            >
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={!todo.active}
                />
                <span style={{ textDecoration: "line-through" }}>
                  {todo.text}
                </span>
              </div>
              <button
                className="btn btn-danger btn-sm ms-3"
                onClick={() => handleDeleteTodo(index)}
              >
                Xóa
              </button>
            </div>
          ))
        ) : (
          <p>No completed tasks.</p>
        )}
      </div>
      {completedTodos.length > 0 && (
        <button className="btn btn-danger mt-3" onClick={handleDeleteAll}>
          Xóa Tất Cả
        </button>
      )}
    </>
  );
};

export default Completed;
