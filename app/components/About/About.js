import React from 'react'

const About = (props) => {
  const photoPlacer = {
   width: "350px",
   height: "300px"
  }
  return (
      <div className="container" id="about">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1 className="text-sm-center">Insurrection Media</h1>
          </div>
        </div>
        <div className="col-sm-4">
          <img style={photoPlacer} className="center-block img-responsive" src="public/assets/Kiliaen.jpg" />
          <h2 className="text-sm-center">Kiliaen Van Rensselaer, Founder & CEO</h2>
          <p>Before founding Insurrection, KVR was SVP, Multi-Platform Programming at Fox Television Group.   Under his leadership at Fox, seven of his digital incubations went on to TV/video series orders on networks such as FOX Broadcasting, TBS, Comedy Central, Lifetime and OTT platforms including Hulu, Fullscreen and Conde Nast.  KVR spent five years at News Corp/Fox as a digital disruptor after having sold a software services and e-reading company he co-founded to News Corp.  Prior to that, he held senior level positions including Executive Director of National Marketing at AT&T Mobility, VP, Marketing at Tickets.com, and Brand Manager at Colgate-Palmolive and The H.J. Heinz Company.  KVR has a BA with honors in History from Trinity College.
          </p>
        </div>
        <div className="col-sm-4">
          <img style={photoPlacer} className="center-block img-responsive" src="public/assets/Deb.jpg" />
          <h2 className="text-sm-center">Deborah Henderson, General Counsel & Head of Production</h2>
          <p>Henderson is an established Business Affairs and Legal executive with extensive experience in Production and Distribution for TV, Motion Pictures, New Media, Copyright & Trademark, Licensing, & Entertainment Law.  She is widely considered an expert and thought leader in over-the-top video talent & distribution contracts.  Before Insurrection, Henderson was General Counsel for Zodiak Americas, and previously, she served in senior roles of increasing responsibility in Business Affairs and Legal for Walt Disney Animation Studios.  Before Disney, she was at Paramount Pictures overseeing Business Affairs and Legal for digital entertainment.  Earlier in her career, Henderson was an Emmy-nominated producer, having worked on a dozen films for TV. She has a B.Arch. from Carnegie Mellon University, a J.D. Law degree from Columbia University, and an LL.M. (Master of Laws) in Computer & Communications from University College London (UCL).
          </p>
        </div>
        <div className="col-sm-4">
          <img style={photoPlacer} className="center-block img-responsive" src="public/assets/Jordana.jpg" />
          <h2 className="text-sm-center">Jordanna Fraiberg, Head of Development</h2>
          <p>Fraiberg is a veteran executive with nearly two decades of experience in TV, film, digital development and she is a published novelist.  Most recently, Fraiberg helped launch a new original digital content division at Audible, an Amazon Company.  Previously, she was VP, Production & Development for Village Roadshow where she served for nine years. Creatively, Fraiberg was as Consulting Producer, writing four episodes for the TV series Duality on Televisa USA and she wrote two YA novels published by Razorbill/Penguin. She graduated Magna Cum Laude with a BA from Harvard and went on to receive an M.Phil in English Studies with Distinction at Oxford.
          </p>
        </div>
      </div>
    )
  }


export default About
