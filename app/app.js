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
import Register from './components/auth/Register'

const app = () => {

  return (
    <div className='app'>
      <Match exactly pattern='/' component={Main} />
      <Match pattern='/about' component={About} />
      <Match pattern='/partners' component={Partners} />
      <Match pattern='/press' component={Press} />
      <Match pattern='/contact' component={Contact} />
      <Match pattern='/sizzle' component={Sizzle} />
      <Match pattern='/admin' component={Admin} />
      <Match pattern='/signin' component={SignIn} />
      <Match pattern='/register' component={Register} />

      <Miss component={fourohfour} />
    </div>
  )
}

export default app
