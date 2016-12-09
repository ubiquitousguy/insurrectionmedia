import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'
import App from './App'

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))
