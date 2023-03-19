import { Link } from "react-router-dom";
import { Box,Typography,Card,CardContent,CardMedia ,Skeleton} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture} from "../utils/constants";

const ChannelCard = ({loading,channelDetail,marginTop}) => {
 
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
      <Link to={`/channel/${channelDetail?.id?.channelId||channelDetail?.id}`}>
        <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',color:'#fff'}}>
        {!loading?
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url||demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{borderRadius:'50%',height:'180px',width:'180px',mb:2,border:'1px solid #e3e3e3'}}
          />
          :
          <Skeleton variant="circular" width={180} height={180} sx={{ bgcolor: '#363738',borderRadius:'50%' }} animation="wave"/>

          }


        {!loading?
          <>
          <Typography>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount &&(
            <Typography sx={{fontSize:'13px',color:'gray'}}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
              <span style={{marginLeft:'2px'}}>Subscribers</span>
            </Typography>

          )}
          </>
          :
          <>
          <Skeleton width="70%" sx={{ bgcolor: '#363738' }}  />
          </>
        }

        </CardContent>

      </Link>
    </Box>

  );
};

export default ChannelCard;
