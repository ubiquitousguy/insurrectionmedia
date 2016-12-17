import React from 'react'
import { Match, Miss, Link, Router } from 'react-router'
import fourohfour from './components/fourohfour'
import SignIn from './components/Auth/SignIn'
import Register from './components/auth/Register'

const adminRoutes = [

  {
    pattern: '/register',
    component: Register
  },
  {
    pattern: '/signin',
    component: SignIn
  }

]

const MatchAdminWithSubRoutes = (route) => (
  <Match {...route} render={(props) => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.adminroutes}/>
  )}/>
)

const admin = () => (

  <div className='admin' id='wrapper'>

    <div id='sidebar-wrapper'>
      <ul className='sidebar-nav'>
        <li className='sidebar-brand'>
          <Link to='/register' className="nav-link mx-auto">Register</Link>
        </li>
        <li>
          <Link to='/register' className="nav-link mx-auto">SignIn</Link>
        </li>
      </ul>
    </div>

    <div id='page-content-wrapper'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12'>
            <h1>Hi</h1>
          </div>
        </div>
      </div>
    </div>

  {adminRoutes.map((route, i ) => (
    <MatchAdminWithSubRoutes key={i} {...route} />
  ))}

  </div>
)

export default admin