import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import All from "./pages/All";
import Active from "./pages/Active";
import Completed from "./pages/Completed";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    handleAddTodo();
  }

  function handleAddTodo() {
    if (input !== "") {
      setTodos([...todos, { text: input, active: true }]);
      setInput("");
    }
  }

  function toggleTodo(index) {
    const newTodos = [...todos];
    newTodos[index].active = !newTodos[index].active;
    setTodos(newTodos);
  }

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route
          path="/all"
          element={
            <All
              toggleTodo={toggleTodo}
              todos={todos}
              input={input}
              handleChange={handleChange}
              handleSubmitForm={handleSubmitForm}
            />
          }
        />
        <Route
          path="/active"
          element={
            <Active
              toggleTodo={toggleTodo}
              todos={todos}
              input={input}
              handleChange={handleChange}
              handleSubmitForm={handleSubmitForm}
            />
          }
        />
        <Route
          path="/completed"
          element={<Completed todos={todos} setTodos={setTodos} toggleTodo={toggleTodo} />}
        />
      </Routes>
    </div>
  );
}

export default App;
