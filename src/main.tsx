import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import { GlobalStyle } from './global.styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Home />    
  </React.StrictMode>,
  document.getElementById('root')
)
