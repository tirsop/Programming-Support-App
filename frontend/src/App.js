import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// components
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
// pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import NewTicket from "./pages/NewTicket"
import Register from "./pages/Register"
import Ticket from "./pages/Ticket"
import Tickets from "./pages/Tickets"

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
            <Route path='/new-ticket' element={<PrivateRoute />}>
              <Route path='/new-ticket' element={<NewTicket />} />
            </Route>
            <Route path='/tickets' element={<PrivateRoute />}>
              <Route path='/tickets' element={<Tickets />} />
            </Route>
            <Route path='/ticket/:id' element={<PrivateRoute />}>
              <Route path='/ticket/:id' element={<Ticket />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
