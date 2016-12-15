import React from 'react'
import ReactPlayer from 'react-player'
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video'

const Sizzle = React.createClass({
  render (props) {
    const containerPlacer = {
      
    }
    return (
      <div className="container-fluid" id="sizzleBody">
        <div className="row" style={containerPlacer}>
          <ReactPlayer url="https://vimeo.com/181869367" playing />
          {/*<Video controls autoPlay loop muted poster="http://sourceposter.jpg">
              <source src="https://r3---sn-p5qs7n7e.c.drive.google.com/videoplayback?requiressl=yes&id=5ab600f3546f579d&itag=37&source=webdrive&ttl=transient&app=texmex&ip=149.39.22.244&ipbits=0&expire=1481768140&cp=QVJNU0hfV1FSQVhNOk1sZzZRaHB3TURG&sparams=requiressl,id,itag,source,ttl,ip,ipbits,expire,cp&signature=1D9CE42C2F9C86B0DED4069B5C39AE35744C9C06.14F502D2684A10A09B68098E22E6CDE98259566E&key=ck2&mm=30&mn=sn-p5qs7n7e&ms=nxu&mt=1481752143&mv=u&nh=IgpwZjAxLmlhZDI2KgszOC4xNDIuNS4zMw&pl=24&sc=yes&cpn=ddogN5KmpQCWg9xl&c=WEB&cver=1.20161209" type="video/webm" />
              <Overlay />
              <Controls>
                  <Plnpm ray />
                  <Seek />
                  <Time />
                  <Mute />
                  <Fullscreen />
              </Controls>
          </Video>*/}
        </div>
        <div className="row">
          <div id="sizzleTitle">
            <h1>Insurrection Media</h1>
            <h1>2017 Sizzle Reel</h1>
          </div>
        </div>
      </div>
    )
  }
})

export default Sizzle
