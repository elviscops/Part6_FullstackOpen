import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialState,
    reducers: { 
        pushNotification(state,action){
            return state = action.payload
        },
        clearNotification(){
            return ""
        }
    }
})

export const { pushNotification, clearNotification} = notificationSlice.actions

export default notificationSlice.reducer