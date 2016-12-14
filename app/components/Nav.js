import React from 'react'
import {Link} from 'react-router'

const Nav = React.createClass({

render () {
  return (
<div className="container-fluid">
  <nav className="navbar navbar-light bg-faded">
    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
    <div className="collapse navbar-toggleable-md" id="navbarResponsive">
      <a className="navbar-brand" href="#">Insurrection Media</a>

      <ul className="nav navbar-nav">
        <li className="nav-item active">
          <Link to='/home' className="nav-link">Home</Link>
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
        <input className="form-control" type="text" placeholder="User Name" rec="login"/>
        <button className="btn btn-outline-success" type="submit">Login</button>
      </form>
    </div>
  </nav>g
</div>
    )
  }
})

export default Nav