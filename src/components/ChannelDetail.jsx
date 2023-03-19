import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {Videos,VideoCard,ChannelCard} from '.'
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
        <ChannelCard channelDetail={channelDetail} marginTop={'-110px'}/>
      </Box>
   
      <Box p={3} sx={{overflowY:'auto',height:'90vh',flex:2, }} >
        <Videos videos={videos} from={'ChannelDetail'}/>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
