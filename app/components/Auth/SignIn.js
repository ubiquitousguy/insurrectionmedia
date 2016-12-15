import React from 'react'
const axios = require('axios')

const { string, bool } = React.PropTypes



const SignIn = React.createClass({

  propTypes: {
    email: string,
    password: string
  },

  getInitialState () {
    return {
      email: '',
      password: ''
    }
  },

  emailChange (e) {
   this.setState ({ email: e.target.value })
  },

  passwordChange (e) {
   this.setState ({ password: e.target.value })
   console.log(e.target.value)
  },

  checkLog (email, password) {
    axios.post('/auth/signin', {  email, password })
    .then(response => {
      console.log(response, '!!!!!!!!')
    })
    .catch(err => {
      console.log(err, '?????????')
    })

  },

  handleEntry (e) {
    e.preventDefault()
    this.checkLog(this.state.email, this.state.password)
  },

  render () {
    return (
      <div className='flexy'>
        <div className='container'>
          <div className='row loginrow'>
            <div className='col-xs-4 logincolumn'>

                <form onSubmit={this.handleEntry} >
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref='email' onChange={this.emailChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref='password' onChange={this.passwordChange} />
                  </div>
                  <button type="submit" value='Log In' className="btn btn-primary">Log In</button>
                </form>

              </div>
            </div>  
          </div>
        </div>
    )
  }
})

export default SignIn
