import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
                    reducer:{
                        anecdotes: anecdoteReducer,
                        filter: filterReducer,
                        notification: notificationReducer
                    }
                })

export default store