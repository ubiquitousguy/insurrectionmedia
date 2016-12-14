import React from 'react'
import ReactPlayer from 'react-player'

const Sizzle = React.createClass({
  render (props) {
    const containerPlacer = {
      background: "yellow"
    }
    return (
      <div className="row" style={containerPlacer}>
        <h1>Sizzle Main Component</h1>
        <ReactPlayer url="https://drive.google.com/file/d/0B1p0KmR01jeSNER1TXdXZU1zRU0/preview" playing />
      </div>
    )
  }
})

export default Sizzle
