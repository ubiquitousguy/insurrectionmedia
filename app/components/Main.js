import React from 'react'
import Nav from './Nav'
import ReactPlayer, {volume} from 'react-player'

// Import sub-components
// import About from './About/About'
// import Partners from './Partners/Partners'
// import Press from './Press/Press'
// import Contact from './Contact/Contact'
// import Sizzle from './Sizzle/Sizzle'

const Main = () => {

  return (
    <div className="row">
      {/* <video id="logo-video" autoPlay muted >
        <source src="http://localhost:3000/public/assets/im_logo2.mp4" type="video/mp4"/>
      </video> */}
      <ReactPlayer width="auto" height="auto" volume="0"
        url="http://localhost:3000/public/assets/im_logo2.mp4" playing />

    </div>

  )
}


export default Main
