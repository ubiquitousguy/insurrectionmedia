import React from 'react'
import ReactDOM from 'react-dom'

var Hi = React.createClass({
  render () {
    return (
      <div>
        <h1>yo</h1>
      </div>
    )
  }
})

ReactDOM.render(
  <Hi />,
  document.getElementById('app')
)
