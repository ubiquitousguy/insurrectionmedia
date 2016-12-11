import React from 'react'
import { Match, Miss } from 'react-router'
import Main from './components/Main'
import fourohfour from './components/fourohfour'
import Admin from './components/Admin'
<<<<<<< HEAD

import About from './components/About/About'
import Partners from './components/Partners/Partners'
import SignIn from './components/SignIn'
import Auth from './components/Auth'
import Press from './components/Press/Press'
import Contact from './components/Contact/Contact'
import Sizzle from './components/Sizzle/Sizzle'

// for people annoyed by es-linting, you can have it automatically fix errors for you
// just run: npm run lint -s -- --fix
// semi-colons not necessary or recommended for JSX
const App = () => {

=======
import SignIn from './components/Auth/SignIn'
import AddUser from './components/Auth/AddUser'
import Auth from './components/Auth/Auth'

const app = () => {
>>>>>>> naeve
  return (
    <div className='app'>
      <Match exactly pattern='/' component={Main} />
      <Match exactly pattern='/about' component={About} />
      <Match exactly pattern='/partners' component={Partners} />
      <Match exactly pattern='/press' component={Press} />
      <Match exactly pattern='/contact' component={Contact} />
      <Match exactly pattern='/sizzle' component={Sizzle} />
      <Match pattern='/admin' component={Admin} />
<<<<<<< HEAD
=======
      <Match pattern='/signin' component={SignIn} />
      <Match pattern='/adduser' component={AddUser} />
>>>>>>> naeve
      <Miss component={fourohfour} />
    </div>
  )
}

export default app
