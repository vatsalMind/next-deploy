import {Radio, withStyles} from "@material-ui/core";

export const RadioButton = withStyles((theme)=>({
  root: {
    color: theme.palette.type === 'dark' ? theme.palette.grey[600] : theme.palette.background.default
  },
  checked: {
    color:theme.palette.primary.main,
  },
}))((props) => <Radio color="default" {...props} />);
