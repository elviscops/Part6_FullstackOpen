import Anecdotes from "./components/Anecdotes"
import AnecdotesForm from "./components/AnecdotesForm"
import Filter from "./components/Filter"

const App = () => {
    return (
        <div>
            <h2>Anecdotes</h2>
            <Filter />
            <Anecdotes />
            <AnecdotesForm/>
        </div>
  )
}

export default App