import React from 'react'
import Nav from './Nav'
import ReactPlayer from 'react-player'

// Import sub-components
// import About from './About/About'
// import Partners from './Partners/Partners'
// import Press from './Press/Press'
// import Contact from './Contact/Contact'
// import Sizzle from './Sizzle/Sizzle'

const Main = () => {
    return (
      <div className="row">
        <h1>HOME COMPONENT</h1>
        {/* <video id="logo-video" autoPlay muted >
          <source src="../../public/assets/im_logo.mp4" type="video/mp4"/>
        </video> */}
        <ReactPlayer url="http://localhost:3000/public/assets/im_logo.mp4" playing />

      </div>

    )
  }


export default Main
