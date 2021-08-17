import React, {useState} from 'react';
import {ContentContainer, ContentInnerContainer} from "../../components/styled/Container";
import PasswordField from "../../components/styled/PasswordField";


const Index = () => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value});
  };

  const handleClickShowPassword = () => {
    setValues({...values, showPassword: !values.showPassword});
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ContentContainer>
      <ContentInnerContainer>
        <PasswordField
          label={"Password"}
          placeholder={"Enter password"}
          onChange={handleChange('password')}
          handleClickShowPassword={handleClickShowPassword}
          handleMouseDownPassword={handleMouseDownPassword}
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          showPassword={values.showPassword}
          fullWidth
        />
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
