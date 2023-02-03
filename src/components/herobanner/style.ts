import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

export const useStyle = makeStyles(() => {
  const theme = useTheme();
  return {
    bannerContainer:{
        backgroundImage:'url(https://cdn.pixabay.com/photo/2018/01/31/07/36/astronomy-3120482__340.jpg)',
        height:'90vh',
        backgroundPosition: 'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        [theme.breakpoints.down('lg')]:{
            height:'50vh',
        }
    },
    searchbarContainer:{
        padding:'10rem 22rem',
        [theme.breakpoints.down('lg')]:{
            padding:'1rem',
        },
        display:'flex',
        flexDirection:'column',
        width:'100%',
        height:'100%',
    },
    logotextContainer:{
        
    },
    logotext:{
        fontSize:'46px',
        fontWeight:700,
        color:theme.palette.common.white,
    },
    typoSubHeading:{
        fontSize:'18px',
        fontWeight:400,
        color:theme.palette.common.white,
    },
    typoSubTitle:{
        fontSize:'14px',
        fontWeight:400,
        color:theme.palette.common.white,
        marginTop:'4px'
    },
    searchBox:{
        background:theme.palette.common.white,
        borderRadius:theme.spacing(.5),
        marginTop:theme.spacing(2),
    }
  };
});
