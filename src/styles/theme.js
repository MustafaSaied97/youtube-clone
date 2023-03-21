import {Box,createTheme,ThemeProvider } from "@mui/material"
 const theme=createTheme({
    breakpoints:{
        values:{
            xs:0,
            in_xs:427,

            sm:600,
            in_sm:678,

            md:900,

            lg:1200,
            xl:1536
        }
    }
})
export default theme