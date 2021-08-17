import Typography from "@material-ui/core/Typography"
import { styled } from "@material-ui/core/styles"
import {fontPrimaryColor, primaryColor} from "../../assets/Variables";

// --------------------------------------------------------
// DEFAULT TEXT
// --------------------------------------------------------

export const DefaultText = styled(Typography)({
  fontFamily: "Nunito, montserrat, sans-serif",
  fontDisplay: "swap",
});


// --------------------------------------------------------
// MAIN NAVIGATION TEXT
// --------------------------------------------------------

export const MainNavigationText = styled(DefaultText)({
    fontSize: "16px",
    fontWeight: "400",
    // color: fontPrimaryColor,
    fontKerning: "none",
    '&:hover': {
        background: "none",
        color: primaryColor
    }
});

// --------------------------------------------------------
// FOOTER TEXT
// --------------------------------------------------------

export const FooterText = styled(DefaultText)({
  fontSize: "16px",
  fontWeight: "400",
  color: fontPrimaryColor,
  fontKerning: "none",
  '&:hover': {
      background: "none",
      color: primaryColor
  }
});
