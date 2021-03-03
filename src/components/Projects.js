

const proText = {
  display: 'flex',
  flexWrap: 'wrap'
};

const divCent = {
  textAlign: "center"
};

function Projects() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Projects</h1>

        <div style={divCent}>
          <h3>This Website</h3>
          <p>This web app builds off an old website made for an Assignment</p>
          <p>The old website was my first ever code project in Vanilla HTML and CSS</p>
          <p>This application is in React {`&`} JS </p>
          {/* <p>https://github.com/mghaby/mark-site-updated</p> */}
          <br />
        </div>

        <div style={divCent}>
          <h3>Game Shop Ruby CLI Application</h3>
          <p>This Ruby CLI App runs in terminal and simulates visiting a Game Store</p>
          <p>Inspired by another Ruby CLI assignment, both in Ruby with an assortment of Gems</p>
          {/* <p>https://github.com/mghaby/game_shop</p> */}
          <br />
        </div>

        <div style={divCent}>
          <h3>React Full Stack App</h3>
          <p>same as above</p>
          <br />
        </div>



        <hr />
      </div>
    );
  }
  
  export default Projects;