import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import style from "./App.less";

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <div>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  className={style.page}
                >
                  <Switch location={location}>
                    <Route exact path="/" />
                    <Route path="/page1" />
                    <Route path="/page2" />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
