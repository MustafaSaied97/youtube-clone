import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar"

const NavBar = () =>(
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    
    sx={{position:'sticky',top:'0',justifyContent:'space-between',backgroundColor:'#000' , zIndex:'100'}}
  >
    <Link to='/' style={{display:'flex',alignItems:'center'}} >
      {logo()}
    </Link>
    <SearchBar/>
  </Stack>
) ;

export default NavBar;
