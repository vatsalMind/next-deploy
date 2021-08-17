import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";
import {Chip, makeStyles} from "@material-ui/core";
import {Label} from "./TextField";


export const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
    borderRadius: 5,
    boxSizing: 'border-box',
    border: 0,
  },
  label:{
    textAlign: 'left'
  },
  input:{
    padding: 4
  }
}));

const MyChip = (props) => {

  return (
    <Chip
      {...props}
    />
  );
};




const TagsEntry = (props) => {
  const classes = useStyles();
  return (
    <>
      <Label className={classes.label}>
        {"Tags"}
      </Label>
      <Autocomplete
        multiple
        freeSolo
        disableClearable
        id="tags-outlined"
        options={props.options}
        // defaultValue={[props.options[0]]}
        value={props.value}
        getOptionSelected={(option, value) => option.value == value.value}
        onChange={(e, val, reason) => {
          if(reason === "create-option"){
            // props.setSelectedValues(props.value.concat({label:newval,value:newval}))
            // // props.setSelectedValues(props.value.concat({label:newval,value:newval}))
          }else{
            props.setSelectedValues(val);
          }
        }}
        getOptionLabel={(option) => option.label}
        renderOption={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            classes={{root:classes.input}}
            InputProps={{...params.InputProps, disableUnderline: true}}
            placeholder=""
            onKeyDown={(e) => {
              if (e.keyCode === 13 && e.target.value) {
                props.setAutoCompleteValue(props.options.concat({label: e.target.value, value: e.target.value}));
              }
            }}
          />
        )}
        renderTags={(tagValue, getTagProps) => {
          return tagValue.map((option, index) => (
            <MyChip {...getTagProps({index})} className={classes.root} label={option.label} />
          ));
        }}
      />
    </>
  );
};

export default TagsEntry;
