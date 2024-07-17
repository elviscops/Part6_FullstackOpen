import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../requests/requests'
import { useMessageDispatch } from '../messageContext'


const AnecdotesForm = () => {

    const queryClient = useQueryClient();
    const { showNotification } = useMessageDispatch()


    const newAnecdoteMutation = useMutation({
        mutationFn: createAnecdote,
        // onSuccess: () => {
        // queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
        // }, // less effiecient
        onSuccess: (newAnecdote) => {
            const anecdotes = queryClient.getQueryData(['anecdotes'])
            queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
            queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
            showNotification(`created '${newAnecdote.content}'`)
        }, // manual updating querry
        onError: (error) => {
            showNotification(`tried creating, but content too short-'${error}'`)
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