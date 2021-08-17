import React from 'react';
import Location from "../../components/styled/Location";
import {ContentContainer, ContentInnerContainer} from "../../components/styled/Container";

const Index = () => {

  const center = {
    lat: 43.038902,
    lng: -87.906471
  };
  const zoom = 15;
  return (
    <ContentContainer>
      <ContentInnerContainer>
      <Location center={center} zoom={zoom} markerImage={'https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?resize=200%2C140&ssl=1'} />
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
