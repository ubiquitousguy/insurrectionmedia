import React from 'react'
// Import sub-components
// import About from './About'
// import Partners from './Partners'
// import Press from './Press'
// import Contact from './Contact'

const Main = React.createClass({
  render () {
    return (
      <div className="container-fluid">
        <div className='container sidebar'>
          <ul className='nav nav-pills nav-stacked'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Manage Users</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Add Media</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Add Press</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})

export default Main
