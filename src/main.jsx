import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css"
import TodoContextProvider from "./context/TodoContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </BrowserRouter>
);
