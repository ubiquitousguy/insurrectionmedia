import React from 'react'
import { render } from 'react-dom'
import '../public/css/normalize.css'
import '../public/css/style.css'
// note - semi-colons no longer recommended for JSX
// pulls the render function out of react-dom only- we don't need anything else.
// we no longer need ReactDOM.render, we just call render

const App = React.createClass({
  render () {
    return (
      <div>
        <h1>hi</h1>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
