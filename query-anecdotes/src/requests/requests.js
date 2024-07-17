import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  };

export const createAnecdote =  async (newAnecdote) => {
    const response = await axios.post(baseUrl, newAnecdote)
    return response.data
}

export const updateAnecdote = async (updateAnecdote) => {
    const response = await axios.put(`http://localhost:3001/anecdotes/${updateAnecdote.id}`, updateAnecdote)
    return response.data
}

export const deleteAnecdote = (deleteAnecdote) => {
    axios.delete(`http://localhost:3001/anecdotes/${deleteAnecdote.id}`)
}