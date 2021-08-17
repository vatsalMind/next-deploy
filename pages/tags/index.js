import React, {useState} from 'react';
import {ContentContainer, ContentInnerContainer} from "../../components/styled/Container";
import {makeStyles} from "@material-ui/core/styles";
import {Paper, Typography} from "@material-ui/core";
import Tags from "../../components/styled/Tags";
import TagsEntry from "../../components/styled/TagsEntry";


const chips = [
  { key: 0, label: 'Angular' },
  { key: 1, label: 'jQuery' },
  { key: 2, label: 'Polymer' },
  { key: 3, label: 'React' },
  { key: 4, label: 'Vue.js' },
]


const useStyles = makeStyles(theme=>({
  p5:{
    padding: 5,
  },
  p10:{
    padding: 10
  }
}))


const Index = () => {
  const classes = useStyles();
  const [autoCompleteValue,setAutoCompleteValue] = useState([
    { value: 'angular', label: 'Angular' },
    { value: 'jQuery', label: 'jQuery' },
    { value: 'Polymer', label: 'Polymer' },
    { value: 'React', label: 'React' },
    { value: 'Vue.js', label: 'Vue.js' },
  ]);
  const [selectedValues,setSelectedValues] = useState([autoCompleteValue[0]])


  const handleClick = (clickedChip) =>{
    console.log(clickedChip)
  }

  return (
    <ContentContainer>
      <ContentInnerContainer>
        <Paper className={classes.p10}>
          <Typography>Tags (view component)</Typography>
          <Tags label={"Skills"} chipData={chips} onClick={handleClick}/>
        </Paper>
        <br/>
        <br/>
        <Paper className={classes.p10}>
          <Typography>Tags Entry</Typography>
          <TagsEntry options={autoCompleteValue} setAutoCompleteValue={setAutoCompleteValue} value={selectedValues} setSelectedValues={setSelectedValues}/>
        </Paper>
      </ContentInnerContainer>
    </ContentContainer>
  );
};

export default Index;

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
