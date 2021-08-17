import { Grid } from "@material-ui/core";
import { useState } from "react";
import { FooterInnerContainer } from "../../styled/Container";
import { FooterText } from "../../styled/Typography";


// --------------------------------------------------------
// RENDER FOOTER
// --------------------------------------------------------

export default function Footer({ info }) {

    // --------------------------------------------------------
    // PROPERTIES
    // --------------------------------------------------------

    const [footerInfo] = useState(info);


    // --------------------------------------------------------
    // FOOTER UI
    // --------------------------------------------------------

    return (
        <FooterInnerContainer>
            <Grid container direction="row" justifyContent="center" alignContent="center">
                <Grid item>
                    {/* <FooterText>{footerInfo.copyright}</FooterText> */}
                </Grid>
            </Grid>
        </FooterInnerContainer>
    )
}