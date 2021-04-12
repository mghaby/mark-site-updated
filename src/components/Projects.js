import ruby from '../img/ruby.png'
import react_project from '../img/react_project.png'
import site from '../img/site.png'
import Grid from '@material-ui/core/Grid';

const proImg = {
  display: 'inline-block',
  height: 262,
  width: 300
};

const card = {
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  maxWidth: 300,
  margin: "auto",
  textAlign: "center"
};

function Projects() {
    return (
      <div id='projects'>
        <br />
        <h1 style={{textAlign: "center"}}>Projects</h1>
        <br />

        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
          >
        <div style={card}>
          <img src={site} alt="website preview" style={proImg} />
          <br /><br />
          <h3>This Portfolio Website</h3>
          <p>This portfolio website builds off a previous portfolio website made for an assignment
            in vanilla HTML {"&"} CSS</p>
          <p>This site is built in JavaScript {"&"} React</p>
          <a href={"https://github.com/mghaby/mark-site-updated"}>Check it Out!</a>
          <br /><br />
        </div>
        <br />
        <br />
        <br />

        <div style={card}>
          <img src={ruby} alt="CLI App preview" style={proImg}/>
          <br />
          <br />
          <h3>Game Shop Ruby CLI Application</h3>
          <p>This Ruby CLI App runs in terminal and simulates visiting a Game Store</p>
          <p>Inspired by another Ruby CLI assignment, both in Ruby with an assortment of Gems</p>
          <a href={"https://github.com/mghaby/game_shop"}>Check it Out!</a>
          <br />
          <br />
        </div>
        <br />
        <br />

        <div style={card}>
          <img src={react_project} alt="Full Stack Preview" style={proImg}/>
          <br />
          <br />
          <h3>React Full Stack App</h3>
          <p>The app was made to help people reach their fitness goals</p>
          <p>The app was made with a Rails API and a React Frontend</p>
          <a href={"https://heartline-react.netlify.app/"}>Check it Out!</a>
          <br />
          <br />
        </div>
        </Grid>
        <br /><br />
        <div style={{textAlign: "center"}}>
        <h1>More projects to come!</h1>
        <h1>Keep in touch with my socials to be in the loop!
        </h1>
        </div>
        <br /><br /><br />
        <hr style={{margin: "auto", width: "90%"}} />
        <br /><br /><br /><br />
      </div>
    );
  }
  
  export default Projects;