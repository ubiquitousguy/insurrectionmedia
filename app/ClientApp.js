import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'

import Entry from './Entry'


render(<BrowserRouter><Entry /></BrowserRouter>,
  document.getElementById('app')
)
