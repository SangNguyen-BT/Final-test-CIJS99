import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

import TodoList from "../components/TodoList";

const Active = () => {
  const { todos, toggleTodo, deleteTodo, updateTodo } = useContext(TodoContext);
  
  const activeTodos = todos.filter((todo) => todo.active);

  function getRealIndex(todo) {
    return todos.findIndex(t => t === todo)
  }

  return (
    <TodoList
      todos={activeTodos}
      toggleTodo={(i) => toggleTodo(getRealIndex(activeTodos[i]))}
      deleteTodo={(i) => deleteTodo(getRealIndex(activeTodos[i]))}
      updateTodo={(i, updatedTodo) => updateTodo(getRealIndex(activeTodos[i]), updatedTodo)}
    />
  );
};

export default Active;