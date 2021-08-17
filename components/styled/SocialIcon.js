import React from 'react';
import {IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles= makeStyles(theme=>({
 root:{
   margin: "10px 10px",
   borderRadius: 5,
   backgroundColor: theme.form.backgroundColor,
   padding: 0,
   height: 50,
   width: 50
 }
}))

const SocialIcon = (props) => {
  const classes = useStyles();
  return (
    <div>
      {props?.socialIcons?.length > 0 && props.socialIcons.map((itm, index) => {
        return (
            <IconButton key={index} className={classes.root} onClick={()=>props.onClick(itm)} disableRipple>
              <img src={itm.icon} alt={itm.name}/>
            </IconButton>
        )
      })
      }
    </div>
  );
};

export default SocialIcon;
