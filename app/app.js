import React from 'react'
import { Match, Miss } from 'react-router'
import Main from './components/Main'
import fourohfour from './components/fourohfour'
import Admin from './components/Admin'

import About from './components/About/About'
import Partners from './components/Partners/Partners'
import SignIn from './components/Auth/SignIn'
import Press from './components/Press/Press'
import Contact from './components/Contact/Contact'
import Sizzle from './components/Sizzle/Sizzle'
import AddUser from './components/Auth/AddUser'
import Nav from './components/Nav'
// for people annoyed by es-linting, you can have it automatically fix errors for you
// just run: npm run lint -s -- --fix
// semi-colons not necessary or recommended for JSX

const app = () => {

  return (
    <div className='app'>
      <Nav />
      <Match exactly pattern='/' component={Main} />
      <Match pattern='/about' component={About} />
      <Match pattern='/partners' component={Partners} />
      <Match pattern='/press' component={Press} />
      <Match pattern='/contact' component={Contact} />
      <Match pattern='/sizzle' component={Sizzle} />
      <Match pattern='/admin' component={Admin} />
      <Match pattern='/signin' component={SignIn} />
      <Match pattern='/adduser' component={AddUser} />

      <Miss component={fourohfour} />
    </div>
  )
}

export default app
