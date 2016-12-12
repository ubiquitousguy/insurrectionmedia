import React from 'react'
import Home from './Home'
import Nav from './Nav'

// Import sub-components
import About from './About/About'
import Partners from './Partners/Partners'
import Press from './Press/Press'
import Contact from './Contact/Contact'
import Sizzle from './Sizzle/Sizzle'

const Main = React.createClass({

  render () {
    return (
      <div className="container-fluid">
        <Nav />
        <div>
          <Home />
          {this.props.children}
        </div>
      </div>

    )
  }
})

export default Main
