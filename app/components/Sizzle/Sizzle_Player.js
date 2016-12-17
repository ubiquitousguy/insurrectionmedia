import React from 'react';
import ReactPlayer from 'react-player'
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video'

const Sizzle_Player = () => {
  return(
    <div>
      <ReactPlayer url="https://vimeo.com/181869367"  />
    </div>
)
}

export default Sizzle_Player;
