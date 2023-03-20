import { Link } from "react-router-dom";
import { Box,Typography,Card,CardContent,CardMedia ,Skeleton} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture} from "../utils/constants";
const ChannelCardSkeleton = ({marginTop}) => {
  return (
    <Box
      sx={{
        boxShadow:'none',
        borderRadius:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:{xs:'356px',md:'320px'},
        height:'326px',
        margin:'auto',marginTop:marginTop
      }}
    >
      <Link to={''}>
        <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',color:'#fff'}}>
    
          <Skeleton variant="circular" width={180} height={180} sx={{ bgcolor: '#363738',borderRadius:'50%' }} animation="wave"/>

          <Skeleton width="70%" sx={{ bgcolor: '#363738' }}  />
        </CardContent>

      </Link>
    </Box>

  );
};

export default ChannelCardSkeleton;
