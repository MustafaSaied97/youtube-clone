import { Link } from "react-router-dom";
import { Box,Typography,Card,CardContent,CardMedia ,Skeleton} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture} from "../utils/constants";

const ChannelCard = ({channelDetail,marginTop,type}) => {
console.log(  channelDetail?.snippet?.thumbnails)
  return (
    <>
    {type =='horizontal'?
      <Card sx={{ display: 'flex' ,justifyContent:'flex-start',alignItems:'center',width:'100%',height:{xs:150,md:200},borderRadius:'15px ', backgroundColor:'#0f0f0f',color:'#fff'}} >
        
          <Link to={`/channel/${channelDetail?.id?.channelId||channelDetail?.id}`}  sx={{width:'40%',heigh:'100%'}}>
            <CardMedia
              image={channelDetail?.snippet?.thumbnails?.medium?.url||demoProfilePicture}
              alt={channelDetail?.snippet?.title}
              sx={{borderRadius:'50%',height:{xs:'120px',md:'180px'},width:{xs:'120px',md:'180px'},border:'1px solid #58575792'}}
            />
          </Link>
        
          <Box sx={{ display: 'flex', flexDirection: 'column' ,width:'60%',alignSelf:'flex-start'}}>
              <CardContent >
                <Typography>
                  {channelDetail?.snippet?.title}
                  <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
                </Typography>
              </CardContent>
          </Box>
      </Card>
        :
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
        <Link to={`/channel/${channelDetail?.id?.channelId||channelDetail?.id}`}>
          <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',color:'#fff'}}>
            <CardMedia
              image={channelDetail?.snippet?.thumbnails?.medium?.url||demoProfilePicture}
              alt={channelDetail?.snippet?.thumbnails?.medium?.url}
              sx={{borderRadius:'50%',height:{xs:'120px',md:'180px'},width:{xs:'120px',md:'180px'},mb:2,border:'1px solid #58575792'}}
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
    }
    </>

  );
};

export default ChannelCard;
