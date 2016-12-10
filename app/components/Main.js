import React from 'react'
// Import sub-components
// import About from './About'
// import Partners from './Partners'
// import Press from './Press'
// import Contact from './Contact'

const Main = React.createClass({
  render () {
    return (
      <div id="main-nav" className="navbar navbar-fixed-top">
  			<div className="container">

  				<div className="navbar-header">

  					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#site-nav">
  						<span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
  					</button>

  					<a className="navbar-brand scrollto" href="#home">
  						<span className="logo-small"><img src="assets/logo-small.png" alt=""/></span>
  						<span className="to-top"><i className="fa fa-arrow-up"></i></span>

  						Qubico


  						{/* <img className="site-logo" src="assets/logo.png" alt="logo" /> */}
  					</a>

  				</div>
          <div id="site-nav" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="sr-only">
                <a href="#home" className="scrollto">Home</a>
              </li>
              <li>
                <a href="#about" className="scrollto">About</a>
              </li>
              <li>
                <a href="#services" className="scrollto">Services</a>
              </li>
              <li>
                <a href="#team" className="scrollto">Team</a>
              </li>
              <li>
                <a href="#portfolio" className="scrollto">Portfolio</a>
              </li>
              <li>
                <a href="#pricing" className="scrollto">Prices</a>
              </li>
              <li className="">
                <a href="#news" className="scrollto">News</a>
              </li>
              <li>
                <a href="#contact" className="scrollto">Contact</a>
              </li>
              <li className="submenu ">
                <a href="blog/blog.html">Blog</a>
                <ul>
                  <li><a href="blog/blog-ajax.html">Ajax Blog</a></li>
                  <li><a href="blog/blog.html">Standard Blog</a></li>
                  <li><a href="blog/following-the-train.html">Single Blog Post</a></li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </div>

    )
  }
})

export default Main
