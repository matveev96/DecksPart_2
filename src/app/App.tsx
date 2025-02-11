import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { useFetchDecks } from '../features/decks/DecksList/useFetchDecks.ts'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'


export const App = () => {

  const {app} = useFetchDecks()

  return (
    <div>
      {app.status === 'loading' ? <LinearLoader/> : null}
      <Decks />
      <GlobalError />
    </div>
  )
}
