import React, {Component} from 'react';
import Contact_Gen from './Contact_Gen';
// import Contact_Media from './Contact_Media';

class Contact extends Component {
  render() {
    return (
      <div className = "container-fluid">
        <h1 id="sectionHeading">Contact Us</h1>
        <Contact_Gen />
      </div>
    )
  }
}

export default Contact
