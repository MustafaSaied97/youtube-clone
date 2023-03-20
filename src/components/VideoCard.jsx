import { Link } from "react-router-dom";
import { Typography,Card,CardContent,CardMedia,Skeleton,Box} from "@mui/material";
import { CheckCircle} from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';

import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle ,demoChannelUrl,demoChannelTitle} from "../utils/constants";
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
                 sx={{ height:{xs:150,md:200},borderRadius:'15px',objectFit:'cover',padding:'0px'}}
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
        <Card  sx={{width:{xs:'90vw',sm:'250px',md:'300px'}, borderRadius:'15px 15px 5px 5px',backgroundColor:'#0f0f0f' }}>
            <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
     
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{width:{xs:'90vw',sm:'250px',md:'300px'},height:180 ,borderRadius:'15px' ,objectFit:'contain'}}//fit dim
                />

            </Link>
            <CardContent sx={{height:'106px' }}>
 
               <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='#FFF' >
                        {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId? `/channel/${snippet?.channelId}` : demoChannelUrl } onMouseOver={(e)=>{e.target.style.color='#FFF'}} onMouseOut={(e)=>{e.target.style.color='gray'}}>
                    <Typography variant='subtitle2' fontWeight='bold' color='gray'sx={{width:'50%'}} >
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

// #2b2b2b
// #191919
//#0f0f0f

//  <Card  sx={{width:{xs:'100%',sm:'358px',md:'320px'}, borderRadius:'15px 15px 5px 5px' ,maxWidth:358 ,boxShadow:'none',border:'0' , backgroundColor:'#0f0f0f'}}>
// <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
//     <CardMedia
//         image={snippet?.thumbnails?.high?.url}
//         alt={snippet?.title}
//         sx={{width:{xs:'100%',sm:'358px',md:'320px'},height:180 ,borderRadius:'15px' ,objectFit:'contain'}}
//     />
// </Link>
// <CardContent sx={{height:'106px' }}>
//     <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
//         <Typography variant='subtitle1' fontWeight='bold' color='#FFF' >
//             {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
//         </Typography>
//     </Link>
//     <Link to={snippet?.channelId? `/channel/${snippet?.channelId}` : demoChannelUrl }>
//         <Typography variant='subtitle2' fontWeight='bold' color='gray' >
//             {snippet?.channelTitle||demoChannelTitle}
//             <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
//         </Typography>
//     </Link>
// </CardContent>
// </Card> 



// <Card  sx={{width:{md:'320px',xs:'320px  ', borderRadius:'15px 15px 5px 5px'} ,maxWidth:358 ,boxShadow:'none',border:'0' , backgroundColor:'#0f0f0f'}}>
// <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
//     <CardMedia
//         image={snippet?.thumbnails?.high?.url}
//         alt={snippet?.title}
//         sx={{width:{md:'320px',xs:'320px'},height:180 ,borderRadius:'15px' ,objectFit:'contain'}}
//     />
// </Link>
// <CardContent sx={{height:'106px' }}>
//     <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
//         <Typography variant='subtitle1' fontWeight='bold' color='#FFF' >
//             {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
//         </Typography>
//     </Link>
//     <Link to={snippet?.channelId? `/channel/${snippet?.channelId}` : demoChannelUrl }>
//         <Typography variant='subtitle2' fontWeight='bold' color='gray' >
//             {snippet?.channelTitle||demoChannelTitle}
//             <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
//         </Typography>
//     </Link>
// </CardContent>
// </Card>





// <Card  sx={{width:{xs:'100%',sm:'358px',md:'320px'}, borderRadius:'15px 15px 5px 5px' ,maxWidth:358 ,boxShadow:'none',border:'0',backgroundColor:'#0f0f0f' }}>
//             <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
//             {!loading?
//                 <CardMedia
//                     image={snippet?.thumbnails?.high?.url}
//                     alt={snippet?.title}
//                     sx={{width:{xs:'100%',sm:'358px',md:'320px'},height:180 ,borderRadius:'15px' ,objectFit:'contain'}}
//                 />
//                 :
//                 <Skeleton variant="rectangular" sx={{ width:{xs:'100vw',sm:'358px',md:'320px'},  height:180 ,bgcolor: '#363738',borderRadius:'15px' }} animation="wave"/>

