import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import anecdoteService from './services/anecdotes'
import {initializeAnecdotes, setAnecdotes} from './reducers/anecdoteReducer'
import Anecdotes from "./components/Anecdotes"
import AnecdotesForm from "./components/AnecdotesForm"
import Filter from "./components/Filter"
import Notification from "./components/Notification"

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeAnecdotes())
        //anecdoteService.getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
    }, [])


    return (
        <div>
            <h2>Anecdotes</h2>
            <Notification />
            <Filter />
            <Anecdotes />
            <AnecdotesForm/>
        </div>
  )
}

export default App