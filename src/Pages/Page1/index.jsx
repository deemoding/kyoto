import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import style from "./style.less";

class Page1 extends React.PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  onClick() {
    this.props.history.push('/page2');
  }

  render() {
    return (
      <div className={style.page1}>
        <h1>
          简介
        </h1>
        <p>test</p>
        <button type="button" onClick={() => { this.onClick() }}>默哀3分钟</button>
      </div>
    );
  }
}

export default withRouter(Page1);
