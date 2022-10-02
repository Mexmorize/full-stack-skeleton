import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Container from 'react-bootstrap/Container'
import LandingPage from "./containers/LandingPage";
import DataCollectionPage from "./containers/DataCollectionPage";

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => {
          return (
            <Container>
              <TransitionGroup component={null}>
                <CSSTransition
                  timeout={300}
                  classNames="page"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/data-collection" component={DataCollectionPage} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </Container>
          );
        }}
      />
    </Router>
  );
}

export default App;
