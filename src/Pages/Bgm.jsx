import React from "react";
import music from "../resource/never_coming_back.mp3";

class Bgm extends React.PureComponent {
  render() {
    return (
      <audio
        style={{
          display: 'none'
        }}
        src={music}
        loop
        autoPlay
        controls
      />
    );
  }
}

export default Bgm;
