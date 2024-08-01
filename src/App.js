import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './pages/Home'
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/services" component={Services} />
        <Route path="/contactus" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
