import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"
import { createTicket, reset } from "../features/tickets/ticketSlice"


export default function NewTicket() {
  const { user } = useSelector((state) => state.auth)
  const { isLoading, isSuccess, isError, message } = useSelector(state => state.ticket)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('japan')
  const [description, setDescription] = useState('')




  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess) {
      dispatch(reset())
      navigate('/tickets')
    }
    dispatch(reset())
  }, [dispatch, isError, isSuccess, message, navigate])




  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createTicket({ product, description }))
  }




  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input type="text" className="form-control" value={name} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="email">Customer Email</label>
          <input type="text" className="form-control" value={email} disabled />
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="product">Product</label>
            <select name="product"
              id="product"
              value={product}
              onChange={e => setProduct(e.target.value)}
            >
              <option value="japan">Japan</option>
              <option value="formula1">Formula1</option>
              <option value="javascript">JavaScript</option>
              <option value="surf">Surf</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description of your problem</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="form-control">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}
