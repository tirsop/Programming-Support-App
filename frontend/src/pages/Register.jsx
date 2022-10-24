import { useState } from "react"
import { FaUser } from "react-icons/fa"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from 'react-redux'
import { register } from "../features/auth/authSlice"

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const dispatch = useDispatch()

  const { user, isLoading, isSuccess, message } = useSelector(state => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      setFormData(prevState => ({
        ...prevState,
        password: '',
        password2: ''
      }))
      return toast.error('Passwords do not match')    // and make blank the passwords spaces
    }

    const userData = { name, email, password }
    dispatch(register(userData))
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text"
              className="form-control"
              id="name"
              value={name}
              name='name'
              onChange={onChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <input type="email"
              className="form-control"
              id="email"
              value={email}
              name='email'
              onChange={onChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <input type="password"
              className="form-control"
              id="password"
              value={password}
              name='password'
              onChange={onChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <input type="password"
              className="form-control"
              id="password2"
              value={password2}
              name='password2'
              onChange={onChange}
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Create user</button>
          </div>
        </form>
      </section>
    </>
  )
}
