import React from 'react';
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme=>({
  paper:{
    padding: 12,
    borderRadius: 10,
    cursor:"pointer",
    '&:hover':{
      backgroundColor: theme.palette.primary.main,
      '& $title,$subtitle':{
        color: theme.palette.common.white,
      },
    }
  },
  iconPaper:{
    padding: "10px 12px",
    borderRadius: 5,
    background: theme.palette.common.white
  },
  flex:{
    display:"flex"
  },
  margin:{
    margin: "auto 0px auto 10px",
  },
  title:{
    textAlign:"left",
    fontWeight: 600,
    fontSize: 16,
    color: theme.palette.common.black,
  },
  subtitle:{
    textAlign:"left",
    fontWeight: 400,
    fontSize: 14
  },
}))

const RolloverButton = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
        <div className={classes.flex}>
         <div>
          <Paper className={classes.iconPaper}>
          <img src={props.icon} alt={'icon'}/>
          </Paper>
         </div>
        <div className={`${classes.margin}`}>
          <Typography className={classes.title}>{props.title}</Typography>
          <Typography className={classes.subtitle}>{props.subtitle}</Typography>
        </div>
        </div>
    </Paper>
  );
};

export default RolloverButton;
