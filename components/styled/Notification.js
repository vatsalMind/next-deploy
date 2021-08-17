import React from 'react';
import {Badge, makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';


const useStyles = makeStyles((theme)=>({
  root:{
    padding: '10px 10px',
    border: '1px solid',
    borderRadius: "10px",
    color: theme.palette.type === 'dark' ? theme.palette.grey[600] : '#c0c0c0' ,
  },
  active:{
    color: theme.palette.primary.main
  },
  badge:{
    fontSize: 22,
    top: "38%",
    right: "37%",
  },
  dot:{
    height: "12px",
    minWidth: "12px",
    borderRadius: 12,
    border: "1px solid"
  }
}))

const Notification = (props) => {
  const classes = useStyles();
  return (
    <>
      <Badge color="primary" variant="dot" invisible={props.invisible} overlap={"circular"} classes={{badge:classes.badge,dot:classes.dot}} >
        <Button variant={'outlined'} className={`${classes.root}`}>
          <NotificationsNoneOutlinedIcon color={"secondary"} fontSize={"large"} />
        </Button>
      </Badge>
    </>
  );
};

export default Notification;
