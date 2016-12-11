import React from 'react'

import Link from 'react-router/Link'

import Home from './Home'

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
        <nav className="navbar navbar-light bg-faded">
          <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
          <div className="collapse navbar-toggleable-md" id="navbarResponsive">
            <a className="navbar-brand" href="#">Insurrection Media</a>

            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to='/partners' className="nav-link">Partners</Link>
              </li>
              <li className="nav-item">
                <Link to='/press' className="nav-link">Media Press</Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to='/sizzle' className="nav-link">Sizzles</Link>
              </li>
            </ul>
            <form className="form-inline float-lg-right">
              <input className="form-control" type="text" placeholder="User Name" />
              <button className="btn btn-outline-success" type="submit">Login</button>
            </form>
          </div>
        </nav>

        <div>
          <Home />
          {this.props.children}
        </div>
      </div>

    )
  }
})

export default Main
