import React from 'react';
import {Slider, Typography, withStyles} from "@material-ui/core";
import ValueLabel from "@material-ui/core/Slider/ValueLabel";
import {makeStyles} from "@material-ui/core/styles";

const AirbnbSlider = withStyles((theme)=>({
  root: {
    color: theme.palette.primary.main,
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    borderRadius: 5,
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
}))(Slider);


const StyledValueLabel = withStyles((theme)=>({
  offset: {
    top: 37,
    left: props => props.index === 0 ? "calc(-50% + -28px)" : "calc(-50% + -32px)"
  },
  circle: {
    background: "transparent",
    width: "100px",
    // transform: props => props.index === 0 ? "rotate(-90deg)" : "rotate(0deg)"
  },
  label: {
    color: theme.palette.type === 'dark' ? theme.palette.grey[400] : theme.text.secondary,
    fontSize: 16,
    // transform: props => props.index === 0 ? "rotate(90deg)" : "rotate(0deg)"
  }
}))(ValueLabel);

const useStyle= makeStyles((theme)=>({
  root:{
    display:"flex",
    justifyContent: "space-between",
    alignItems:"center"
  },
  label:{
    fontWeight:"bold",
    color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.black
  },
  clear:{
    cursor: "pointer",
  },
  padding:{
    padding: "10px 0"
  }
}))

function ThumbComponent(props) {
  return (
    <span {...props}>
    </span>
  );
}


let beforeChange = null;

const RangeSlider = (props) => {
  const classes = useStyle();

  const handleChangeCommitted = () => {
    beforeChange = null;
  };

  const clearRange = () =>{
    props.setValue(props.defaultValue)
  }

  return (
    <div className={classes.padding}>
      <div className={classes.root}>
      <Typography className={classes.label}>{props.label}</Typography>
      <Typography className={classes.clear} onClick={clearRange}>Clear all</Typography>
      </div>
      <AirbnbSlider
        ThumbComponent={ThumbComponent}
        scale={(x) => x * 100}
        valueLabelFormat={(val,index)=>(index === 0 ? `$ ${props.value[0] * 100}` : `$ ${props.value[1] * 100}` )}
        onChange={(event,newValue)=>props.onChange(event,newValue)}
        value={props.value}
        valueLabelDisplay="on"
        ValueLabelComponent={StyledValueLabel}
        onChangeCommitted={handleChangeCommitted}
      />
    </div>
  );
};

export default RangeSlider;
