import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export  const useMovieList = () =>{

     
    const dispatch = useDispatch();

    const getNowPlaying = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));

    };

     const getPopularMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addPopularMovies(json.results));

    };

   
     const getTopRatedMovies = async ()=>{
        const data  = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));

    };

     const getUpcomigdMovies = async ()=>{
        const data  = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));

    }
















    useEffect(()=>{
        getNowPlaying();
        getPopularMovies();
        getUpcomigdMovies();
        getTopRatedMovies();
    },[])
}