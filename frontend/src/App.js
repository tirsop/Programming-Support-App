import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// components
import Header from "./components/Header"
// pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import NewTicket from "./pages/NewTicket"
import Register from "./pages/Register"

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/new-ticket' element={<NewTicket />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
