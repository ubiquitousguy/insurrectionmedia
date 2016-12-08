import React from 'react'
import { render } from 'react-dom'
// server started with: npm start
// pulls the render function out of react-dom only
// we no longer need ReactDOM.render, we just call render
import { BrowserRouter, Match, Miss } from 'react-router'

import Child from './components/child'
import FourOhFour from './components/fourohfour'

// for people annoyed by es-linting, you can have it automatically fix errors for you
// just run: npm run lint -s -- --fix
// semi-colons not necessary or recommended for JSX
const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Child} />
          <Miss component={FourOhFour} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
