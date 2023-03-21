import { Link } from "react-router-dom";
import { Typography,Card,CardContent,CardMedia,Box} from "@mui/material";
import { CheckCircle} from "@mui/icons-material";

import {demoVideoUrl,demoVideoTitle ,demoChannelUrl,demoChannelTitle} from "../utils/constants";
const VideoCard = ({video:{id:{videoId},snippet},type}) => {
    
    return (
      <>
       {type =='horizontal'?
          <Card sx={{ display: 'flex' ,justifyContent:'flex-start',alignItems:'flex-start',width:'100%',height:{xs:150,md:200},borderRadius:'15px ', backgroundColor:'#0f0f0f'}} >

            <Link to={videoId?`/video/${videoId}`:demoVideoUrl} sx={{width:'40%'}} >
            
                 <CardMedia
                 component="img"
                 image={snippet?.thumbnails?.high?.url}
                 alt={snippet?.title}
                 sx={{ height:{xs:150,md:200},minWidth:{xs:150,md:200},borderRadius:'15px',objectFit:'cover',padding:'0px'}}
               />
  
            </Link>
            <Box sx={{ display: 'flex', flexDirection: 'column' ,width:'60%'}}>
                <CardContent >

                    <Link to={videoId?`/video/${videoId}`:demoVideoUrl} >
                        <Typography variant='subtitle1' fontWeight='bold' color='#FFF'  sx={{ lineHeight:'1.5em',height:'3em',overflow:'hidden',textOverflow:'ellipsis'}} >
                            {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
                        </Typography>
                    </Link>
                    <Link to={snippet?.channelId? `/channel/${snippet?.channelId}` : demoChannelUrl } onMouseOver={(e)=>{e.target.style.color='#FFF'}} onMouseOut={(e)=>{e.target.style.color='gray'}}>
                        <Typography variant='subtitle2' fontWeight='bold' color='gray'sx={{lineHeight:'1.5em',height:'3em',textOverflow:'ellipsis',textOverflow:'ellipsis'}} >
                            {snippet?.channelTitle||demoChannelTitle}
                            <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
                        </Typography>
                    </Link>
  

                </CardContent>
            </Box>
        </Card>
        :

        <Card  sx={{width:{xs:'90vw',in_xs:'210px',sm:'250px',in_sm:'210px',md:'300px'}, borderRadius:'15px 15px 5px 5px',backgroundColor:'#0f0f0f' }}>
            <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
            
                <CardMedia
                    component="img"
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{height:180,borderRadius:'15px',objectFit:'cover'}}//fit dim
                />
                

                
            </Link>
            <CardContent sx={{height:'106px',p:1 }}>
 
               <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='#FFF' >
                        {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId? `/channel/${snippet?.channelId}` : demoChannelUrl } onMouseOver={(e)=>{e.target.style.color='#FFF'}} onMouseOut={(e)=>{e.target.style.color='gray'}}>
                    <Typography variant='subtitle2' fontWeight='bold' color='gray'sx={{width:'60%'}} >
                        {snippet?.channelTitle||demoChannelTitle}
                        <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
                    </Typography>
                </Link>

             
            </CardContent>
        </Card>
        }
       </>
    
    )
};

export default VideoCard;
