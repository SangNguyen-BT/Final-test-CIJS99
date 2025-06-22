import {Routes, Route, Navigate} from "react-router-dom"
import { ToastContainer } from "react-toastify"

import Navbar from './components/Navbar'
import Header from "./components/Header"
import All from "./pages/All"
import Active from "./pages/Active"
import Completed from "./pages/Completed"

function App() {
  return (
    <div className="ggFont">
      <ToastContainer position="top-right" autoClose={1000}/>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={'/all'} replace/>}/>
        <Route path='/all' element={<All />}/>
        <Route path='/active' element={<Active />}/>
        <Route path='/completed' element={<Completed />}/>
      </Routes>
    </div>
  )
}

export default App
