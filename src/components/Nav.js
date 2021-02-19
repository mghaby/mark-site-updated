import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
import Projects from './Projects';
import AcaHistory from './AcaHistory';
import ContactMe from './ContactMe';
import App from '../App'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});



function Nav() {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

    return (
      <div style={{position: "fixed", width:"100%"}}>
      <Paper style={{backgroundColor: "#343A40", color: "white"}}>
      <Tabs
        // value={}
        // onChange={}
        indicatorColor="white"
        textColor="white"
        centered
      >
        <Tab label="Home" />
        <Tab label="Projects" />
        <Tab label="Academic History" />
        <Tab label="Contact me" />
      </Tabs>
    </Paper>
    <hr />
      </div>
    );
  }

export default Nav;