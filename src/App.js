import React from "react";
import { BrowserRouter,HashRouter,Routes, Route } from 'react-router-dom';
import {Box} from "@mui/material"
import {NavBar , Feed , VideoDetail , ChannelDetail , SearchFeed } from "./components"
const App = () => (
    <HashRouter>
        <Box sx={{backgroundColor:'#000'}}>
            <NavBar/>
            <Routes>
                <Route path="/" exact element={<Feed/>}/>
                <Route path="/video/:id" element={<VideoDetail/>}/>
                <Route path="/channel/:id" element={<ChannelDetail/>}/>
                <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
            </Routes>
        </Box>
    </HashRouter>
);

export default App;
