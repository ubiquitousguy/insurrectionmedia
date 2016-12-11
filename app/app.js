import React from 'react'
import { Match, Miss } from 'react-router'
// import { render } from 'react-dom'
// server started with: npm start
// pulls the render function out of react-dom only
// we no longer need ReactDOM.render, we just call render
import Main from './components/Main'
import fourohfour from './components/fourohfour'
import Admin from './components/Admin'
// for people annoyed by es-linting, you can have it automatically fix errors for you
// just run: npm run lint -s -- --fix
// semi-colons not necessary or recommended for JSX
const App = () => {
  return (
    <div className='app'>
      <Match exactly pattern='/' component={Main} />
      <Match pattern='/admin' component={Admin} />
      <Miss component={fourohfour} />
    </div>
  )
}

export default App
