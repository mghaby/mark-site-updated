import me from '../img/me.png'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import myRes1 from '../docs/MarkGhabyResume.pdf';
import MediaQuery from 'react-responsive'

const pfpStyle = {
  display: "inline-block",
  float: "right",
  height: 150,
  width: 150,
  marginRight: 400
};

const pfpMob = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%"
};

function Landing() {
    return (
      <div id="home" style={{height: "100%"}}>
        <br /><br /><br />< br/>
        <h1 style={{textAlign: "center"}}>Hi! I'm Mark.</h1>

        {/* laptop */}
        <MediaQuery minWidth={1224}>
        <img src={me} alt={"Mark Ghaby"} style={pfpStyle} />
        <br /><br /><br /><br/>
        <p style={{textAlign: "center", marginLeft: 525}}>Junior Full-Stack Web Dev from Sydney, Australia</p>
        <p style={{textAlign: "center", marginLeft: 500}}>HTML {"&"} CSS | JS | React | Ruby | Ruby on Rails | PostgreSQL</p>
        </MediaQuery>

        {/* mobile */}
        <MediaQuery maxWidth={375}>
        <img src={me} alt={"Mark Ghaby"} style={pfpMob} />
        <br /><br /><br /><br/>
        <p style={{textAlign: "center"}}>Junior Full-Stack Web Dev from Sydney, Australia</p>
        <p style={{textAlign: "center"}}>HTML {"&"} CSS | JS | React | Ruby | Ruby on Rails | PostgreSQL</p>
        </MediaQuery>

        <br /><br /><br /><br />
        <hr style={{margin: "auto", width: "60%"}} />
        <br /><br /><br /><br /><br /><br /><br />
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
        <Button variant="outlined" href={'https://twitter.com/GhabyMark'}>Twitter</Button>
        <Button variant="outlined" href={'https://www.linkedin.com/in/mark-ghaby-bb6ab01b4/'}>LinkedIn</Button>
        <Button variant="outlined" href={'https://github.com/mghaby/'}>Github</Button>
        <Button variant="outlined" href={myRes1}>Résumé</Button>
        <Button variant="outlined" href={'mailto:mark.ghaby71@gmail.com'}>Email</Button>
        </Grid>
        <br /><br /><br /><br /><br />
        <h1 style={{textAlign: "center"}}>{";"}</h1>
        <br /><br /><br /><br /><br /><br />
        <hr style={{margin: "auto", width: "90%"}} />
      </div>
    )
  }
  
  export default Landing;