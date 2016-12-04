import React from 'react'
import { render } from 'react-dom'
import '../../public/css/normalize.css'
import '../../public/css/style.css'

const Hi = React.createClass({
  render () {
    return (
      <div>
        <h1>Hella</h1>
      </div>
    )
  }
})

render(<Hi />, document.getElementById('app'))
