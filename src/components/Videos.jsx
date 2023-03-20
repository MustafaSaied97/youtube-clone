import {useState,useEffect} from "react";
import { Stack,Box } from "@mui/material";
import {VideoCard,VideoCardSkeleton,ChannelCard,ChannelCardSkeleton} from './'
const Videos = ({videos,direction,from}) => {

  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    setLoading(true)
    if(videos?.length!==0){
      setLoading(false)
    }
  },[videos])
 

 

  return(
    // <Stack direction={direction||'row'} flexWrap='wrap' justifyContent='flex-start' alignItems='flex-start' alignContent='center' gap={2} width={'100%'}>
     <>
    {loading?
      <>
        {Array(36).fill(null).map((item,indx)=>(
          <Box key={indx} >
            <VideoCardSkeleton type={(from=='SearchFeed'||from=='VideoDetail')?'horizontal':''} />
          </Box>
        ))
        }
      
      </>
      :
      <>


       {(from=='SearchFeed'||from=='VideoDetail')?
       <>
          {videos?.map((item,indx)=>(
          <Box key={indx} sx={{width:'100%' ,alignSelf:'flex-start' }} >
            {item.id.videoId && (<VideoCard video={item}  type={'horizontal'}/>)}
            {item.id.channelId && <ChannelCard channelDetail={item} marginTop={'0px'} type={'horizontal'} />}
          </Box>
        ))}
       </>
       :
       <>
          {videos?.map((item,indx)=>(
          <Box key={indx}  >
            {item.id.videoId && (<VideoCard video={item}  />)}
            {item.id.channelId && <ChannelCard channelDetail={item} marginTop={'0px'} />}
          </Box>
        ))}
        
       </>
       }
     

      </>

      }
      

      </>
    // </Stack>
  );
};

export default Videos;
// {from!=='ChannelDetail'&& item.id.channelId && <ChannelCard channelDetail={item} marginTop={'0px'} />}
