import React from 'react'
import { render } from 'react-dom'
// pulls the render function out of react-dom only
// we no longer need ReactDOM.render, we just call render
import { BrowserRouter, Match, Miss } from 'react-router'

import Hi from './components/child'
import Search from './components/sibling'
import FourOhFour from './components/fourohfour'
import '../public/css/normalize.css'
import '../public/css/style.css'
// for people annoyed by es-linting, you can have it automatically fix errors for you
// just run: npm run lint -s -- --fix
// semi-colons not necessary or recommended for JSX

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Hi} />
          <Match pattern='/search' component={Search} />
          <Miss component={FourOhFour} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))

