import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CancelIcon from '@material-ui/icons/Cancel';


const QontoConnector = makeStyles((theme) => (
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
    // '&.has-error': {
    //   '& $line': {
    //     '&:last-child': {
    //         borderStyle: "solid",
    //         borderColor: theme.palette.warning.main,
    //     }
    //   },
    // },
    '& $line': {
      borderStyle: "dashed",
      borderColor: theme.palette.primary.main,
    },
  },
    rejected:{
      '& $line':{
            borderStyle: "dashed",
            borderColor: '#e50707'
      }
    },
    line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 0,
    borderRadius: 0,
  },
}));

const useQontoStepIconStyles = makeStyles((theme) => ({
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

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const {active, completed} = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <CheckCircleIcon className={classes.completed}/> :
        active ? <RadioButtonUncheckedIcon className={classes.completed}/> :
          <FiberManualRecordIcon className={`${classes.pending} ${classes.fontsize70}`}/>
      }
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};


function RejectedStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const {active, completed} = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <CancelIcon className={`${classes.rejected} ${classes.fontsize56}`}/> :
        <CancelIcon className={`${classes.pending} ${classes.fontsize56}`}/>
      }
    </div>
  );
}

RejectedStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};


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



export default function CustomStepper(props) {
  const classes = useStyles();
  const count = props.count || 10;
  const connectorClasses = QontoConnector({steps:props.step,activeStep:props.activeStep});
  // const [activeStep, setActiveStep] = useState(1);
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
                  active: steps.findIndex(o=>o.label === "Rejected") === props.activeStep ?  connectorClasses.rejected : connectorClasses.active,
                  completed: steps.findIndex(o=>o.label === "Rejected") + 1 === props.activeStep ?  connectorClasses.rejected  : connectorClasses.completed,
                  line: connectorClasses.line,
                  alternativeLabel: connectorClasses.alternativeLabel,
                  root: connectorClasses.root,
                }}
               />}
      >
        {steps.map((item) => {
          if (item.label === 'Rejected') {
            return (
              <Step key={item.label}>
                <StepLabel StepIconComponent={RejectedStepIcon}>{item.label}</StepLabel>
              </Step>
            )
          } else {
            return (
              <Step key={item.label}>
                <StepLabel StepIconComponent={QontoStepIcon}>{item.label}</StepLabel>
              </Step>
            )
          }
        })}
      </Stepper>
      <div>
        {props.activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
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
}
