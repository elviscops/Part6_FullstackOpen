import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const newAnecdote = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(newAnecdote)

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState,
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
            return state.concat(newAnecdote)
        }
    }
})

export const { voteAnecdote, createAnecdote } = anecdoteSlice.actions

export default anecdoteSlice.reducer