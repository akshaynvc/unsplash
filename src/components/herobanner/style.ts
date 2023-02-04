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
            alignItems:"center",
            justifyContent:'center'
        },
        display:'flex',
        flexDirection:'column',
        width:'100%',
        height:'100%',
    },
    logotextContainer:{
        
    },
    logotext:{
        fontSize:theme.spacing(6),
        fontWeight:700,
        color:theme.palette.common.white,
    },
    typoSubHeading:{
        fontSize:theme.spacing(2.4),
        fontWeight:400,
        color:theme.palette.common.white,
    },
    typoSubTitle:{
        fontSize:theme.spacing(1.8),
        fontWeight:400,
        color:theme.palette.common.white,
        marginTop:theme.spacing(.5)
    },
    searchBox:{
        background:theme.palette.common.white,
        borderRadius:theme.spacing(.5),
        marginTop:theme.spacing(2),
        [theme.breakpoints.down('lg')]:{
            display:'none'
        }
    }
  };
});
