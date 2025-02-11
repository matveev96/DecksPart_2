import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import { useEffect } from 'react'
import { fetchDecksTC } from '../decks-thunks.ts'
import { selectApp } from '../../../app/app-selectors.ts'
import { setLoadingDeckAC } from '../../../app/app-reducer.ts'

export const useFetchDecks = () => {

  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)
  const app = useAppSelector(selectApp)

  useEffect(() => {
    (async () => {
      dispatch(setLoadingDeckAC('loading'))
      await dispatch(fetchDecksTC())
      dispatch(setLoadingDeckAC('succeeded'))
    })()

  }, [dispatch])

  return {
    decks,
    app
  }
}
