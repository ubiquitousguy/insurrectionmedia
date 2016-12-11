import React from 'react'

const SignIn = React.createClass({
  render () {
    return (
      <div className='flexy'>
        <div className='container'>
          <div className='row loginrow'>
            <div className='col-xs-4 logincolumn'>
                <form action='/login/check' method='POST'>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' />
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

export default SignIn