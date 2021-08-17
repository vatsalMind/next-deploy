import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';


const Connector = makeStyles((theme) => (
  {
    alternativeLabel: {
      top: 10,
      left: 'calc(-50% + 27px)',
      right: 'calc(50% + 27px)',
      '& $line': {
        borderStyle: "dashed",
        borderColor: '#E5E5E5',
      },
    },
    active: {
      '& $line': {
        borderStyle: "dashed",
        borderColor: theme.palette.primary.main,
      }
    },
    completed: {
      '& $line': {
        borderStyle: "dashed",
        borderColor: theme.palette.primary.main,
      },
    },
    line: {
      borderColor: '#eaeaf0',
      borderTopWidth: 0,
      borderRadius: 0,
    },
  }));

const StepIconStyles = makeStyles((theme) => ({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: theme.palette.primary.main,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
  },
  completed: {
    color: theme.palette.primary.main,
    zIndex: 1,
    fontSize: 56,
  },
  fontsize56: {
    fontSize: 56
  },
  fontsize70: {
    fontSize: 70,
  },
  pending: {
    color: '#E5E5E5'
  },
  rejected: {
    color: theme.palette.error.main,
  }
}));

function StepIcon(props) {
  const classes = StepIconStyles();
  const {active, completed} = props;

  return (
    <div
      className={classes.root}
    >
      {completed ? <CheckCircleIcon className={classes.completed}/> :
        active ? <CheckCircleOutlinedIcon className={classes.completed}/> :
          <CheckCircleIcon className={`${classes.pending} ${classes.fontsize56}`}/>
      }
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


const WorkFlow = (props) => {

  const classes = useStyles();

  const connectorClasses = Connector(StepIcon);
  const steps = props.step;


  const handleNext = () => {
    props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    props.setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    props.setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={props.activeStep}
               connector={<StepConnector
                 classes={{
                   active:  connectorClasses.active,
                   completed: connectorClasses.completed,
                   line: connectorClasses.line,
                   alternativeLabel: connectorClasses.alternativeLabel,
                 }}
               />}
      >
        {steps.map((item,index) => {
            return (
              <Step key={item.label}>
                <StepLabel StepIconComponent={StepIcon}>
                  <Typography>
                    {`step${index+1}`}
                  </Typography>
                  {item.label}
                </StepLabel>
              </Step>
            )
        })}
      </Stepper>
      <div>
        {props.activeStep === steps.length ? (
          <div>
            {/*<Typography className={classes.instructions}>*/}
            {/*  All steps completed - you&apos;re finished*/}
            {/*</Typography>*/}
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <div>
              <Button disabled={props.activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {props.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkFlow;
