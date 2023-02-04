import React, { FC, Fragment, useCallback, useState } from "react";
import HeroBanner from "../../components/herobanner";
import { Grid, Box, Typography, IconButton } from "@mui/material";
import { useStyle } from "./style";
import useFetch from "../../utils/hooks/useFetch";
import { splashDataType } from "../../redux/model";
import Loader from "../../components/loader/loader";
import { Download, Add, Favorite } from "@mui/icons-material";
import { saveAs } from "file-saver";

const HomePage: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const classes = useStyle();

  const getQuery = (query: string) => {
    setSearchQuery(query);
  };

  const { isLoading, splashData } = useFetch(searchQuery);

  const downloadImage = useCallback((img: string, name: string) => {
    saveAs(img, `image_by_${name}`);
  }, []);
  return (
    <Fragment>
      <HeroBanner getQuery={getQuery} />
      {isLoading ? (
        <Box className={classes.imagesContainer}>
          <Grid container spacing={2} className={classes.gridContainer}>
            {splashData?.map((e: splashDataType) => (
              <Grid
                item
                lg={4}
                md={6}
                sm={12}
                className={classes.gridItem}
                key={e.id}
              >
                <Box className={classes.hoverItems}>
                  <Box className={classes.saveIconContainer}>
                    <IconButton
                      disableRipple
                      className={classes.saveIcon}
                    >
                      <Favorite className={classes.downloadIcon} />
                    </IconButton>
                    <Box className={classes.saveIcon}>
                      <Add className={classes.downloadIcon} />
                    </Box>
                  </Box>
                  <Box className={classes.profileContainer}>
                    <Box className={classes.profile}>
                      <Box
                        component={"img"}
                        src={e.user.profile_image.small}
                        alt="profilePhoto"
                        className={classes.profilePhoto}
                      />
                      <Typography className={classes.userName}>
                        {e.user.username}
                      </Typography>
                    </Box>
                    <IconButton
                      onClick={() => downloadImage(e.urls.regular, e.user.name)}
                      disableRipple
                      className={classes.downloadIConContainer}
                    >
                      <Download className={classes.downloadIcon} />
                    </IconButton>
                  </Box>
                </Box>
                <Box
                  component={"img"}
                  src={e.urls.regular}
                  alt="img"
                  className={classes.images}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default HomePage;
