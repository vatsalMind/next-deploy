import React from 'react';
import {IconButton, InputAdornment, TextField} from "@material-ui/core";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {alpha, makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles(theme=>({
  input:{
    borderRadius: "10px",
    '&:hover': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    }
  },
  focused: {
    boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    borderColor: theme.palette.primary.main,
  }
}))

const SearchBox = (props) => {
  const styleClass = useStyle();
  return (
    <>
     <TextField
       variant={"outlined"}
                InputProps={{
                  classes: {
                    root: styleClass.input,
                    focused: styleClass.focused,
                  },
                  endAdornment: (
                    <InputAdornment position={"end"}>
                        <SearchOutlinedIcon color={"secondary"}/>
                    </InputAdornment>
                  )
                }}
                onChange={props.onChange}
                value={props.value}
                placeholder={props.placeholder}
                fullWidth={props.fullWidth}
     />
    </>
  )
}

export default SearchBox;
