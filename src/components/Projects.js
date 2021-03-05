// import ruby from '../img/ruby'
import react_project from '../img/react_project.png'

const proImg = {
  display: 'inline-block',
  height: 262,
  width: 300
};

const proText = {
  display: 'flex',
  flexWrap: 'wrap'
};

const divCent = {
  textAlign: "center"
};

const card = {
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  maxWidth: 300,
  margin: "auto",
  textAlign: "center"
}

function Projects() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Projects</h1>
{/* make a card graphic thing for the projects  */}
        <div style={divCent}>
          <h3>This Website</h3>
          <p>This web app builds off an old website made for an Assignment</p>
          <p>The old website was my first ever code project in Vanilla HTML and CSS</p>
          <p>This application is in React {`&`} JS </p>
          {/* <p>https://github.com/mghaby/mark-site-updated</p> */}
        </div>
        <br />
        <br />

        <div style={divCent}>
          <h3>Game Shop Ruby CLI Application</h3>
          {/* <img src={ruby} alt="CLI App Image" style={proImg}/> */}
          <p>This Ruby CLI App runs in terminal and simulates visiting a Game Store</p>
          <p>Inspired by another Ruby CLI assignment, both in Ruby with an assortment of Gems</p>
          {/* <p>https://github.com/mghaby/game_shop</p> */}
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
          {/* <p>https://heartline-react.netlify.app/</p> */}
          <br />
        </div>
        <br />
        <br />

        <hr />
      </div>
    );
  }
  
  export default Projects;