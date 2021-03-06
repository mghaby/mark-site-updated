import me from '../img/me.png'

const pfpStyle = {
  display: "inline-block",
  float: "right",
  height: 150,
  width: 150,
  // marginRight: 250
};

function Landing() {
    return (
      <div>
        <h1>Welcome</h1>
        <div style={{textAlign: "center", alignContent: "center", alignItems: "center"}}>
        <p style={{display: "inline-block"}}>Hello! My name is Mark Ghaby. Im a Sydney-based Junior Full Stack Developer.</p>
        <img src={me} alt={"Photo of Mark Ghaby"} style={pfpStyle} />
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <p>My skills range from JavaScript, Ruby, React, Ruby on Rails and HTML {"&"} CSS.
          In the future I'd like to
          diversify this list and potentially branch into Penetration 
          Testing in the Cyber Security world. </p>
          {/* a graphic of language list sshould be somewhere around here */}
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <hr />
      </div>
    )
  }
  
  export default Landing;