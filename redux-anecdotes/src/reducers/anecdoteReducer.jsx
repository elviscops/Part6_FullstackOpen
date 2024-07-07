import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'


const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState:[],
    reducers: {
        voteAnecdote(state, action) {
            const id = action.payload
            const anecdoteToLike = state.find( n => n.id === id)
            const changedAnecdote = {...anecdoteToLike, votes: anecdoteToLike.votes+1}
            console.log(changedAnecdote)
            return state.map(a => a.id !== id ? a : changedAnecdote).sort((a,b) => b.votes - a.votes)
        },
        setAnecdotes(state, action){
            const result = action.payload
            return result
        },
        appendAnecdote(state, action) {
            console.log(state)
            const result = action.payload
            state.push(result)
          }

    }
})

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
            dispatch(setAnecdotes(anecdotes.sort((a,b) => b.votes - a.votes)))
      }
}

export const createAnecdote = (content) => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(appendAnecdote(newAnecdote))
      }
    }

export const updateLikes = (anecdote) => {
    return async dispatch => {
        
        const updatedAnecdote = await anecdoteService.updateLikes(anecdote);
        const result = voteAnecdote(updatedAnecdote.id)
        dispatch(result);
    };
    };

export const { voteAnecdote, appendAnecdote , setAnecdotes } = anecdoteSlice.actions

export default anecdoteSlice.reducer