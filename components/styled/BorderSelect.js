import React from 'react';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from "@material-ui/core";
import {alpha} from "@material-ui/core/styles";

const useBorderSelectStyles = makeStyles(theme=>({
  label:{
    // margin: '-7px 0px',
    fontSize: 22,
    // marginBottom: theme.spacing(5),
  },
  select: {
    marginTop: theme.spacing(1),
    minWidth: '200px',
    backgroundColor: theme.typography.body2.backgroundColor,
    borderRadius: 4,
    paddingLeft: '24px',
    paddingTop: '14px',
    paddingBottom: '15px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    "&:focus":{
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    "&.MuiInput-input":{
      color: theme.typography.body1.color,
    }
  },
  icon:{
    color: theme.palette.grey[500],
    right: 12,
    position: 'absolute',
    userSelect: 'none',
    pointerEvents: 'none'
  },
  list: {
    paddingTop:0,
    paddingBottom:0,
    background: theme.palette.background.paper,
    fontKerning: "none",
    '&:hover': {
      background: "none",
      color: theme.palette.primary.main
    },
    "& li.Mui-selected":{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary,
    }
  }
  })
);

const BorderSelect = (props) => {
  const borderSelectClasses = useBorderSelectStyles();

  // moves the menu below the select input
  const menuProps = {
    classes: {
      list: borderSelectClasses.list
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    getContentAnchorEl: null
  };

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon className={props.className + " " + borderSelectClasses.icon}/>
    )};

  return (
    <FormControl fullWidth={props.fullWidth}>
      <InputLabel shrink
        className={borderSelectClasses.label}
      >{props.label}</InputLabel>
      <Select
        disableUnderline
        classes={{ root: borderSelectClasses.select, }}
        IconComponent={iconComponent}
        MenuProps={menuProps}
        value={props.value}
        onChange={props.onChange}
      >
        <MenuItem value="none" disabled>{props.placeholder}</MenuItem>
        {props?.options?.length > 0 ? props?.options?.map((itm,index)=>
          { return(
            <MenuItem key={index} value={itm.value}>{itm.label}</MenuItem>
            )
          }
        ):
          <MenuItem value={""}>No options found.</MenuItem>
        }
      </Select>
    </FormControl>
  );
};


export default BorderSelect;
