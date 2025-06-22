import { createContext, useEffect, useState } from "react";
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos")
    return saved ? JSON.parse(saved) : []
  });
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleChange(e) {
    const {name, value} = e.target
    if (name === "input") setInput(value);
    if (name === "date") setDate(value);
    if (name === "time") setTime(value)
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    handleAddTodo();
  }

  function handleAddTodo() {
    if (input !== "") {
      setTodos([...todos, { text: input, active: true, date, time }]);
      toast.success("Task added successfully!")
      setInput("");
      setDate("")
      setTime("")
    }
  }

  function deleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    toast.success("Task deleted successfully!")
  }

  function toggleTodo(index) {
    const newTodos = [...todos];
    newTodos[index].active = !newTodos[index].active;
    setTodos(newTodos);
  }

  function deleteAll() {
    if (window.confirm("Are you sure to delete all tasks?")) {
      setTodos([]);
      toast.success("All tasks deleted!")
    }
  }

  function updateTodo(index, updatedTodo) {
    const newTodos = [...todos]
    newTodos[index] = {
      ...newTodos[index],
      ...updatedTodo
    }
    setTodos(newTodos)
    toast.success("Task updated successfully!")
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const value = {
    handleChange,
    handleSubmitForm,
    toggleTodo,
    deleteTodo,
    deleteAll,
    updateTodo,
    setTodos,
    todos,
    input,
    date,
    time
  };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
}

export default TodoContextProvider;