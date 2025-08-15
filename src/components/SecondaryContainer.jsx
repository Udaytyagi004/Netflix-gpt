import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";


const SecondaryContainer = ()=>{
    const movies = useSelector((store) => store.movies)
    
    

    return (
        <div className="relative z-10 -mt-110 z-20"> 
          <MoviesList title={"Now Playing"} movies = {movies?.nowPlayingMovies} />
          <MoviesList title={"Top Rated"} movies = {movies?.topRatedMovies} />
          <MoviesList title={"Popular"} movies = {movies?.PopularMovies} />
          <MoviesList title={"UpComing Movies"} movies = {movies?.upComingMovies} />
            <MoviesList title={"Shows"} movies = {movies?.shows} /> 
            <MoviesList title={"Popular Shows"} movies = {movies?.popularShows} />
                
        </div>

    )
};
export default SecondaryContainer;