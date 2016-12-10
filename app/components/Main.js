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
        <nav className="navbar navbar-light bg-faded">
          <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
          <div className="collapse navbar-toggleable-md" id="navbarResponsive">
            <a className="navbar-brand" href="#">Navbar</a>
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
              <input className="form-control" type="text" placeholder="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>

    )
  }
})

export default Main
