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
    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
    <div className="container-fluid collapse navbar-toggleable-md" id="navbarResponsive">

      <div className="col-md-4">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to='/about' className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to='/partners' className="nav-link">Partners</Link>
          </li>
          <li className="nav-item">
            <Link to='/press' className="nav-link">Press</Link>
          </li>
          <li className="nav-item">
            <Link to='/contact' className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to='/sizzle' className="nav-link">Sizzles</Link>
          </li>
        </ul>
      </div>

      <div className="col-md-4 text-center">
        <Link to='/' className="nav-link">
          <img style={photoPlacer} src="public/assets/im.png" />
        </Link>
      </div>

      <div className="col-md-4">
        <form className="form-inline float-lg-right">
          <input className="form-control" type="text" placeholder="User Name" ref="login"/>
          <button className="btn btn-outline-success" type="submit">Login</button>
        </form>
      </div>

    </div>
  </nav>
</div>
    )
  }
}

export default Nav
