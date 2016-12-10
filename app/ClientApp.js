import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
import App from './App'
import Main from './components/Main'

render(<BrowserRouter><App /></BrowserRouter>,
  document.getElementById('app')
)
