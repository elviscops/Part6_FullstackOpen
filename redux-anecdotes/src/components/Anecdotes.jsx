import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote, updateLikes } from '../reducers/anecdoteReducer'
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
  const anecdotes = useSelector( (state) =>  {
            return state.anecdotes.filter((anecdote) => anecdote.content.includes(state.filter))})

  const dispatch = useDispatch()

  
  return (
    <div>
      <div>
        {
        anecdotes.map( anecdote => 
            <Anecdote
                key={anecdote.id}
                anecdote={anecdote}
                handleClick={ () => {dispatch(updateLikes({...anecdote,votes: anecdote.votes + 1}))
                                     dispatch(pushNotification((`Liked: '${anecdote.content}'`)))
                                                    setTimeout(() => {
                                            dispatch(clearNotification())
                                        }, 5000)
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