import React from 'react'

const Admin = () => {
    return (
      <div id='wrapper'>
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
      </div>
    )
}

export default Admin
