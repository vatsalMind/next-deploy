import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Avatar, IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyle = makeStyles(theme=>({
  '@global':{
    "@keyframes pulse": {
      "0%": {
        transform: "scale(.75)",
      },
      "20%" :{
        transform: "scale(1.1)",
      },
      "40%": {
        transform: "scale(.75)",
      },
      "60%":{
        transform: "scale(1.05)",
      },
      "80%":{
        transform: "scale(.75)",
      },
      "100%":{
        transform: "scale(1.0)",
      }
    }
  },
  root:{
    height: "calc(100vh - 100px)",
    display:"flex",
    justifyContent:"center"
  },
  main:{
    transition: "all .2s ease-in-out !default",
    transform: "scale(1.0)",
    animation: "pulse 1s",
  },
  iconButton:{
    position:"absolute",
    transform: 'translate(-50%, -50%)',
  },
  Marker:{
    fontSize: 110,
  },
  large:{
    position: "relative",
    right: 80,
    top: -11,
    border: "5px solid white",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  }
}));


const Marker = (props) => {
  return (
    <div className={props.mainClass}>
      <IconButton className={props.iconButton} disableRipple>
        <LocationOnIcon className={props.className}/>
        <Avatar alt="Remy Sharp" src={props.markerImage} className={props.avatarClassName} />
      </IconButton>
    </div>
  );
};

const Location = (props) => {
  const classes = useStyle();

  return (
      <div className={classes.root}>
      <GoogleMapReact  bootstrapURLKeys={{key: 'AIzaSyDQ990pxn3gGXGueF7W2Q8_pAppayALAgc', language: 'en'}} defaultCenter={props.center} defaultZoom={props.zoom}  >
        <Marker id="markerPop" lat={props.center.lat} lng={props.center.lng} className={classes.Marker} mainClass={classes.main} iconButton={classes.iconButton} avatarClassName={classes.large} markerImage={props.markerImage} />
      </GoogleMapReact>
      </div>
  );
};

export default Location;
