import { useContext } from "react";

import { TodoContext } from "../context/TodoContext";
import TodoList from "../components/TodoList";

const Completed = () => {
  const { todos, toggleTodo, deleteTodo, deleteAll } = useContext(TodoContext);

  const completedTodos = todos.filter((todo) => !todo.active);

  function getRealIndex(todo) {
    return todos.findIndex((t) => t === todo);
  }

  return (
    <>
      <TodoList
        todos={completedTodos}
        toggleTodo={(i) => toggleTodo(getRealIndex(completedTodos[i]))}
        deleteTodo={(i) => deleteTodo(getRealIndex(completedTodos[i]))}
        allowEdit={false}
      />

      {completedTodos.length > 0 && (
        <div className="max-w-3xl mx-auto my-4 text-end">
          <button
            className="py-2.5 px-3.5 bg-[#61d18c] rounded-lg font-extrabold cursor-pointer"
            onClick={deleteAll}
          >
            Delete All
          </button>
        </div>
      )}
    </>
  );
};

export default Completed;