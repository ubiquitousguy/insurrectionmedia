import React from 'react'

const Contact = React.createClass({
  render () {
    const containerPlacer = {
      background: "lightblue"
    }
    return (
      <div className="row" style={containerPlacer}>
        <h1>Contact Main Component</h1>
      </div>
    )
  }
})

export default Contact
