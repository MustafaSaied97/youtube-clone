import {useState,useEffect} from "react";
import { Box,Stack,Typography } from "@mui/material";
import {SideBar,Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';
const Feed = () => {
  const [selectedCategory,setSelectedCategory]=useState('new')
  const [videos,setVideos]=useState([])

  useEffect(()=>{
  fetchFromAPI(`search?part=id,snippet&q=${selectedCategory}`)
  .then((data)=> setVideos(data.items))
},[selectedCategory])

  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'} ,justifyContent:'center' ,alignItems:'center'}} p={1}>

      <Box  sx={{height:{xs:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{xs:0,md:2 } }}>
        
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

     

      </Box>
      <Box  p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>

        <Typography className="copyright" varient="h4" fontWeight='bold' mb={2} sx={{color:'white'}}> 
          {selectedCategory} <span style={{color:'#F31503'}}>Videos</span>
        </Typography>

        <Videos  videos={videos}/>
      </Box>

    </Stack>
  );
};

export default Feed;

