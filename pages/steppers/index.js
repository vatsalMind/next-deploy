import React, {useState} from 'react';
import {ContentContainer, ContentInnerContainer} from "../../components/styled/Container";
import {Paper, Typography} from "@material-ui/core";
import CustomStepper from "../../components/styled/Stepper";
import {makeStyles} from "@material-ui/core/styles";
import WorkFlow from "../../components/styled/WorkFlow";

//without Rejected
const step = [
  {label: "Applied"},
  {label: "Shortlisted"},
  {label: "Discussion"},
  {label: "Rejected"}
]

const step1 = [
  {label: "Applied"},
  {label: "Shortlisted"},
  {label: "Discussion"},
  {label: "Selected"}
]
//Rejected
const step2 = [
  {label: "Accepted", complete: true},
  {label: "Rejected", complete: false}
]

const workFlowStep = [
  {label: "Personal Details"},
  {label: "Education Details"},
  {label: "Work Experience"}
]


const useStyle = makeStyles({
  p5: {
    padding: 5,
  }
})

const Index = () => {
  const classes = useStyle();
  const [activeStep, setActiveStep] = useState(1);
  const [activeStep1, setActiveStep1] = useState(1);
  const [workActiveStep, setWorkActiveStep] = useState(1);

  return (
    <ContentContainer>
      <ContentInnerContainer>
        <Paper className={classes.p5}>
          <Typography>Status with Rejected</Typography>
          <CustomStepper count={3} step={step} activeStep={activeStep} setActiveStep={setActiveStep}/>
        </Paper>
        <br/>
        <br/>
        <Paper className={classes.p5}>
          <Typography>Status without Rejected</Typography>
          <CustomStepper step={step1} activeStep={activeStep} setActiveStep={setActiveStep}/>
        </Paper>
        <br/>
        <br/>

        <Paper className={classes.p5}>
          <Typography>Status with Rejected (only 2 step)</Typography>
          <CustomStepper step={step2} activeStep={activeStep1} setActiveStep={setActiveStep1}/>
        </Paper>
        <br/>
        <br/>

        <Paper className={classes.p5}>
          <Typography>Workflow status</Typography>
          <WorkFlow step={workFlowStep} activeStep={workActiveStep} setActiveStep={setWorkActiveStep}/>
        </Paper>

      </ContentInnerContainer>
    </ContentContainer>
  );
};

export default Index;

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
