import axios from "axios";
import { useState,useEffect } from "react";

export default function useGIF(tag) {

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  const Tag_url  = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const Random_url  = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  const [gif,setGif] = useState('');
  const [loading,setLoading] = useState(false);



 async function fetchData(){
    setLoading(true);
    const {data} =  await axios.get(tag ?  Tag_url : Random_url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    console.log(imageSource);
    setLoading(false);
  }


 useEffect(() => {
  fetchData();
 },[])
  
 return [gif,loading,fetchData];
}
