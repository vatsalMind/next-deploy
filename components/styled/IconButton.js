import {IconButton, withStyles} from "@material-ui/core";

export const IconButtonStyle = withStyles((theme)=>({
  root: {
    background: "none",
    color: theme.palette.type === 'dark' ? theme.palette.grey[600] : theme.palette.secondary.main
  },
}))(IconButton);

import React from 'react';

const CustomIconButton = ({color='secondary',icon,onClick={}, style={}}) => {
  return (
    <IconButtonStyle color={color} onClick={onClick} style={style} disableRipple>
      {icon}
    </IconButtonStyle>
  );
};

export default CustomIconButton;


