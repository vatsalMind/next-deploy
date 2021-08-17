import React from 'react';
import {ContentContainer, ContentInnerContainer} from "../components/styled/Container";
import {Button, Link, Typography} from "@material-ui/core";


const Custom404 = () => {
  return (
    <ContentContainer>
      <ContentInnerContainer>
        <Typography> Opps!, Page not found... !!!</Typography>
        <Button variant="contained">
          <Link href={"/"}>Back to home</Link>
        </Button>
      </ContentInnerContainer>
    </ContentContainer>
  );
};

export default Custom404;
