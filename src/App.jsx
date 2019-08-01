import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import style from "./App.less";

const routes = [
  { path: '/', Component: Page1 },
  { path: '/page1', Component: Page1 },
  { path: '/page2', Component: Page2 },
  { path: '/page3', Component: Page3 },
];

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className={style.main}>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path} component={Component} />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
