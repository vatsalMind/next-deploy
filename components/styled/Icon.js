import { styled } from "@material-ui/core/styles"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {fontPrimaryColor} from "../../assets/Variables";

// --------------------------------------------------------
// DOWN ARROW ICON
// --------------------------------------------------------

export const DownArrowIcon = styled(ExpandMoreIcon)({
    color: fontPrimaryColor,
    fontWeight: 400,
    margin: "-8px",
});
