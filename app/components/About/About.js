import React from 'react';
// import {Link} from 'react-router';
import About_Officers from './About_Officers';
import About_Mission from './About_Mission';
import About_Board from './About_Board';
import About_Advisors from './About_Advisors';

class About extends React.Component{
  render() {
    return (
      <About_Officers/>
      <About_Mission />
      <About_Board />
      <About_Advisors />
    )

  }

}
export default About
