import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Spinner from "../components/Spinner"
import { getTickets, reset } from "../features/tickets/ticketSlice"



export default function Tickets() {
  const { tickets, isLoading, isSuccess } = useSelector(state => state.tickets)

  const dispatch = useDispatch()




  useEffect(() => {
    dispatch(getTickets())
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])




  if (isLoading) {
    return <Spinner />
  }
  return (
    <>

      <ul>
        {tickets && tickets.map(ticket => (
          <li>{ticket.description}</li>
        ))}
      </ul>
    </>

  )
}
