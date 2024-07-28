import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="*" component={Notfound} /> */}
        </Switch>
      </Router>

    </div>
  );
}

export default App;