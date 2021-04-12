import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-scroll'

function Nav() {
   return (
      <div style={{position: "fixed", width:"100%"}}>
      <Paper style={{backgroundColor: "#343A40", color: "white"}}>
      <Tabs
        indicatorColor="white"
        textColor="white"
        centered
      >
        <Link  to="home" spy={true} smooth={true}><Tab label="Home" /></Link>
        <Link  to="projects" spy={true} smooth={true}><Tab label="Projects" /></Link>
        <Link  to="acahistory" spy={true} smooth={true}><Tab label="Academic History" /></Link>
      </Tabs>
    </Paper>
    <hr />
      </div>
    );
  }

export default Nav;