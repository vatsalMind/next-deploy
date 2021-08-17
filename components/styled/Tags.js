import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import {Label} from "./TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
    borderRadius: 5
  },
  label:{
    textAlign: 'left'
  }
}));

export default function Tags(props) {
  const classes = useStyles();

  return (
    <div>
      <Label className={classes.label}>
        {props.label}
      </Label>
    <div className={classes.root}>
      {props.chipData.map((data) => {
        return (
          <li key={data.key}>
            <Chip
              label={data.label}
              onClick={()=>props.onClick(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </div>
    </div>
  );
}
