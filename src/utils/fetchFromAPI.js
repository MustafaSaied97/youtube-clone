import axios from 'axios'
const BASE_URL='https://youtube-v31.p.rapidapi.com'
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY_3,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export  const fetchFromAPI=async(url)=>{
const {data}=await axios.get(`${BASE_URL}/${url}`,options)
return data

}


// import axios from 'axios'
// const BASE_URL=`youtube-v3-alternative.p.rapidapi.com/search`
// const options = {
//   params: {query: 'cat'},
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
//   }
// };


// export  const fetchFromAPI=async(url)=>{
// const {data}=await axios.get(BASE_URL,options)
// return data

// }
