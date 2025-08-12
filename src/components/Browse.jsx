
import { useNowplayingMovies } from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../customHooks/usePopularMovies";
import { useMovieList } from "../customHooks/useMoviesList";

const Browse = () =>{

    useMovieList();
   

    return (
        <div className="relative m-0 bg-black">
           <MainContainer />
           <SecondaryContainer />
        </div>
    )
}

export default Browse;
