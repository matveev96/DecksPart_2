import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { handleError } from '../../common/utils/handle-error.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  try {
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
  } catch (error) {
    handleError(error, dispatch)
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  try {
    const res = await decksAPI.addDeck(name)
    dispatch(addDeckAC(res.data))
  } catch (error) {
    handleError(error, dispatch)
  }
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  try {
    const res = await decksAPI.deleteDeck(id)
      dispatch(deleteDeckAC(res.data.id))
  } catch (error) {
    handleError(error, dispatch)
  }
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  try {
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  } catch (error) {
    handleError(error, dispatch)
  }
}
