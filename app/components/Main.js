import React from 'react'
import Home from './Home'
// Import sub-components
// import About from './About'
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
            <a className="navbar-brand" href="#">Insurrection Media</a>
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Partners</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Media Press</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sizzles</a>
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
        </div>
      </div>

    )
  }
})

export default Main
