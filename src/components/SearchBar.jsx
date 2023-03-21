import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper,IconButton,InputBase  } from "@mui/material";
import {Search} from "@mui/icons-material"
const SearchBar = () => {
    const[searchTerm,setSearchTerm]=useState('')
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(searchTerm){
            navigate(`/search/${searchTerm}`) 
            setSearchTerm('')
        }
    }
  return(
    <Paper
        component='form'
        onSubmit={handleSubmit}
        sx={{display:'flex',border:'1px solid #e3e3e3' ,borderRadius:20 ,boxShadow:'none' ,pl:2, mr:{sm:5} ,width:{xs:'70%',in_xs:'auto'}}}
    >
        <InputBase  
            className="search-bar" 
            placeholder="Search..."
            vlaue={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}
        />
        <IconButton
            type="submit"
            sx={{p:'10px',color:'red'}}
        >
            <Search/>
        </IconButton>
    </Paper>
  )
};

export default SearchBar;
