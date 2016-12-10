import React from 'react'
import { Link } from 'react-router'
// Import sub-components
// import About from './About'
// import Partners from './Partners'
// import Press from './Press'
// import Contact from './Contact'

const Main = React.createClass({
  render () {
    return (
      <div>
        <h1>hi hello</h1>
        <Link to ="/about">Click for About</Link>

      </div>
    )
  }
})

export default Main
