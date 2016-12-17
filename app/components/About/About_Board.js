import React from 'react'

const About_Board = React.createClass({
  render () {
    return (
      <div id="about">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-sm-center">Insurrection Media Board of Directors</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            {/* <img style={photoPlacer} className="mx-auto img-fluid" src="public/assets/Deb.jpg" /> */}
            <h2 className="text-sm-center">Allen DeBevoise, Managing Partner, Third Wave Capital</h2>
            <p className="bio">Allen started Third Wave in 2014 after more than 30 years experience incubating and investing in digital media companies. He has invested in over 70 digital media companies and has co-founded several of the most important digital media brands including Machinima, StyleHaul, DanceOn, INDMusic, Mitu, and Tubular Labs. Prior to founding Third Wave, Allen built a strong track record as an Angel Investor in the digital media sector and has had over 15 high-multiple exits/NAVs.   Often dubbed “the Godfather of Online Video” Allen is currently the Chairman of Machinima and sits on several digital media company boards including StyleHaul, MiTu, Tubular Labs, DanceOn, INDMusic, and Mondo Entertainment.
            Allen has an A.B. in Mathematics and an MSE in Computer Science from the University of Pennsylvania.
            </p>
          </div>
          <div className="col-sm-6">
            {/* <img style={photoPlacer} className="mx-auto img-fluid" src="public/assets/Jordana.jpg" /> */}
            <h2 className="text-sm-center">Michael A. Reinstein, Chairman & CEO, Regent Companies</h2>
            <p className="bio">Michael is the founder and managing partner of Regent Companies, a multi-sector private equity firm.  He is currently the chairman of several Regent portfolio companies, including Lillian Vernon, Pegasus Solutions, and NexTag.  Michael is also the chairman of Sightline Media Group and serves as publisher of its various newspaper and media properties including Defense News, Army Times, Navy Times, Air Force Times, Marine Corps Times, Armed Forces Journal, and Federal Times among others.  Previously, he was the Chief Executive Officer of The Franklin Mint as well as CEO of CinemaNow.  Michael has also served on several private and public company boards including the Australian Stock Exchange listed technology company Structural Monitoring Systems.  He started his career as an intern under former President Ronald Reagan.
            Michael has a B.A. from the University of Southern California and a JD from Pepperdine University School of Law.
            </p>
          </div>
        </div>
      </div>
    )
  }
})

export default About_Board
