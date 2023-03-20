import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import {Stack, Box } from "@mui/material";
import {Videos,VideoCard,ChannelCard,ChannelCardSkeleton} from '.'
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const{id}=useParams()
  const [channelDetail,setChannelDetail]=useState(null)
  const [videos,setVideos]=useState(null)
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))
  },[id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div 
          style={{
            background:' linear-gradient(90deg, rgba(10,1,17,1) 0%, rgba(23,119,181,1) 41%, rgba(45,45,45,1) 100%)',
            zIndex:10,
            height:'300px'
          }}
        />
        {channelDetail?<ChannelCard channelDetail={channelDetail} marginTop={'-110px'}/> :<ChannelCardSkeleton marginTop={'-110px'}/>}
      </Box>
   
      <Box p={3} sx={{overflowY:'auto',height:'90vh',flex:2, }} >

        <Stack direction={'row'} flexWrap='wrap' justifyContent='center' alignItems='flex-start' alignContent='center' gap={3} width={'100%'}>
          <Videos videos={videos} from={'ChannelDetail'}/>
        </Stack>

      </Box>
    </Box>
  );
};

export default ChannelDetail;
