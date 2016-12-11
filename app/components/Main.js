import React from 'react'

import Link from 'react-router/Link'

import Home from './Home'

// Import sub-components
import About from './About/About'
// import Partners from './Partners'
// import Press from './Press'
// import Contact from './Contact'

const Main = React.createClass({

  render () {
    const containerPlacer = {
      background: "pink"
    }
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light bg-faded">
          <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
          <div className="collapse navbar-toggleable-md" id="navbarResponsive">
            <Link to='/about'><a className="navbar-brand" href="#">Navbar</a></Link>
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="http://example.com" id="responsiveNavbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="responsiveNavbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
            <form className="form-inline float-lg-right">
              <input className="form-control" type="text" placeholder="User Name" />
              <button className="btn btn-outline-success" type="submit">Login</button>
            </form>
          </div>
        </nav>
        <div className="row" style={containerPlacer}>
          <Home/>
          <h1>THIS IS THE HOME COMPONENT WHICH WILL SHOW THE MAIN VIDEO</h1>
        </div>
      </div>

    )
  }
})

export default Main
