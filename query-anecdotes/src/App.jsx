import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteAnecdote, getAnecdotes, updateAnecdote } from './requests/requests'
import AnecdoteForm from './conponents/AnecdotesForm'
import Notification from './conponents/Notification'
import { useMessageDispatch } from './messageContext'

const App = () => {
    const queryClient = useQueryClient()
    const { showNotification } = useMessageDispatch()

    const voteAnecdote = (anecdote) => {
        newAnecdoteVoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
        showNotification(`voted '${anecdote.content}'`)
    }
    const handleDeleteAnecdote = (anecdote) => {
        newAnecdoteDeleteMutation.mutate({ ...anecdote })
        showNotification(`deleted '${anecdote.content}'`)
    }

    const newAnecdoteVoteMutation = useMutation({ 
        mutationFn: updateAnecdote, 
        onSuccess: () => {
            queryClient.invalidateQueries('anecdotes')
        },
    })

    const newAnecdoteDeleteMutation = useMutation({ 
        mutationFn: deleteAnecdote,
        onSuccess: (newAnecdote) => {
            const anecdotes = queryClient.getQueryData(['anecdotes'])
            queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
            queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
            showNotification(`deleted '${newAnecdote.content}'`)
        }, // manual updating querry
    })
    
    const result = useQuery({
            queryKey:['anecdotes'],
            queryFn: getAnecdotes,
            retry:false,
    })
    
    
    if ( result.isLoading ) {
        return <div>loading data...</div>
    }
    
    if ( result.isError ) {
        return <div>anecdote service not avaiable due to problems in server</div>
    }

    const anecdotes = result.data
    
      return (
        <div>
            <h2>Anecdote app</h2>
        
            <Notification />
            <AnecdoteForm />
        
            {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                {   anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => voteAnecdote(anecdote)}>vote</button>
                    <button onClick={() => handleDeleteAnecdote(anecdote)}>delete</button>
                </div>
            </div>
            )}
        </div>
      )
    }

export default App