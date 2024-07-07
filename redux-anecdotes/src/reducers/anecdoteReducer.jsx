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
            const newAnecdote = {
                  content: action.payload,
                  id: getId(),
                  votes: 0
                }
            state.push(newAnecdote)
        },
        setAnecdotes(state, action){
            return state = action.payload
        }
    }
})

export const { voteAnecdote, createAnecdote, setAnecdotes } = anecdoteSlice.actions

export default anecdoteSlice.reducer