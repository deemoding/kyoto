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
        <div className={style.title} />
        <div
          className={style.open}
          role="button"
          tabIndex={0}
          onClick={() => { this.onClick() }}
        />
      </div>
    );
  }
}

export default withRouter(Page1);
