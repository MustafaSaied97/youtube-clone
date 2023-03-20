import { Link } from "react-router-dom";
import { Box,Typography,Card,CardContent,CardMedia ,Skeleton} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture} from "../utils/constants";

const ChannelCard = ({channelDetail,marginTop,marginRight}) => {
 
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
        margin:'auto',marginTop:marginTop,marginRight:marginRight
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId||channelDetail?.id}`}>
        <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',color:'#fff'}}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url||demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{borderRadius:'50%',height:'180px',width:'180px',mb:2,border:'1px solid #e3e3e3'}}
          />
 

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
        </CardContent>

      </Link>
    </Box>

  );
};

export default ChannelCard;
