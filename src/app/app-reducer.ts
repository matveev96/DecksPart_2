
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case "APP/LOADING-DECKS": {
      return {...state, status: action.status}
    }
    case "APP/SET-ERROR": {
      return {...state, error: action.error}
    }
    default:
      return state
  }
}

export const setLoadingDeckAC = (status: RequestStatusType) => ({
  type: 'APP/LOADING-DECKS' as const,
  status,
})

export const setErrorAC = (error: string | null) => ({
  type: 'APP/SET-ERROR' as const,
  error,
})


type ActionsType =
  | ReturnType<typeof setLoadingDeckAC>
  | ReturnType<typeof setErrorAC>

