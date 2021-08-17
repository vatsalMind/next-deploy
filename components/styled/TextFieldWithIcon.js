import React from 'react';
import {FormControl, Input, InputAdornment, makeStyles} from "@material-ui/core";
import {Label} from "./TextField";
import {alpha, withStyles} from "@material-ui/core/styles";

export const TextInput = withStyles((theme) => ({
  root: {
    margin: '5px 2px',
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor:'#FAFAFB',
    // width: 'auto',
    padding: '10px 12px 10px 30px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  }
}))(Input)


const useStyles = makeStyles((theme) => ({
  adornment:{
    position: "relative",
    marginRight: "-30px",
    marginLeft: "10px",
    color: theme.palette.type === 'dark' ? theme.palette.grey[600] : theme.palette.secondary.main,
    zIndex: 1
  }
}));


const TextFieldWithIcon = (props) => {
  const classes = useStyles();
  return (
    <FormControl fullWidth={props.fullWidth}>
      {props.label &&
      <Label shrink htmlFor={props.id}>
        {props.label}
      </Label>
      }
      <TextInput disableUnderline
                 onChange={props.onChange}
                 type={props.type}
                 value={props.value}
                 placeholder={props.placeholder}
                 startAdornment={
                   <InputAdornment position="start" className={classes.adornment}>
                     {props.icon}
                   </InputAdornment>
                 }
      />
    </FormControl>
  );
};

export default TextFieldWithIcon;
