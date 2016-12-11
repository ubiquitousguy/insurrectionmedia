import React from 'react'
import { Match, Miss } from 'react-router'
import Main from './components/Main'
import fourohfour from './components/fourohfour'
import Admin from './components/Admin'
import SignIn from './components/Auth/SignIn'
import AddUser from './components/Auth/AddUser'
import Auth from './components/Auth/Auth'

const app = () => {
  return (
    <div className='app'>
      <Match exactly pattern='/' component={Main} />
      <Match pattern='/admin' component={Admin} />
      <Match pattern='/signin' component={SignIn} />
      <Match pattern='/adduser' component={AddUser} />
      <Miss component={fourohfour} />
    </div>
  )
}

export default app