//             }
//             </Link>
//             <CardContent sx={{height:'106px' }}>
//             {!loading?
//             <>
//                <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
//                     <Typography variant='subtitle1' fontWeight='bold' color='#FFF' >
//                         {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
//                     </Typography>
//                 </Link>
//                 <Link to={snippet?.channelId? `/channel/${snippet?.channelId}` : demoChannelUrl } onMouseOver={(e)=>{e.target.style.color='#FFF'}} onMouseOut={(e)=>{e.target.style.color='gray'}}>
//                     <Typography variant='subtitle2' fontWeight='bold' color='gray'sx={{width:'50%'}} >
//                         {snippet?.channelTitle||demoChannelTitle}
//                         <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
//                     </Typography>
//                 </Link>
//             </>
//             :
//             <>
//                 <Skeleton sx={{ bgcolor: '#363738', zIndex:'-3' }} />
//                 <Skeleton width="60%" sx={{ bgcolor: '#363738' }}  />
//             </>
//             }
             
//             </CardContent>
//         </Card>


// {type =='horizontal'?
// <Card sx={{ display: 'flex' ,justifyContent:'center',alignItems:'flex-start',minWidth:'30vw',height:200,borderRadius:'15px ', backgroundColor:'#0f0f0f'}} >
//   <Link to={videoId?`/video/${videoId}`:demoVideoUrl} sx={{ width: '30%',borderRadius:'15px',height:'200px',objectFit:'cover',padding:'0px'}}>
  
//        <CardMedia
//        component="img"
//        image={snippet?.thumbnails?.high?.url}
//        alt={snippet?.title}
//        sx={{ width: {xs:'150px',sm:'358px',md:'320px'},height:'200px',borderRadius:'15px',objectFit:'cover',padding:'0px'}}
//      />
      
     
//   </Link>
//   <Box sx={{ display: 'flex', flexDirection: 'column' ,width:'100%'}}>
//       <CardContent >

//           <Link to={videoId?`/video/${videoId}`:demoVideoUrl} >
//               <Typography variant='subtitle1' fontWeight='bold' color='#FFF'   >
//                   {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
//               </Typography>
//           </Link>
//           <Link to={snippet?.channelId? `/channel/${snippet?.channelId}` : demoChannelUrl } onMouseOver={(e)=>{e.target.style.color='#FFF'}} onMouseOut={(e)=>{e.target.style.color='gray'}}>
//               <Typography variant='subtitle2' fontWeight='bold' color='gray' >
//                   {snippet?.channelTitle||demoChannelTitle}
//                   <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
//               </Typography>
//           </Link>


//       </CardContent>
//       <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}> 
//       </Box>
//   </Box>
// </Card>
// :
// <Card  sx={{width:{xs:'100%',sm:'358px',md:'320px'}, borderRadius:'15px 15px 5px 5px' ,maxWidth:358 ,boxShadow:'none',border:'0',backgroundColor:'#0f0f0f' }}>
//   <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>

//       <CardMedia
//           image={snippet?.thumbnails?.high?.url}
//           alt={snippet?.title}
//           sx={{width:{xs:'90vw',sm:'358px',md:'320px'},height:180 ,borderRadius:'15px' ,objectFit:'contain'}}//fit dim
//       />

//   </Link>
//   <CardContent sx={{height:'106px' }}>

//      <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
//           <Typography variant='subtitle1' fontWeight='bold' color='#FFF' >
//               {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
//           </Typography>
//       </Link>
//       <Link to={snippet?.channelId? `/channel/${snippet?.channelId}` : demoChannelUrl } onMouseOver={(e)=>{e.target.style.color='#FFF'}} onMouseOut={(e)=>{e.target.style.color='gray'}}>
//           <Typography variant='subtitle2' fontWeight='bold' color='gray'sx={{width:'50%'}} >
//               {snippet?.channelTitle||demoChannelTitle}
//               <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
//           </Typography>
//       </Link>

   
//   </CardContent>
// </Card>
// }
//</>