import React from "react";
import style from "./style.less";
import flowerImg from "./img/flower.png";
import bgImg from "./img/bg.png";
import bgPurpleImg from "./img/bgPurple.png";

class Page3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false,
    };
  }

  onClick() {
    this.setState({
      sent: true,
    });
  }

  render() {
    return (
      <div
        className={style.page3}
        style={{
          backgroundImage: this.state.sent ? `url(${bgImg})` : `url(${bgPurpleImg})`
        }}
      >
        <div className={style.text}>
          <p>已有作死小王子献花</p>
          <p>点击献花</p>
          <img
            className={style.flower}
            src={flowerImg}
            alt="flower"
            onClick={() => { this.onClick() }}
          />
        </div>
      </div>
    );
  }
}

export default Page3;
