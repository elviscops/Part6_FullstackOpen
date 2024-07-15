import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from './requests/requests'
import AnecdoteForm from './conponents/AnecdotesForm'

const App = () => {

    const voteAnecdote = (anecdote) => {
        console.log('vote')
        newAnecdoteVoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
    }

    const queryClient = useQueryClient()

    const newAnecdoteVoteMutation = useMutation({ 
        mutationFn: updateAnecdote, 
        onSuccess: () => {
            queryClient.invalidateQueries('anecdotes')
        },
    })

    
    const result = useQuery({
            queryKey:['anecdotes'],
            queryFn: getAnecdotes,
            retry:1,
            refetchOnWindowFocus: false
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
        
            {/* <Notification /> */}
            <AnecdoteForm />
        
            {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                {   anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => voteAnecdote(anecdote)}>vote</button>
                </div>
            </div>
            )}
        </div>
      )
    }

export default App