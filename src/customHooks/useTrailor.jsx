import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailor } from "../utils/movieSlice";
import { useEffect } from "react";

export const useTrailor = (movieId) =>{
    
    const trailor = useSelector((store)=>store.movies.trailor);
    const dispatch = useDispatch();
   

    const getTrailor = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        
        const videos = json.results.filter(video => video.type === "Trailer" && video.site === "YouTube");
        const trailor = videos.length ? videos[0] : json.results[0];
     
        dispatch(addTrailor(trailor));

    }
    useEffect(()=>{
       !trailor && getTrailor()
    },[]);
    
}