import { createSlice } from '@reduxjs/toolkit'

const getId = () => (100000 * Math.random()).toFixed(0)

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
        createAnecdote(state,action){
            const result = action.payload
            state.push(result) 
        },
        setAnecdotes(state, action){
            return action.payload
        },
        appendAnecdote(state, action) {
            state.push(action.payload)
          }

    }
})

export const { voteAnecdote, createAnecdote, appendAnecdote , setAnecdotes } = anecdoteSlice.actions

export default anecdoteSlice.reducer