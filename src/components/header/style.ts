import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

export const useStyle = makeStyles(() => {
  const theme = useTheme();
  return {
    appBar: {
      position: "sticky",
      backgroundColor: theme.palette.common.white,
    },
    toolBar: {
      color: theme.palette.common.black,
      margin: 0,
      
    },
    navContainer: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      height: "40px",
    },
    searchBoxContainer: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      padding: ` 0 ${theme.spacing(2)}`,
    },
    searchBox: {
      width: "100%",
      zIndex: 100,
    },
    searchBar: {
      "MuiTextField-root": {
        width: "100%",
      },
    },
    navLinkContainer: {
      display: "flex",
      padding: "0 1rem",
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
      textAlign:'center'
    },
    navLink: {
      textDecoration: "none",
      paddingRight: "1rem",
      color: "#767676",
    },
    navButtonLink: {
      textDecoration: "none",
      color: "#767676",
    },
    navText: {
      fontSize: "1rem",
      "&:hover": {
        color: theme.palette.common.black,
      },
      width:'max-content'
    },
    navLinkButton: {
      padding: "0 1rem",
      borderRadius: "2rem",
      display: "flex",
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
    },
    navButton: {
      fontSize: "1rem",
      padding: theme.spacing(1),
      border: ".8px solid rgba(118,118,118,.6)",
      width: "max-content",
      borderRadius: theme.spacing(0.5),
      "&:hover": {
        color: theme.palette.common.black,
        border: ".8px solid rgba(118,118,118,1)",
      },
    },
    menuIconContainer: {},
    menuIcon: {
      color: "#767676",
      "&:hover": {
        color: theme.palette.common.black,
      },
    },
    unsplashPremium: {
      fontSize: "1rem",
      background: " linear-gradient(to right, #5B8FFF, #0BD7FF)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      "&:hover": {
        background: "black",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
    borderBreak:{
        borderLeft: '2px solid rgba(118,118,118,.6)',
        marginLeft:theme.spacing(-1),
    },
    forwardSlash:{
        marginRight:theme.spacing(1.5),
        color:'rgba(118,118,118,.6)'
    }
  };
});
