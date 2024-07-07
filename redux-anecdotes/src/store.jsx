import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

const store = configureStore({
                    reducer:{
                        anecdotes: anecdoteReducer,
                        filter: filterReducer
                    }
                })

export default store