import React from 'react';
import {Grid, InputLabel, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root:{
    display: "inline-flex",
    alignItems: "center",
    margin: theme.spacing(2)
  },
  icon:{
    display: "flex",
    color: theme.typography.body1.color,
  },
   label:{
    marginLeft: theme.spacing(1)
   }
}))


const MetaData = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item className={classes.icon}>
        {props.icon}
      </Grid>
      <Grid item className={classes.label}>
        <InputLabel>
          {props.label}
        </InputLabel>
      </Grid>
    </div>
  );
};

export default MetaData;
