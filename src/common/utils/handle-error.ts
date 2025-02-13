import { AxiosError } from 'axios'
import { setErrorAC } from '../../app/app-reducer.ts'
import type { Dispatch } from 'redux'

export const handleError = (error: unknown, dispatch: Dispatch) => {
  let errorMessage: string | null = null

  if (error instanceof AxiosError) {
    if (error.response) {
      errorMessage = error.response.data.errorMessages[0].message
    } else {
      errorMessage = error.message
    }
  } else if (error instanceof Error) {
    errorMessage = error.message
  }

  dispatch(setErrorAC(errorMessage))
  setInterval(() => {
    dispatch(setErrorAC(null))
  }, 3000)
}
