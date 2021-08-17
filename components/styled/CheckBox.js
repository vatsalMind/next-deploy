import {Checkbox, withStyles} from "@material-ui/core";

export const CheckBox =  withStyles((theme)=>({
  root: {
    color: theme.palette.type === 'dark' ? theme.palette.grey[600] : theme.palette.background.default
  },
  checked: {
    color: theme.palette.primary.main
  },
}))((props) => <Checkbox color="default"  {...props} />);

