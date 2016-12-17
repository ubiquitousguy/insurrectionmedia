import React, {Component} from 'react'
import {Link} from 'react-router'

class Nav extends Component {
  render () {
  const photoPlacer = {
    width:"100%",
    height: "100%"
  }
  return (
<div className="container">

  <nav className="navbar navbar-fixed-top" id="navBar">
    <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">

    </button>
    <div className="container-fluid collapse navbar-toggleable-sm" id="navbarResponsive">

      <div className="col-md-4 nav-flex">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to='/about' className="nav-link mx-auto swing">About</Link>
          </li>
          <li className="nav-item">
            <Link to='/partners' className="nav-link mx-auto swing">Partners</Link>
          </li>
          <li className="nav-item">
            <Link to='/press' className="nav-link mx-auto swing">Press</Link>
          </li>

        </ul>
      </div>

      <div className="col-md-4">
        <Link to='/' className="nav-link mx-auto d-block swing">
          <img style={photoPlacer} src="public/assets/im.png" />
        </Link>
      </div>

      <div className="col-md-4 nav-flex">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to='/sizzle' className="nav-link mx-auto swing">Sizzle</Link>
          </li>
          <li className="nav-item">
            <Link to='/' className="nav-link mx-auto swing">Assets</Link>
          </li>
          <li className="nav-item">
            <Link to='/contact' className="nav-link mx-auto swing">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to='/register' className="nav-link mx-auto swing">Register</Link>
          </li>
        </ul>
      </div>

    </div>

  </nav>
</div>
    )
  }
}

export default Nav
