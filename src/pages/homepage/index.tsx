import React, { FC, Fragment, useState } from "react";
import HeroBanner from "../../components/herobanner";
import { Grid, Box } from "@mui/material";
import { useStyle } from "./style";
import useFetch from "../../utils/hooks/useFetch";
import { splashDataType } from "../../redux/model";
import Loader from "../../components/loader/loader";

const HomePage: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const classes = useStyle();

  const getQuery = (query: string) => {
    setSearchQuery(query);
  };

  const { isLoading, splashData } = useFetch(searchQuery);
  console.log(isLoading);
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
