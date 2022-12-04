import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import { showTicket, closeTicket } from '../features/tickets/ticketSlice'
import BackButton from "../components/BackButton"

export default function Ticket() {
  const { ticket, isLoading, isError, message } = useSelector(state => state.tickets)

  const { id } = useParams()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    dispatch(showTicket(id))
  }, [dispatch, isError, message, id])

  const onTicketClose = () => {
    dispatch(closeTicket(id))
    toast.success('Ticket Closed')
    navigate('/tickets')
  }



  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    <h3>Something went wrong</h3>
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url='/tickets' />
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>Date submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}</h3>
        <h3>Product: {ticket.product}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>

      {ticket.status !== 'closed' && (
        <button onClick={onTicketClose} className="btn btn-block btn-danger">Close Ticket</button>
      )}
    </div>
  )
}
