import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../requests/requests'


const AnecdotesForm = () => {

    const queryClient = useQueryClient();


    const newAnecdoteMutation = useMutation({
        mutationFn: createAnecdote,
        // onSuccess: () => {
        // queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
        // }, // less effiecient
        onSuccess: (newAnecdote) => {
            const anecdotes = queryClient.getQueryData(['anecdotes'])
            console.log(anecdotes)
            queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
            queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
        }, // manual updating querry
    });
    

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        newAnecdoteMutation.mutate({ content: content, votes: 0 })
        event.target.anecdote.value = ""
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