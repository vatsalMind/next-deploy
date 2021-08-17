import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';



const useStyles = makeStyles((theme)=>({
 root:{
    padding: '10px 10px',
    border: '2px solid',
    color: theme.palette.type === 'dark' ? theme.palette.grey[600] : theme.palette.secondary.main ,
 },
  active:{
   color: theme.palette.primary.main
  }
}))


const Favorite = (props) => {
  const classes = useStyles()
  return (
    <Button variant={'outlined'} className={`${props.active ? classes.active : ''} ${classes.root}`} onClick={props.onClick}>
      { props.active ?
        props.activeIcon
        :
        props.icon
      }
    </Button>
  );
};

export default Favorite;
