import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import React, { FC, memo, useCallback, useState } from "react";
import { useStyle } from "./style";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar";
import { Menu } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import clsx from "clsx";
import useFetch from "../../utils/hooks/useFetch";

const Header: FC = memo(() => {
  const classes = useStyle();
  const [seachQuery, setSearchQuery] = useState<string>('')
 useFetch(seachQuery)

  const getQuery =useCallback((query:string)=>{
    setSearchQuery(query)
  },[seachQuery]);
  
  return (
    <AppBar elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Box component={"nav"} className={classes.navContainer}>
          <Box>
            <Link to={"/"} className={classes.logoContainer}>
              <Box
                component={"img"}
                className={classes.logo}
                src="https://cdn-icons-png.flaticon.com/512/5968/5968743.png"
                alt="logo"
              />
            </Link>
          </Box>
          <Box className={classes.searchBoxContainer}>
            <Box className={classes.searchBox}>
              <SearchBar getQuery={getQuery} />
            </Box>
            <Box className={classes.navLinkContainer}>
              <Link to={"/explore"} className={classes.navLink}>
                <Typography className={classes.navText}>Explore</Typography>
              </Link>
              <Link to={"/explore"} className={classes.navLink}>
                <Typography className={classes.navText}>Advertise</Typography>
              </Link>
              <Link to={"/explore"} className={classes.navLink}>
                <Typography className={classes.unsplashPremium}>
                  Unsplash+
                </Typography>
              </Link>
            </Box>
            <Box
              className={clsx(classes.navLinkContainer, classes.borderBreak)}
            >
              <Link to={"/explore"} className={classes.navLink}>
                <Typography className={classes.navText}>Log in</Typography>
              </Link>
              <Typography
                className={clsx(classes.navText, classes.forwardSlash)}
              >
                /
              </Typography>
              <Link to={"/explore"} className={classes.navLink}>
                <Typography className={classes.navText}>Sign up</Typography>
              </Link>
            </Box>
            <Box className={classes.navLinkButton}>
              <Link to={"/explore"} className={classes.navButtonLink}>
                <Typography className={classes.navButton}>
                  Submit a photo
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box className={classes.menuIconContainer}>
            <IconButton disableRipple className={classes.menuIcon}>
              <Menu />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
