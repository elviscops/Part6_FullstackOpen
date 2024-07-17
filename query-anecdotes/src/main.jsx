import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import {MessageContextProvider} from './messageContext.jsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <MessageContextProvider>
            <App />
        </MessageContextProvider>
    </QueryClientProvider>
    
  )