import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
import Projects from './Projects';
import AcaHistory from './AcaHistory';
import ContactMe from './ContactMe';
import App from '../App'


function Nav() {
    return (
      <div style={{backgroundColor: "#343A40", color: "white"}}>
      <h1>Nav</h1>
      <hr />
      </div>
    );
  }

export default Nav;