import React, {Component} from 'react';
import Contact_Gen from './Contact_Gen';
import Contact_Media from './Contact_Media';

class Contact extends Component {
  render() {
    return (
      <div>
        <Contact_Gen />
        <Contact_Media />
      </div>
    )
  }
}

export default Contact
