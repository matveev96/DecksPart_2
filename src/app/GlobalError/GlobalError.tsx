import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useFetchDecks } from '../../features/decks/DecksList/useFetchDecks.ts'

export const GlobalError = () => {

  const {app} = useFetchDecks()

  const errorMessage = app.error

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}
