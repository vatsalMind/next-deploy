import {RadioButton} from "../../components/styled/RadioButton";
import {FormControl, FormControlLabel, FormLabel, RadioGroup} from "@material-ui/core";
import {ContentContainer, ContentInnerContainer} from "../../components/styled/Container";

export default function RadioButtons() {
  return (
    <ContentContainer>
      <ContentInnerContainer>

        <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender" style={{flexDirection:"row"}}>
        <FormControlLabel value="female" control={<RadioButton/>} label="Female"/>
        <FormControlLabel value="male" control={<RadioButton/>} label="Male"/>
        </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Sure ?</FormLabel>
        <RadioGroup aria-label="sure" name="sure" style={{flexDirection:"row"}}>
          <FormControlLabel value="yes" control={<RadioButton/>} label="Yes"/>
          <FormControlLabel value="no" control={<RadioButton/>} label="No"/>
        </RadioGroup>
        </FormControl>

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
