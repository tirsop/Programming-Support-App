import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

// this custom hook just return true/false depending on wether the user is logged in or not
export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
    setIsLoading(false)
  }, [user])

  return { loggedIn, isLoading }
}