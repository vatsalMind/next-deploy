import React, {useState} from "react";
import {ContentContainer, ContentInnerContainer} from "../../components/styled/Container";
import CustomTextField from "../../components/styled/TextField";
import {ToggleSwitch} from "../../components/styled/ToggleSwitch";
import {FormControlLabel, Paper, Typography} from "@material-ui/core";
import BorderSelect from "../../components/styled/BorderSelect";
import MetaData from "../../components/styled/MetaData";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import TextFieldWithIcon from "../../components/styled/TextFieldWithIcon";
import SearchBox from "../../components/styled/SearchBox";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme=>({
  p5:{
    padding: 5,
  },
  p10:{
    padding: 10
  }
}))

export default function TextFields() {
  const classes = useStyles();

  const [values, setValues] = useState({
    search: '',
  });

  const options = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Others', value: 'others'}
  ]

  const [dropValue,setDropValue] = useState('none')

  const dropHandleChange = (event) => {
    setDropValue(event.target.value)
  };

  const handleChange = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value});
  };



  return (
    <ContentContainer>
      <ContentInnerContainer>
        <Paper className={classes.p10}>
          <Typography>Input fields</Typography>
          {/*TEXT INPUT FIELD FULLWIDTH*/}
          <CustomTextField label={"Name"} id={'userName'} type="text" placeholder={"Enter Name"} fullWidth/>
          {/*TEXT INPUT FIELD*/}
          <CustomTextField label={"Email"} id={'email'} type="email" placeholder={"Enter Email"} />
          {/*NUMBER INPUT FIELD*/}
          <CustomTextField label={"Number"} id={'Number'} type="number" placeholder={"Enter Number"}/>
        </Paper>
        <br/>
        <br/>

        <Paper className={classes.p10}>
          <Typography>Input fields with Icon (Left side)</Typography>
                 <TextFieldWithIcon id={'search'} type="text" placeholder={"Search job or keyword"} onChange={handleChange('search')} icon={<SearchOutlinedIcon />} />
        </Paper>
        <br/>
        <br/>

        <Paper className={classes.p10}>
          <Typography> Select menu</Typography>
          <BorderSelect options={options} value={dropValue} label={"Gender"} onChange={dropHandleChange}
                        placeholder={"Select gender"}
          />
        </Paper>
        <br/>
        <br/>

        <Paper className={classes.p10}>
          <Typography>Switches</Typography>
          <ToggleSwitch name="toggleTheme" color="primary"/>

          <FormControlLabel
            control={<ToggleSwitch name="checkedB"/>}
            label="Active:"
            labelPlacement="start"
          />
        </Paper>
        <br/>
        <br/>

        <Paper className={classes.p10}>
          <Typography>Meta data</Typography>
        <MetaData icon={<LocationOnOutlinedIcon/>} label={"Sand Hill Road, USA"}/>
        <MetaData icon={<DateRangeOutlinedIcon/>} label={"Jun 2008 - April 2011"}/>
        </Paper>
        <br/>
        <br/>

        <Paper className={classes.p10}>
          <Typography>Search box (header component)</Typography>
          <SearchBox onChange={handleChange('search')} value={values.search} placeholder={"Search"}/>
        </Paper>

      </ContentInnerContainer>
    </ContentContainer>
  )
}

export async function getServerSideProps() {
  let result = await fetch('http://localhost:3000/api/HeaderData')
  const data = await result.json();
  let {info,components,modules}=data;

  return {
    props:{
      info,components,modules
    }
  }
}
