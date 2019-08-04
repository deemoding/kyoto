import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import getScrollBottom from "../../utils/getScrollBottomHeight";
import letters from "./letter";
import style from "./style.less";

const LETTERS_LEN = letters.reduce((pv, cv) => pv + cv, '').length;
const SCROLL_TIME = 60000; // 信的内容完全显示需要的时间(ms)
const SCROLL_MODULUS = 16; // 滚动条滚动到底速度倍率，用于调整滚动条每16ms滚动的速度

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.timer = 0;
    this.timerScroll = 0;
    this.scrollTop = 0;
    this.state = {
      len: 0,
    };
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.showNext();
    }, Math.round(SCROLL_TIME / LETTERS_LEN));
    const scrollBottom = getScrollBottom();
    this.timerScroll = setInterval(() => {
      if (this.scrollTop >= scrollBottom) {
        clearInterval(this.timerScroll);
      } else {
        this.scrollTop += scrollBottom * SCROLL_MODULUS / SCROLL_TIME;
        window.scrollTo(0, this.scrollTop);
      }
    }, 16);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    clearInterval(this.timerScroll);
  }

  showNext() {
    if (this.state.len >= LETTERS_LEN) {
      clearInterval(this.timer);
      setTimeout(() => {
        this.props.history.push('/page3');
      }, 3000);
    } else {
      this.setState(state => ({
        len: state.len + 1,
      }));
    }
  }

  render() {
    const content = [];
    let len = this.state.len;
    let i = 0;
    while (len > 0) {
      content.push(
        <p key={i} className={i === letters.length - 1 ? style.thanks : ''}>
          {/* eslint-disable-next-line react/no-array-index-key */}
          {letters[i].slice(0, len).split('').map((s, j) => <span key={j}>{s}</span>)}
        </p>
      );
      len -= letters[i].length;
      i++;
    }
    return (
      <div className={style.page2}>
        <div className={style.letters}>
          {content}
        </div>
      </div>
    );
  }
}

export default withRouter(Page2);
