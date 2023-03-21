import {useState,useEffect} from "react";
import {Box,Stack,Typography } from "@mui/material";
import {SideBar,Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';
const Feed = () => {
  const [selectedCategory,setSelectedCategory]=useState('new')
  const [videos,setVideos]=useState([])

  useEffect(()=>{
    // let action='not render'

    setVideos([])//clear videos when click on anthoer category
   fetchFromAPI(`search?part=id,snippet&q=${selectedCategory}`)
  .then((data)=> setVideos(data.items))
  // return ()=>{
  //   action='is render'
  //   console.log(action)

  // }


},[selectedCategory])

  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}  ,justifyContent:'center' ,alignItems:'center'}} p={1}>

      <Box  sx={{height:{xs:'auto',md:'100vh'},borderRight:'1px solid #3d3d3d',px:{xs:0,md:2 } }}> 

        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

      </Box>
      <Box  p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>

        <Typography className="copyright" varient="h4" fontWeight='bold' mb={2} sx={{color:'white'}}> 
          {selectedCategory} <span style={{color:'#F31503'}}>Videos</span>
        </Typography>


        <Stack className="Feed" direction='row' flexWrap='wrap' justifyContent='flex-start' alignItems='flex-start' alignContent='center' gap={2}  >
          <Videos  videos={videos} from={'Feed'} />
        </Stack>
      </Box>

    </Stack>
  );
};

export default Feed;


