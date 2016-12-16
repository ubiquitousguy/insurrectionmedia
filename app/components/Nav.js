import React from 'react'
import {Link} from 'react-router'

const Nav = React.createClass({

render () {

  const photoPlacer = {
    width: "200px",
    height: "24px"
  }
  return (
<div className="container">
  <nav className="navbar navbar-fixed-top" id="navBar">
    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
    <div className="collapse navbar-toggleable-md" id="navbarResponsive">

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
      <Link to='/' className="nav-link">
        <img style={photoPlacer} src="public/assets/im.png" />
      </Link>

      <form className="form-inline float-lg-right">
        <input className="form-control" type="text" placeholder="User Name" ref="login"/>
        <button className="btn btn-outline-success" type="submit">Login</button>
      </form>
    </div>
  </nav>
</div>
    )
  }
})

export default Nav
