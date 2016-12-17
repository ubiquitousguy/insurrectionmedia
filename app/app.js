import React from 'react'
import { Match, Miss, Link, Router } from 'react-router'
import Main from './components/Main'
import fourohfour from './components/fourohfour'
import Admin from './components/Admin'
import About from './components/About/About'
import Partners from './components/Partners/Partners'
import SignIn from './components/Auth/SignIn'
import Press from './components/Press/Press'
import Contact from './components/Contact/Contact'
import Sizzle from './components/Sizzle/Sizzle'
import Nav from './components/Nav'
import Register from './components/auth/Register'
// for people annoyed by es-linting, you can have it automatically fix errors for you
// just run: npm run lint -s -- --fix
// semi-colons not necessary or recommended for JSX
const photoPlacer = {
  width:"100%",
  height: "100%"
}

// const routes = [

//   {
//     pattern: '/about',
//     component: About
//   },
//   {
//     pattern: '/partners',
//     component: Partners
//   },
//   {
//     pattern: '/press',
//     component: Press
//   },
//   {
//     pattern: '/contact',
//     component: Contact
//   },
//   {
//     pattern: '/sizzle',
//     component: Sizzle
//   }
    
// ]


// const MatchWithSubRoutes = (route) => (
//   <Match {...route} render={(props) => (
//     // pass the sub-routes down to keep nesting
//     <route.component {...props} routes={route.routes}/>
//   )}/>
// )



const app = () => (

  <div className='app'>
    <nav className="navbar navbar-fixed-top" id="navBar">
        <button className="navbar-toggler hidden-md-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="container-fluid collapse navbar-toggleable-md" id="navbarResponsive">
          <div className="col-md-4 nav-flex">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link to='/about' className="nav-link mx-auto">About</Link>
              </li>
              <li className="nav-item">
                <Link to='/partners' className="nav-link mx-auto">Partners</Link>
              </li>
              <li className="nav-item">
                <Link to='/press' className="nav-link mx-auto">Press</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <Link to='/' className="nav-link mx-auto d-block">
              <img style={photoPlacer} src="public/assets/im.png" />
            </Link>
          </div>

          <div className="col-md-4 nav-flex">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link to='/contact' className="nav-link mx-auto">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to='/sizzle' className="nav-link mx-auto">Sizzles</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link mx-auto">Assets</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      
  </div>
)



export default app

      // {routes.map((route, i) => (
      //   <MatchWithSubRoutes key={i} {...route} />
      // ))}