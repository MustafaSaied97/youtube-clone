import { BrowserRouter,HashRouter,Routes, Route } from 'react-router-dom';
import {Box,ThemeProvider } from "@mui/material"
import {NavBar , Feed , VideoDetail , ChannelDetail , SearchFeed ,NotFound} from "./components"
import theme from './styles/theme'

const App = () => (
<ThemeProvider theme={theme}>
    <HashRouter>
        <Box sx={{backgroundColor:'#000',width:{xs:'100vw'}}}>
            <NavBar/>
            <Routes>
                <Route path="/" exact element={<Feed/>}/>
                <Route path="/video/:id" element={<VideoDetail/>}/>
                <Route path="/channel/:id" element={<ChannelDetail/>}/>
                <Route path="/search/:searchTerm" element={<SearchFeed/>}/>

                 {/* for wrong URL  */}
                <Route  path='*'  element={<NotFound/>} />

            </Routes>
        </Box>
    </HashRouter>
</ThemeProvider>
);

export default App;



