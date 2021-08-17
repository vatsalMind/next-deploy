import React from 'react';
import {alpha, withStyles} from "@material-ui/core/styles";

import {FormControl, Input, InputLabel, styled} from "@material-ui/core";

export const Label = styled(InputLabel)({
  fontSize:22
})

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
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(Input)

const CustomTextField = (props) => {
  return (
    <FormControl fullWidth={props.fullWidth}>
      <Label shrink htmlFor={props.id}>
        {props.label}
      </Label>
      <TextInput {...props} disableUnderline/>
    </FormControl>
  );
};

export default CustomTextField;
