import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid red',
    padding: "0 5px",
  },
  imageListRoot:{
    display:"flex",
    justifyContent: 'center'
  },
  imageList: {
    flexWrap: 'wrap',
    width:100,
    margin: "10px 6px",
    transform: 'translateZ(0)',
  },
  imageListItem:{
    width: 100,
    height: 100,

  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  image:{
    objectFit: "fit",
    width: 100,
    height: 100,
    borderRadius: 14,
  },
  blur:{
    filter: "blur(8px)",
    position:"relative",
  },
  count:{
    position:"relative",
    bottom: "70px",
    fontWeight: "bold",
    color: '#FFFFFF',
    cursor: "pointer"
  },
  paper:{
    padding: "10px 0",
    overflowY: "auto",
    overflowX: "hidden",
    height: "calc(100vh - 472px)",
  },
  label:{
    textAlign: "left",
    paddingBottom: "20px",
    fontSize: 22,
    fontWeight: "bold",
    color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.black
  }
}));

export default function ImageGallery(props) {
  const classes = useStyles();

  const noOfImages = props.noOfImages
  const page = props.page;
  const imageCol = props.imageCol

  return (
    <>
      <Typography className={classes.label}>{props.label}</Typography>
      <Paper classes={{root:classes.paper}}>
        <Grid container justifyContent="flex-start" spacing={4}>
        {props.itemData.filter((f, j) => j+1 <= (noOfImages * page)).map((item,index) => (
          (
            index === props.itemData.filter((f, j) => j < (noOfImages * page)).length - 1 &&
            props.itemData.length !== index + 1
          )  ?
            <Grid key={index} item xs={12 / Math.ceil(imageCol / 3)} sm={12 / Math.ceil(imageCol / 2)} md={12 / Math.ceil(imageCol / 2)} lg={12 / imageCol}>
              <img src={props.itemData[props.itemData.filter((f, j) => j+1 <= (noOfImages * page)).length - 2].img} alt={item.title} className={`${classes.image} ${classes.blur}`}/>
              <Typography className={classes.count} onClick={()=>{props.setPage(page +1 )}}>
                {
                  props.itemData.length - noOfImages * page > 1 ? '+' : ''
                }
                {props.itemData.length - noOfImages * page > 0 ? props.itemData.length - noOfImages * page : '0'}</Typography>
            </Grid>
            :
            index + 1  < noOfImages*page + 1  &&
          <Grid key={index} item xs={12 / Math.ceil(imageCol / 3)} sm={12 / Math.ceil(imageCol / 2)}  md={12 / Math.ceil(imageCol / 2)} lg={12 / imageCol}>
            <img src={item.img} alt={item.title} className={classes.image}/>
          </Grid>
        ))}
      </Grid>
      </Paper>
    </>
  );
}
