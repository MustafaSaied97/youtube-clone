import {useState,useEffect} from "react";
import { Stack,Box,Typography } from "@mui/material";
import {Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [videos,setVideos]=useState([])
  const {searchTerm}=useParams()
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=> setVideos(data.items))
  },[searchTerm])

  return (
    <Box  p={2} sx={{overflowY:'auto'}}>

    <Typography className="copyright" varient="h4" fontWeight='bold' mb={2} sx={{color:'white'}}> 
       Search Results for :<span style={{color:'#F31503'}}>{searchTerm}</span>
    </Typography>
   <Box>

    <Stack className="SearchFeed" direction={'column'} flexWrap='wrap'   gap={2}  sx={{width:{xs:'90vw',sm:'90vw',md:'90vw'}}} pe={2} >
      <Videos  videos={videos} from={'SearchFeed'}/>
    </Stack>

   </Box>
  </Box>
  );
};

export default SearchFeed;
