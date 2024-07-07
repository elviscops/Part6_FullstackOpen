import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'
import { pushNotification, clearNotification } from '../reducers/notificationReducer'


const AnecdotesForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(createAnecdote(newAnecdote))
        dispatch(pushNotification(("Added: " + newAnecdote)))
        setTimeout(() => {
            dispatch(clearNotification())
          }, 5 * 1000)

    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name='anecdote'/></div>
                <button type="submit" >create</button>
            </form>
        </div>
       
    )

}

export default AnecdotesForm