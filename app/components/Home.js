import React from 'react'

const Home = React.createClass({
  render () {
    const containerPlacer = {
      background: "blue"
    }
    return (
      <div className="row" style={containerPlacer}>
        <h1>HOME COMPONENT</h1>
        <video id="logo-video" autoPlay>
          <source src="./assets/im_logo.mp4" type="video/mp4"/>
        </video>
      </div>
    )
  }
})

export default Home
