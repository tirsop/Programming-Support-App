import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import { showTicket, reset } from '../features/tickets/ticketSlice'

export default function Ticket() {
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(state => state.tickets)

  const params = useParams()
  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    dispatch(showTicket(id))
  }, [dispatch, isError, message, id])




  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    <h3>Something went wrong</h3>
  }

  return (
    <div>{id}</div>
  )
}
