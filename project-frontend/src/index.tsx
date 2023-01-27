import React from 'react';
import { ColorModeScript } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './theme';

import { ChakraProvider } from '@chakra-ui/react';


/*ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);*/

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element');
ReactDOM.createRoot(rootElement).render(
  <ChakraProvider>
    {/* 👇 Here's the script */}
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>,
)