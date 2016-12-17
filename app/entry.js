import React from 'react'
import { Match, Miss, Link, Router } from 'react-router'

import app from './app'
import admin from './admin'

const entry = () => (
  <div>
    <Match exactly pattern='/' component={app} />
    <Match pattern='/admin' component={admin} />
  </div>
)

export default entry