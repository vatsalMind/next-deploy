import {Switch, withStyles} from "@material-ui/core";

export const ToggleSwitch = withStyles((theme) => ({
  root: {
    width: 40,
    height: 22,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.type === 'dark' ? theme.palette.grey[400] : theme.palette.common.white,
      '& + $track': {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: theme.palette.primary.main,
      // border: '2px solid #fff',
    },
  },
  thumb: {
    width: 20,
    height: 20,
  },
  track: {
    borderRadius: 30 / 2,
    // border: `2px solid ${theme.palette.grey[300]}`,
    backgroundColor: theme.palette.background.default,
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});
