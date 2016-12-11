import React from 'react'
const Axios = require('axios')

const AddUser = React.createClass({

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
   this.setState ({ firstName: e.target.value })
  },

  emailChange (e) {
   this.setState ({ email: e.target.value })
  },

  passwordChange (e) {
   this.setState ({ password: e.target.value })
  },

  adminChange (e) {
    const admin = e.target.value ? true : false
    this.setState ({ isAdmin: admin })
  },

  handleSubmit ( firstName, lastName, email, password, isAdmin ) {
    event.preventDefault()
    axios.post('/auth/register', { firstName, lastName, email, password, isAdmin })
      .then((response) => {
        cookie.save('token', response.data.token, { path: '/' })
        cookie.save('user', response.data.user, { path: '/' })

      })
    
  },


  render () {
    return (
      <div className='flexy'>
        <div className='container'>
          <div className='row loginrow'>
            <div className='col-xs-4 logincolumn'>
                <form action={this.handleSubmit} >

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
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' ref='password' onChange={this.passwordChange} />
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" id="blankCheckbox" value={true} aria-label="..." ref='admin' onChange={this.adminChange} />
                      <small id="emailHelp" className="form-text text-muted">Is this person an admin?</small>
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

export default AddUser
