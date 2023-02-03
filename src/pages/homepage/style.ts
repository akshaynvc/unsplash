import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

export const useStyle = makeStyles(() => {
  const theme = useTheme();
  return {
    imagesContainer: {
      padding: theme.spacing(4)
    },
    gridContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px'
    },
    gridItem: {
        flexBasis: '350px'
    },
    images:{
        objectFit: 'cover',
        width: '100%',
        height: '400px',
        verticalAlign: 'middle',
        borderRadius: '5px',

    }
  };
});
