import {useState,useEffect} from "react";
import { Link,useParams } from "react-router-dom";
import ReactPlayer from 'react-player'
import { Box,Stack,Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {Videos}from './'
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail,setVideoDetail]=useState(null)
  const [videos,setVideos]=useState(null)

  const {id}=useParams()

  useEffect(()=>{
    videos.length!==null &&setVideos(null)//reset
    
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideoDetail(data.items[0]))
    fetchFromAPI(`search?part=snippet&relatedVideoId=${id}`)
    .then((data)=>setVideos(data.items))
  },[id])
  if(!videoDetail?.snippet) return 'Loading...';
  const{snippet:{title,channelId,channelTitle} , statistics:{viewCount,likeCount}}=videoDetail
  return (
    <Box minHeight='95vh' sx={{width: '100%'}}>
      <Stack direction={{xs:'column',sm:'column',md:'row'}}>
        <Box flex={1}>

          <Box sx={{width:{xs:'100%'},position:'sticky',top:'86px'}}>

            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls playing={true}/>

            <Typography color='#fff' varient='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            
            <Stack direction='row' justifyContent='space-between' sx={{color:'#fff'}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography varient={{sm:'subtitle1',md:'h6'}} color='#fff'>
                  {channelTitle}
                  <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='cetner'>
                <Typography varient='body1' sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography varient='body1' sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
            
          </Box>
        </Box>


        <Stack direction={'column'} flexWrap='wrap' alignItems={'center'} gap={2}  sx={{width:{xs:'90vw',sm:'90vw',md:'30vw'},px:'3vw' }} >
          <Videos videos={videos}  from={'VideoDetail'}/>
        </Stack>

      </Stack>
       
    </Box> 
  )
};

export default VideoDetail;