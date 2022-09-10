import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import App from '@/app'
import { Globals } from '@/styles'

import '@fontsource/open-sans'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <ChakraProvider>
            <Globals />
            <App />
        </ChakraProvider>
    </React.StrictMode>
)
