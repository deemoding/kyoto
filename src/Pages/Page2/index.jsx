import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import style from "./style.less";

const text = 'Locez是作死小王子Locez是作死小王子假装过了三分钟';

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
    }, 300);
  }

  showNext() {
    if (this.state.len >= text.length) {
      clearInterval(this.timer);
      this.props.history.push('/page3');
    } else {
      this.setState(state => ({
        len: state.len + 1,
      }));
    }
  }

  render() {
    return (
      <div className={style.page2}>
        <p>{text.slice(0, this.state.len)}</p>
      </div>
    );
  }
}

export default withRouter(Page2);
