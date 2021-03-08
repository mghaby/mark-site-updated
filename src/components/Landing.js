import me from '../img/me.png'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const pfpStyle = {
  display: "inline-block",
  float: "right",
  height: 150,
  width: 150,
  marginRight: 400
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Landing() {
    const classes = useStyles();
    return (
      <div>
        <br /><br /><br />< br/>
        <h1 style={{textAlign: "center"}}>Hi! I'm Mark.</h1>
        <img src={me} alt={"Photo of Mark Ghaby"} style={pfpStyle} />
        <br /><br /><br /><br/>
        <p style={{textAlign: "center", marginLeft: 525}}>Full-Stack Web Dev from Sydney, Australia</p>
        <p style={{textAlign: "center", marginLeft: 525}}>HTML {"&"} CSS | JS | React | Ruby | Ruby on Rails | PostgreSQL</p>
        <br /><br /><br /><br />
        <hr style={{width: 100, margin: "auto", width: 1200}} />
        <br /><br /><br /><br /><br /><br /><br />
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
        <Button variant="outlined">Twitter</Button>
        <Button variant="outlined">LinkedIn</Button>
        <Button variant="outlined">Github</Button>
        <Button variant="outlined">Résumé</Button>
        <Button variant="outlined">Email</Button>
        </Grid>
        {/* add buttons here for github / linkedin / twitter  */}
        <br /><br /><br /><br /><br />
        <h1 style={{textAlign: "center"}}>{";"}</h1>
      </div>
    )
  }
  
  export default Landing;