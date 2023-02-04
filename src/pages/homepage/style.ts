import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

export const useStyle = makeStyles(() => {
  const theme = useTheme();
  return {
    imagesContainer: {
      padding: theme.spacing(4),
    },
    gridContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px",
    },
    gridItem: {
      flexBasis: "350px",
      position: "relative",
    },
    images: {
      objectFit: "cover",
      width: "100%",
      height: "400px",
      verticalAlign: "middle",
      borderRadius: "5px",
    },
    hoverItems: {
      position: "absolute",
      transition: ".5s ease",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      opacity: 0,
      width: "95%",
      height: "96%",
      textAlign: "center",
      padding: "1rem",
      "&:hover": {
        opacity: 1,
        borderRadius: "5px",
        background:
          "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 64%)",
        // background: 'linear-gradient(to right bottom, #36EAEF, #6B0AC9)',
      },
    },
    profileContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    profile: {
      display: "flex",
      alignItems: "center",
    },
    profilePhoto: {
      borderRadius: "50%",
      height: theme.spacing(4),
      width: theme.spacing(4),
    },
    userName: {
      marginLeft: theme.spacing(2),
      color: theme.palette.common.white,
      fontSize: "16px",
    },
    downloadIConContainer: {
      background: "#d9d9d9",
      display: "flex",
      alignItem: "center",
      padding: "5px 15px",
      borderRadius: ".5rem",
    },
    downloadIcon: {
      color: "gray",
    },
    saveIconContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
      alignItems:'center',
     
    },
    saveIcon:{
      background: "#d9d9d9",
      padding: "5px 15px",
      marginLeft:'1rem',
      display:'flex',
      alignItem:'center',
      borderRadius: ".5rem",
    },
  };
});
