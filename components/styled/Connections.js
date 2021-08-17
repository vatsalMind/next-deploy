import React from 'react';
import {Avatar, Divider, Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MoreVertIcon from '@material-ui/icons/MoreVert';
const useStyles = makeStyles(theme=>({
  root:{
    width: 320,
    borderRadius: 20,
    padding: 20
  },
  margin:{
    margin: "0px 2px 10px 2px"
  },
  textGrid:{
    margin: "0 10px",
    textAlign: "left"
  },
  avatar:{
    height: 55,
    width: 55
  },
  label:{
    fontWeight: 600
  },
  link:{
   cursor: "pointer"
  },
  title:{
    fontSize: 18,
    fontWeight: 600,
    color: theme.palette.type === 'dark' ?  theme.palette.common.white: '#1D1D1D',
    lineHeight: "1.2rem"
  },
  subTitle:{
    fontSize: 16,
    fontWeight: 400
  },
  icon:{
    color: theme.typography.body1.color
  },
  marginY:{
    margin: "5px 0"
  }
}))
const Connections = () => {
  const classes= useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container justifyContent="space-between" alignItems="center" className={classes.margin}>
        <Grid item>
          <Typography className={classes.label}>Connections</Typography>
        </Grid>
        <Grid item>
          <Typography color={"primary"} className={classes.link}>View all</Typography>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" />
      <Grid container alignItems="center" className={classes.marginY}>
        <Divider variant="fullWidth" />
        <Grid item>
          <Avatar className={classes.avatar}>H</Avatar>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} className={classes.textGrid}>
          <Typography className={classes.title}>title </Typography>
          <Typography className={classes.subTitle}>subtitle</Typography>
        </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
              <MoreVertIcon className={classes.icon}/>
          </Grid>
      </Grid>
      <Divider variant="fullWidth"/>
    </Paper>
  );
};

export default Connections;
