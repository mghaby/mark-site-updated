import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Projects from './Projects';
import AcaHistory from './AcaHistory';
import ContactMe from './ContactMe';
import App from './App'



function Nav() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Academic">
            <AcaHistory />
          </Route>
          <Route path="/Contact">
            <ContactMe />
          </Route>
          </Switch>
      </Router>
    );
  }

export default Nav;