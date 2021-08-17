import React, {useState} from 'react';
import {ContentContainer, ContentInnerContainer} from "../../components/styled/Container";
import {makeStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import RangeSlider from "../../components/styled/RangeSlider";

const useStyle = makeStyles({
  p10: {
    padding:10,
  }
})


const Index = () => {
  const classes = useStyle();
  const [value,setValue] = useState([10,20]);

  const rangeHandler = (event, newValue) =>{
    setValue(newValue);
  }

  return (
    <ContentContainer>
      <ContentInnerContainer>

        <Paper className={classes.p10}>
          <RangeSlider defaultValue={[10,20]} value={value} label={"Salary range"} onChange={rangeHandler} setValue={setValue}/>
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
