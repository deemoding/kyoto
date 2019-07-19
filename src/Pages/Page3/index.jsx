import React from "react";
import style from "./style.less";

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
      <div className={style.page3}>
        <div
          role="button"
          tabIndex={0}
          className={`${this.state.sent ? style.flowerSent : style.flower}`}
          onClick={() => { this.onClick() }}
        >
          我是鲜花
        </div>
      </div>
    );
  }
}

export default Page3;
