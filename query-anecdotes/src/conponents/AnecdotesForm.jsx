import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../requests/requests'


const AnecdotesForm = () => {
    const queryClient = useQueryClient()

    const newAnecdoteMutation = useMutation({ 
        mutationFn: createAnecdote, 
        // onSuccess: (newAnecdote) => {
        //     console.log(newAnecdote)
        //     const anecdotes = queryClient.getQueryData('anecdotes')
        //     queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
        //     //queryClient.invalidateQueries('anecdotes')
        // }, // manual updating querry
        

        onSuccess: () => {
            queryClient.invalidateQueries('anecdotes')
        }, // more recource intenstive solution
              
    })

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        newAnecdoteMutation.mutate({ content, votes: 0 })
        //console.log(content)
    

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