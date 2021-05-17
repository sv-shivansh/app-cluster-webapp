import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Stopwatch from "./components/application/Stopwatch/Stopwatch";
import Sortingvisualizer from "./components/application/Sortingvisualizer/Sortingvisualizer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Switch>
          <section className="container">
            <Route exact path="/stopwatch" component={Stopwatch} />
            <Route exact path="/sorting-visualizer" component={Sortingvisualizer} />
          </section>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
