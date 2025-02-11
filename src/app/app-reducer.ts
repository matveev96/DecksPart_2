
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case "APP/LOADING-DECKS": {
      return {...state, status: action.payload}
    }
    default:
      return state
  }
}

export const setLoadingDeckAC = (status: RequestStatusType) => ({
  type: 'APP/LOADING-DECKS' as const,
  payload: status,
})



type ActionsType =
  | ReturnType<typeof setLoadingDeckAC>

