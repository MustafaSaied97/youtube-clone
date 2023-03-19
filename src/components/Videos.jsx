


import {useState,useEffect} from "react";
import { Stack,Box } from "@mui/material";
import {VideoCard,ChannelCard} from './'
const Videos = ({videos,direction,from}) => {

  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    if(videos?.length!==0){
      setLoading(false)
    }
  },[videos])
 


  return(
    <Stack direction={direction||'row'} flexWrap='wrap' justifyContent='flex-start' alignItems='flex-start' alignContent='center' gap={2}>
      {videos?.map((item,indx)=>(
        <Box key={indx} >
          {item.id.videoId && (<VideoCard video={item} from={from} loading={loading}/>)}
          {from!=='ChannelDetail'&& item.id.channelId && <ChannelCard channelDetail={item} marginTop={'0px'} loading={loading}/>}
        </Box>
      ))

      }

    </Stack>
  );
};

export default Videos;
