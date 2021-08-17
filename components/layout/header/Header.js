import Link from "next/link";
import {Grid, makeStyles} from "@material-ui/core";
import { MainNavigationButton} from "../../styled/Button";
import { HeaderInnerContainer } from "../../styled/Container";
import { MainNavigationText } from "../../styled/Typography";
import {useState} from "react";
import { MainNavigationMenu, MainNavigationMenuItem } from "../../styled/Menu";
import { DownArrowIcon } from "../../styled/Icon";
import {primaryColor} from "../../../assets/Variables";
import {ToggleSwitch} from "../../styled/ToggleSwitch";


// --------------------------------------------------------
// RENDER HEADER
// --------------------------------------------------------

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.background.paper : theme.palette.background.paper
    }
}))

export default function Header({ components, modules, toggleDarkMode, isDark }) {

    // --------------------------------------------------------
    // PROPERTIES
    // --------------------------------------------------------
    const classes = useStyles();
    const [componentLinks] = useState(components);
    const [moduleLinks] = useState(modules);
    const [showComponentMenu, setShowComponentMenu] = useState(null);
    const [showModuleMenu, setShowModuleMenu] = useState(null);
    
    // --------------------------------------------------------
    // OPEN / CLOSE MENU
    // --------------------------------------------------------

    const handleClick = (event) => {
        if (event.currentTarget.name === "componentDropDownButton"){
            setShowComponentMenu(event.currentTarget);
        }
        else if (event.currentTarget.name === "moduleDropDownButton"){
            setShowModuleMenu(event.currentTarget);
        }
    };
    const handleClose = () => {
        setShowComponentMenu(null);
        setShowModuleMenu(null);
    };


    // --------------------------------------------------------
    // HEADER UI
    // --------------------------------------------------------

    return (

        <HeaderInnerContainer className={classes.root}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Link href="/">
                        <a href="/"><img src={"/bluskill-logo.png"} width={"171"} height={"60"} alt={"T-Shirt Reviews Logo"} /></a>
                    </Link>
                </Grid>
                <Grid item>
                    <nav>
                        {/* HOME PAGE */}
                        <MainNavigationButton  disableRipple>
                            <Link href={"/"}>
                                <MainNavigationText>Home</MainNavigationText>
                            </Link>
                        </MainNavigationButton>

                        {/* GITHUB */}
                        <MainNavigationButton disableRipple>
                            <Link href={"https://github.com/bluskill-llc/bluskill-components"}>
                                <MainNavigationText>GitHub</MainNavigationText>
                            </Link>
                        </MainNavigationButton>

                        {/* FIGMA */}
                        <MainNavigationButton disableRipple>
                            <Link href={"https://www.figma.com/file/H0OLOs3aetqTe5eVCM64Ih/BluSkill-MVP?node-id=0%3A1"}>
                                <MainNavigationText>Figma</MainNavigationText>
                            </Link>
                        </MainNavigationButton>

                        {/* COMPONENTS DROPDOWN */}
                        <MainNavigationButton name="componentDropDownButton" disableRipple aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} endIcon={<DownArrowIcon/>}>
                            <MainNavigationText>Components</MainNavigationText>
                        </MainNavigationButton>
                        <MainNavigationMenu name="componentDropDown" anchorEl={showComponentMenu} keepMounted open={Boolean(showComponentMenu)} onClose={handleClose} PaperProps={{ style: {borderTop: `5px solid ${primaryColor}`}}}>
                            {componentLinks?.map((componentLink, index) => (
                                <MainNavigationMenuItem key={index} onClick={handleClose}>
                                    <Link href={`${componentLink.url}`}>
                                        <MainNavigationText>{componentLink.title}</MainNavigationText>
                                    </Link>
                                </MainNavigationMenuItem>
                            ))}
                        </MainNavigationMenu>

                        {/* MODULES DROPDOWN */}
                        <MainNavigationButton name="moduleDropDownButton" disableRipple aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} endIcon={<DownArrowIcon/>}>
                            <MainNavigationText>Modules</MainNavigationText>
                        </MainNavigationButton>
                        <MainNavigationMenu name="moduleDropDown" anchorEl={showModuleMenu} keepMounted open={Boolean(showModuleMenu)} onClose={handleClose} PaperProps={{ style: {borderTop: `5px solid ${primaryColor}`}}}>
                            {moduleLinks?.map((moduleLink, index) => (
                                <MainNavigationMenuItem key={index} onClick={handleClose}>
                                    <Link href={`${moduleLink.url}`}>
                                        <MainNavigationText>{moduleLink.title}</MainNavigationText>
                                    </Link>
                                </MainNavigationMenuItem>
                            ))}
                        </MainNavigationMenu>

                        <ToggleSwitch name="toggleTheme" color="primary" checked={isDark} onChange={toggleDarkMode} />

                    </nav>
                </Grid>
            </Grid>
        </HeaderInnerContainer>
    )
}

