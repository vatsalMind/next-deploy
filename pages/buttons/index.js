import React, {useState} from "react";
import {ContentContainer, ContentInnerContainer} from "../../components/styled/Container";
import CustomButton from "../../components/styled/CustomButton";
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import CustomIconButton from "../../components/styled/IconButton";
import Favorite from "../../components/styled/Favorite";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import SocialIcon from "../../components/styled/SocialIcon";
import Widget from "../../components/styled/Widget";
import {Grid, IconButton, Paper, Typography} from "@material-ui/core";
import Notification from "../../components/styled/Notification";
import RolloverButton from "../../components/styled/RolloverButton";
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import {makeStyles} from "@material-ui/core/styles";


const socialIcons = [
  {icon:"/static/images/icons/google.png", name:"Google"},
  {icon:"/static/images/icons/linkedIn.png", name:"LinkedIn"},
  {icon:"/static/images/icons/instagram.png", name:"Instagram"},
]

const useStyles = makeStyles(theme=>({
  marginY:{
    margin: "10px 0",
  },
  p5:{
    padding: 5,
  },
  delete:{
    color: theme.palette.error.main,
    background: theme.palette.error.light,
  },
  edit:{
    color:theme.palette.primary.main,
    background: theme.palette.primary.light
  }
}))

export default function Button() {
  const classes =  useStyles();
  const [favActive,setFavActive] = useState(false);

  const socialHandler = (itm) => {
    console.log("itm",itm)
  }

  return (
    <ContentContainer>
      <ContentInnerContainer>

        <Paper className={classes.p5}>
          <Typography>Styled Buttons</Typography>
          <Grid container justifyContent="space-evenly" alignItems="center">
        {/*SOLID BUTTON */}
        <CustomButton label={"custom"} variant={"contained"} color={"primary"} disableRipple/>

        <CustomButton label={"custom"} variant={"contained"} color={"primary"}  startIcon={<AddOutlinedIcon />} disableRipple/>
        {/*SOLID DISABLED BUTTON*/}
        <CustomButton label={"custom"} variant={"contained"} color={"primary"} disabled disableRipple/>
        {/*OUTLINED DISABLED BUTTON*/}
        <CustomButton label={"custom"} variant={"outlined"} color={"primary"} disabled disableRipple/>
        {/*OUTLINED BUTTON*/}
        <CustomButton label={"custom"} variant={"outlined"} color={"primary"} disableRipple/>

        <CustomButton label={"custom"} variant={"outlined"} className={"btn-green btn-flat"} disableRipple/>

        {/*ICON BUTTON*/}
        <CustomIconButton icon={<TextsmsOutlinedIcon/>} onClick={()=>console.log("button clicked")}/>
        <CustomIconButton icon={<VisibilityIcon /> } onClick={()=>console.log("button clicked")}/>

        {/* FAVORITE */}
        <Favorite  icon={<BookmarkBorderIcon />} activeIcon={<BookmarkIcon/>} active={favActive} onClick={()=>setFavActive(!favActive)}/>
          </Grid>
        </Paper>
        <br/>
        <br/>

        <Paper className={classes.p5}>
          <Typography>Social Icon Buttons </Typography>
          <SocialIcon socialIcons={socialIcons} onClick={socialHandler}/>
        </Paper>
        <br/>
        <br/>

        <Paper className={classes.p5}>
          <Typography>Widget</Typography>
          <br/>
          <Grid container justifyContent="space-around" alignItems="center" >
            <Widget backgroundColor={'#1F86EF30'} fontColor={'#1F86EF'} label={"Total Jobs for you"} count={"350"} icon={"/static/images/icons/officeBag.png"}/>
            <Widget backgroundColor={'#FBBC0530'} fontColor={'#FBBC05'} label={"New Application"} count={"15"} icon={"/static/images/icons/task.png"}/>
            <Widget backgroundColor={'#04D20030'} fontColor={'#04D200'} label={"Active Jobs"} count={"35"} icon={"/static/images/icons/clock.png"}/>
            <Widget backgroundColor={'#FF965B30'} fontColor={'#FF965B'} label={"Profile View"} count={"240"} icon={"/static/images/icons/eye.png"}/>
            <Widget backgroundColor={'#8772FF30'} fontColor={'#8772FF'} label={"Approved Jobs"} count={"40"} icon={"/static/images/icons/circleTick.png"}/>
          </Grid>
        </Paper>
        <br/>
        <br/>
        <Paper className={classes.p5}>
          <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Typography>Notification icon with Badge</Typography>
            <Notification invisible={false}/>
          </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Typography>Notification icon without Badge</Typography>
              <Notification invisible={true}/>
            </Grid>
          </Grid>
        </Paper>

        <br/>
        <br/>
        <Paper className={classes.p5}>
          <Typography>Rollover Button</Typography>
          <Grid item xs={12} sm={12} md={5} lg={4} style={{margin:"auto"}}>
            <RolloverButton icon={'/static/images/icons/profile.png'} title={"Candidate"} subtitle={"I want to discover awesome companies."}/>
          </Grid>
          <div className={classes.marginY} />
          <Grid item xs={12} sm={12} md={5} lg={4} style={{margin:"auto"}}>
            <RolloverButton icon={'/static/images/icons/work.png'} title={"Employer"} subtitle={"I want to attract the best talents."}/>
          </Grid>
        </Paper>
        <br/>
        <br/>

        <Paper className={classes.p5}>
          <Typography>edit/delete button</Typography>
        <IconButton aria-label="delete" className={classes.delete} >
          <DeleteOutlined />
        </IconButton>

        <IconButton aria-label="edit" className={classes.edit} >
          <EditOutlinedIcon />
        </IconButton>
        </Paper>


      </ContentInnerContainer>
    </ContentContainer>
  )
}

export async function getServerSideProps() {
  let result = await fetch('https://test-next-deploy-seven.vercel.app/api/HeaderData')
  const data = await result.json();
  let {info,components,modules}=data;

  return {
    props:{
      info,components,modules
    }
  }
}
