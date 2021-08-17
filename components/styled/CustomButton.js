import React from "react";
import Button from "@material-ui/core/Button";
import {styled} from "@material-ui/core";
import {primaryColor} from "../../assets/Variables";

const CommonButton = styled(Button)({
  padding: "10px 25px",
  margin: "2px 2px",
  borderRadius: 7,
  boxShadow: "0px 10px 20px -8px rgba(44, 152, 240, 0.5)",
  '&:disabled': {
    backgroundColor:"rgba(31, 132, 235, 0.05)",
    color: primaryColor
  },
  '&.btn-green':{
    backgroundColor: '#1EBB1B',
    color: '#FFFFFF',
    // '&:hover':{
    //   boxShadow: "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
    // }
  },
  '&.btn-flat':{
    border: "none",
  }
})


const CustomButton = (props) => {
  return (
    <CommonButton {...props}>
      {props.label}
    </CommonButton>
  );
};

export default CustomButton;
