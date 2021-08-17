import { Container } from "@material-ui/core";
import {styled, withStyles} from "@material-ui/core/styles";
import {backgroundColor, primaryBoxShadow, secondaryBackgroundColor} from "../../assets/Variables";
import {Theme} from "../theme/theme";

// --------------------------------------------------------
// DEFAULT CONTAINER
// --------------------------------------------------------

export const DefaultContainer = styled(Container)({
    textAlign: "center"
});

// --------------------------------------------------------
// APPLICATION CONTAINER
// --------------------------------------------------------

export const AppContainer = withStyles(theme=>
({
}))(DefaultContainer);

// --------------------------------------------------------
// HEADER CONTAINER
// --------------------------------------------------------

export const HeaderContainer = withStyles(theme=>({
    // backgroundColor: theme.palette.background.paper,
    // ...primaryBoxShadow
}))(DefaultContainer);

// --------------------------------------------------------
// HEADER INNER CONTAINER
// --------------------------------------------------------

export const HeaderInnerContainer = styled(DefaultContainer)({
    padding: "12px 12px 12px 12px",
});

// --------------------------------------------------------
// CONTENT CONTAINER
// --------------------------------------------------------

export const ContentContainer = styled(DefaultContainer)({
    textAlign: "center",
});

// --------------------------------------------------------
// CONTENT INNER CONTAINER
// --------------------------------------------------------

export const ContentInnerContainer = styled(DefaultContainer)({
    textAlign: "center",
    padding: "20px"
});

// --------------------------------------------------------
// FOOTER CONTAINER
// --------------------------------------------------------

export const FooterContainer = styled(DefaultContainer)({
    // backgroundColor: secondaryBackgroundColor,
});

// --------------------------------------------------------
// FOOTER INNER CONTAINER
// --------------------------------------------------------

export const FooterInnerContainer = styled(DefaultContainer)({
    // backgroundColor: secondaryBackgroundColor,
    padding: "20px",
});
