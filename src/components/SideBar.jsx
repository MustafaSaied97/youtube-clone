import React ,{useState}from "react";
import { Stack } from "@mui/material";
import {categories} from '../utils/constants'

const SideBar = ({selectedCategory,setSelectedCategory}) => {
    return(
    <Stack direction='row' sx={{overflowY:'auto',width:{xs:'99vw',md:'auto'}, height:{xs:'auto',md:'95%'} ,flexDirection:{md:'column'}}}>
        
        {categories.map((category)=>(
            <button 
                key={category.name} 
                className="category-btn" 
                style={{background:category.name===selectedCategory&&'#FC1503',color:'white'}} 
                onClick={()=>setSelectedCategory(category.name)}
            >
                <span style={{color:category.name===selectedCategory?'white':'red',marginRight:'15px'}}>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}

    </Stack>

)}

export default SideBar;
