import React from 'react'

const About = React.createClass({
  render () {
    const containerPlacer = {
      background: "pink"
    }
    return (
      <div className="row" style={containerPlacer}>
        <h1>About Main Component</h1>
      </div>
    )
  }
})

export default About
