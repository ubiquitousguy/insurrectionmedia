import React from 'react'
import PartnersContent from './Partners_Content'

const Partners = React.createClass({
  render (props) {
    const containerPlacer = {
      background: "yellow"
    }
    return (
      <div className="row" style={containerPlacer}>
        <PartnersContent />
      </div>
    )
  }
})

export default Partners
