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
            return state.map(a => a.id !== id ? a : changedAnecdote).sort((a,b) => b.votes - a.votes)
        },
        // createAnecdote(state,action){
        //     const result = action.payload
        //     state.push(result) 
        // },
        setAnecdotes(state, action){
            
            const result = action.payload
            console.log(result)
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
    console.log("init")
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        console.log(anecdotes)
            dispatch(setAnecdotes(anecdotes))
      }
}

export const createAnecdote = (content) => {
    console.log(content)
    return async dispatch => {
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(appendAnecdote(newAnecdote))
      }
    }

export const { voteAnecdote, appendAnecdote , setAnecdotes } = anecdoteSlice.actions

export default anecdoteSlice.reducer