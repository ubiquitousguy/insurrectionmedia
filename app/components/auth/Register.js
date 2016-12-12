import React from 'react'
const axios = require('axios')
const { string, bool } = React.PropTypes

const Register = React.createClass({

  propTypes: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    isAdmin: bool
  },

  getInitialState () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isAdmin: false
    }
  },

  firstNameChange (e) {
   this.setState ({ firstName: e.target.value })
  },

  lastNameChange (e) {
   this.setState ({ lastName: e.target.value })
  },

  emailChange (e) {
   this.setState ({ email: e.target.value })
  },

  passwordChange (e) {
   this.setState ({ password: e.target.value })
   console.log(e.target.value)
  },

  adminChange (e) {
    const admin = this.state.isAdmin = !this.state.isAdmin
    this.setState ({ isAdmin: admin })
  },

  saveSubmit (firstName, lastName, email, password, isAdmin) {

    axios.post('/auth/register', { firstName, lastName, email, password, isAdmin })
      .then((response) => {
        // cookie.save('token', response.data.token, { path: '/' })
        // cookie.save('user', response.data.user, { path: '/' })
        // window.location.href = "http://localhost:3000/"
        console.log('too far')

      })
  },

  handleEntry (e) {
    e.preventDefault()
    console.log('Email: ' + this.state.email)
    this.saveSubmit(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.isAdmin)
  },



  // handleSubmit (e) {
  //   e.preventDefault()
  //   this.setState({ firstName: this.refs.firstName.value,
  //                   lastName: this.refs.lastName.value,
  //                   email: this.refs.email.value,
  //                   password: this.refs.password.value,
  //                   isAdmin: this.refs.isAdmin.value
  //                 })
  //                 console.log(this.state.firstName)

  // },

  render () {
    return (
      <div className='flexy'>
        <div className='container'>
          <div className='row loginrow'>
            <div className='col-xs-4 logincolumn'>
                <form onSubmit={this.handleEntry} >

                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">First Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" ref="firstName" onChange={this.firstNameChange} />
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Last Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" ref="lastName" onChange={this.lastNameChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref='email' onChange={this.emailChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref='password' onChange={this.passwordChange} />
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" id="blankCheckbox" aria-label="..." onChange={this.adminChange} />
                      <small className="form-text text-muted">Is this person an admin?</small>
                    </label>
                  </div>
                  <button type="submit" value='Log In' className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>  
          </div>
        </div>
    )
  }
})

export default Register
