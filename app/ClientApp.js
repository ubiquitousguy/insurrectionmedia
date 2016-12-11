import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
import app from './app'

render(<BrowserRouter><app /></BrowserRouter>,
  document.getElementById('app')
)
