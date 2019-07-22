import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import letters from "./letter";
import style from "./style.less";

const LETTERS_LEN = letters.reduce((pv, cv) => pv + cv, '').length;

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.timer = 0;
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
    }, Math.round(3000 / LETTERS_LEN));
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
        <p key={i} className={i === letters.length - 1 && style.luokuan}>
          {letters[i].slice(0, len)}
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
