import { Link } from "react-router-dom";
import { Box,CardContent,Skeleton} from "@mui/material";

const ChannelCardSkeleton = ({marginTop}) => {
  return (
    <Box
      sx={{
        boxShadow:'none',
        borderRadius:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:{xs:'90vw',sm:'250px',md:'300px'},
        height:{xs:'200px',md:'326px'},
        margin:'auto',marginTop:marginTop
      }}
    >
      <Link to={''}>
        <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',color:'#fff'}}>
    
          <Skeleton variant="circular"  sx={{borderRadius:'50%',height:{xs:'120px',md:'180px'},width:{xs:'120px',md:'180px'},mb:2,border:'1px solid #e3e3e3'}} animation="wave"/>

          <Skeleton width="70%" sx={{ bgcolor: '#363738' }}  />
        </CardContent>

      </Link>
    </Box>

  );
};

export default ChannelCardSkeleton;
