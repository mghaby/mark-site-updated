import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
        </Grid>
        {/* need a submit button here */}
        </form>
      </div>
    );
  }
  
  export default ContactMe;