import { Link } from "react-router-dom";
import { Typography,Card,CardContent,CardMedia,Skeleton,Box} from "@mui/material";
import { CheckCircle} from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';

import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle ,demoChannelUrl,demoChannelTitle} from "../utils/constants";
import zIndex from "@mui/material/styles/zIndex";

const VideoCardSkeleton = ({type}) => {
  return (
    <>
    {type =='horizontal'?
       <Card sx={{ display: 'flex' ,justifyContent:'flex-start',alignItems:'flex-start',width: {xs:'90vw',md:'80vw'},height:200,borderRadius:'15px ', backgroundColor:'#0f0f0f'}} >
         <Link to={''} sx={{ width: '30%',borderRadius:'15px',height:'200px',objectFit:'cover',padding:'0px'}}>
             <Skeleton variant="rectangular" sx={{  width: {xs:'150px',sm:'358px',md:'320px'},height:'200px',borderRadius:'15px' ,padding:'0px' ,bgcolor: '#363738' }} animation="wave"/>
         </Link>
         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
             <CardContent >
                 <Skeleton sx={{  width:{xs:'40vw'},bgcolor: '#363738', zIndex:'-3' }} />
                 <Skeleton  sx={{ width:{xs:'30vw'},bgcolor: '#363738',mt:'20px' }}  />
             </CardContent>
             <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}> 
             </Box>
         </Box>
     </Card>
    

     :
     <Card  sx={{width:{xs:'100%',sm:'250px',md:'300px'}, borderRadius:'15px 15px 5px 5px' ,maxWidth:358 ,boxShadow:'none',border:'0',backgroundColor:'#0f0f0f' }}>
         <Link to={''}>
             <Skeleton variant="rectangular" sx={{ width:{xs:'90vw',sm:'250px',md:'300px'},  height:180 ,bgcolor: '#363738',borderRadius:'15px' }} animation="wave"/>
         </Link>
         <CardContent sx={{height:'106px' }}>
             <Skeleton sx={{ bgcolor: '#363738', zIndex:'-3' }} />
             <Skeleton width="60%" sx={{ bgcolor: '#363738' }}  />
         </CardContent>
     </Card>
     }
    </>
 

  );
};

export default VideoCardSkeleton;