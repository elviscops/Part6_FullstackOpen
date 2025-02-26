import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'
import anecdoteService from './services/anecdotes'
import anecdoteReducer,{appendAnecdote, setAnecdotes} from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
                    reducer:{
                        anecdotes: anecdoteReducer,
                        filter: filterReducer,
                        notification: notificationReducer
                    }
                })


anecdoteService.getAll().then(anecdotes => {
        store.dispatch(setAnecdotes(anecdotes))
}
    
)

export default store