import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies, addPopularMovies, addPopularshows, addshows, addTopRatedMovies, addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export  const useMovieList = () =>{

    const  {nowPlayingMovies , PopularMovies , topRatedMovies , upComingMovies , shows , popularShows} = useSelector((state =>state.movies))
     
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

    };

      const getShows = async ()=>{
        const data  = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS
        )

        const json = await data.json();
        dispatch(addshows(json.results));

    };

     const getPopularShows = async ()=>{
        const data  = await fetch('https://api.themoviedb.org/3/tv/popular?page=1', API_OPTIONS
        )

        const json = await data.json();
        dispatch(addPopularshows(json.results));

    }
    useEffect(()=>{
        !nowPlayingMovies && getNowPlaying();
        !PopularMovies && getPopularMovies();
        !upComingMovies && getUpcomigdMovies();
        !topRatedMovies && getTopRatedMovies();
        !shows &&  getShows();
        !popularShows &&  getPopularShows();
    },[])
}