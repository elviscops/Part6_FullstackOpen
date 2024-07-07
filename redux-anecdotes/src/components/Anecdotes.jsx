import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { pushNotification, clearNotification } from '../reducers/notificationReducer'


const Anecdote = ({ anecdote, handleClick }) => {
 return (
        <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const Anecdotes = () => {
  const anecdotes = useSelector( state => state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter)))
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        {
        anecdotes.map( anecdote => 
            <Anecdote
                key={anecdote.id}
                anecdote={anecdote}
                handleClick={ () => {dispatch(voteAnecdote(anecdote.id))
                                     dispatch(pushNotification(("Liked: " +anecdote.content)))
                                                    setTimeout(() => {
                                            dispatch(clearNotification())
                                        }, 5 * 1000)
                }
                }   
            /> 
        )
      }
      </div>
    </div>
  )
}

export default Anecdotes