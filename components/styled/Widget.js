import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {Label} from "./TextField";


const useStyle = makeStyles((theme)=>({
  root:{
    display:"flex",
  },
  textBlock:{
    margin: "auto 13px",
  },
  font18:{
    fontSize: 18,
  },
  count:{
    marginTop: 5,
    textAlign:"left",
    fontWeight: "bold",
  },
  countColor:{
    color: props => props.fontColor,
  },
  bgColor:{
    padding: "15px 0px",
    borderRadius: 5,
    backgroundColor: props => props.backgroundColor,
    '&:hover':{
      backgroundColor: props => props.backgroundColor
    }
  }
}))

const Widget = (props) => {
  const classes = useStyle(props);
  return (
    <div className={classes.root}>
      <div>
      <Button className={classes.bgColor} disableRipple>
          <img src={props.icon} />
      </Button>
      </div>
      <div className={classes.textBlock}>
        <Label className={classes.font18}>
          {props.label}
        </Label>
        <Label className={`${classes.count} ${classes.countColor}`}>
          {props.count}
        </Label>
      </div>
    </div>
  )
}

export default Widget;
