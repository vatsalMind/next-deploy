import React from 'react';
import {FormControl, Input, InputAdornment, InputLabel, makeStyles, styled} from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {alpha, withStyles} from "@material-ui/core/styles";
import CustomIconButton from "./IconButton";


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
    margin: '0px 2px',
    padding: '10px 45px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  }
}))(Input)

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
    display: 'flex',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  color:{
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.main
  },
  adornment:{
    position: "relative",
    margin: "-50px"
  }
}));

const PasswordField = (props) => {
  const classes = useStyles();
  return (
    <FormControl fullWidth={props.fullWidth} >
      <Label shrink htmlFor={props.id}>
        {props.label}
      </Label>
      <TextInput disableUnderline
                 onChange={props.onChange}
                 type={props.type}
                 value={props.value}
                 placeholder={props.placeholder}
                 endAdornment={
                   <InputAdornment position="start" className={classes.adornment}>
                     <CustomIconButton disableRipple icon={
                       props.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon /> } onClick={props.handleClickShowPassword} />
                   </InputAdornment>
                 }
      />
    </FormControl>
  );
};

export default PasswordField;



