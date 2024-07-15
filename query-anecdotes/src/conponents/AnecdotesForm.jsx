
const AnecdotesForm = () => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ""

        console.log(content)

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