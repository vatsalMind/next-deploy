import {CheckBox} from "../../components/styled/CheckBox";
import {FormControlLabel} from "@material-ui/core";
import {ContentContainer, ContentInnerContainer} from "../../components/styled/Container";

import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

export default function CheckBoxes() {
  return (
    <ContentContainer>
      <ContentInnerContainer>

        <FormControlLabel value="termsAndConditions" control={<CheckBox/>} label="Terms & conditions"/>
        <FormControlLabel value="TEMP_CHECK" control={<CheckBox/>} label="Temp Check"/>
        <FormControlLabel value="Check" control={<CheckBox/>} label="Check"/>
        <FormControlLabel value="Check" control={<CheckBox indeterminate/>} label="Select all"/>

        {/*ROUND CHECKBOX*/}
        <FormControlLabel value="Check" control={<CheckBox icon={<CircleUnchecked />} checkedIcon={<CircleCheckedFilled />} />} label="Select all"/>

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
