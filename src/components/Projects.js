

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
          <p>say stack / tech / why u made it</p>
          <br />
        </div>

        <div style={divCent}>
          <h3>updated terminal app or a diff ruby app</h3>
          <p>say stack / tech / why u made it</p>
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