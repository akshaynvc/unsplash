import { Box } from "@mui/system";
import React, { Fragment, memo } from "react";
import { useStyle } from "./style";
import { Typography } from "@mui/material";
import SearchBar from "../searchbar";

type HeroBannerProps = {
  getQuery: Function;
};
const HeroBanner = memo(({ getQuery }: HeroBannerProps) => {
  const classes = useStyle();
  return (
    <Fragment>
      <Box className={classes.bannerContainer}>
        <Box className={classes.searchbarContainer}>
          <Box className={classes.logotextContainer}>
            <Typography className={classes.logotext}>UnSplash</Typography>
          </Box>
          <Box>
            <Typography className={classes.typoSubHeading}>
              The internet’s source for visuals.
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.typoSubHeading}>
              Powered by creators everywhere.
            </Typography>
          </Box>
          <Box className={classes.searchBox}>
            <SearchBar getQuery={getQuery} />
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
});

export default HeroBanner;
