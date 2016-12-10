import React from 'react'
// Import sub-components
// import About from './About'
// import Partners from './Partners'
// import Press from './Press'
// import Contact from './Contact'

const Main = React.createClass({
  render () {
    return (
      <div id='main-nav' className='navbar navbar-fixed-top'>
        <div className='container'>

          <div className='navbar-header'>

            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#site-nav'>
              <span className='icon-bar' /><span className='icon-bar' /><span className='icon-bar' />
            </button>
            <a className='navbar-brand scrollto' href='#home'>
              <span className='logo-small'><img src='assetswe/logo-small.png' alt='' /></span>
              <span className='to-top'><i className='fa fa-arrow-up' /></span>

              INSURRECTION MEDIA

              <img className='site-logo' src='assets/logo.png' alt='logo' />
            </a>

          </div>

          <div id='site-nav' className='navbar-collapse collapse'>
            <ul className='nav navbar-nav navbar-right'>
              <li className='home'>
                <a href='#home' className='scrollto'>Home</a>
              </li>
              <li className='about'>
                <a href='#about' className='scrollto'>About</a>
              </li>
              <li className='team'>
                <a href='#team' className='scrollto'>Team</a>
              </li>
              <li className='partners'>
                <a href='#news' className='scrollto'>Partners</a>
              </li>
              <li>
                <a href='#contact' className='scrollto'>Contact</a>
              </li>
              <li className='blog'>
                <a href='#blog'>Blog</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

    )
  }
})

export default Main
