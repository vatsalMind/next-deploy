import React from 'react';
import { styled } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button";
import {backgroundColor, primaryColor} from "../../assets/Variables";
// --------------------------------------------------------
// MAIN NAVIGATION BUTTON
// --------------------------------------------------------

export const MainNavigationButton = styled(Button)({
    marginRight: "20px",
    // backgroundColor: backgroundColor,
    // color: backgroundColor,
    textTransform: "none",
    '&:hover': {
        background: "none",
        // backgroundColor: backgroundColor,
        color: primaryColor
    }
});
