
import React from 'react'

const Sizzle = React.createClass({
  render (props) {
    const containerPlacer = {
      background: "yellow"
    }
    return (
      <div className="row" style={containerPlacer}>
        <h1>Sizzle Main Component</h1>
      </div>
    )
  }
})

export default Sizzle
