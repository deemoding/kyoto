import React from "react";

class Bgm extends React.PureComponent {
  render() {
    return (
      <div style={{ display: 'none' }}>
        <iframe
          title="bgm"
          src="//music.163.com/outchain/player?type=2&id=548145360&auto=1"
        />
      </div>
    );
  }
}

export default Bgm;
