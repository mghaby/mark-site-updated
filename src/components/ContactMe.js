import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function ContactMe() {
  const classes = useStyles();
    return (
      <div>
        <h1>Contact Me!</h1>
        <form>
        <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >

        <TextField
          required
          id="Name"
          label="Required"
          defaultValue="Name"
          variant="filled"
        />
        <br />
        <TextField
          required
          id="Email"
          label="Required"
          defaultValue="Email"
          variant="filled"
        />
        <br />
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="this needs to be a big text field"
          variant="filled"
        />
        <br/>
        <Button variant="contained" color="default">Submit</Button>
        </Grid>
        </form>
        <h1 style={{textAlign: "center"}}>{";"}</h1>
      </div>
    );
  }
  
  export default ContactMe;