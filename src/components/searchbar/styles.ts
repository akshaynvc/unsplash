import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

export const useStyle = makeStyles(() => {
  const theme = useTheme();
  return {
    searchBar: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderRadius: theme.spacing(2.5),
          borderColor: "white",
          backgroundColor: "#eeeeee",
          zIndex:-10
        },
        "&:hover fieldset": {
          borderColor: theme.palette.common.white,
        },
        "&.Mui-focused fieldset": {
          borderColor: "#eeeeee",
          backgroundColor: theme.palette.common.white,
          zIndex:-10
        },
      },
    },
  };
});
