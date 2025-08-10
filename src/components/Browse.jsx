
import { useNowplayingMovies } from "../customHooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () =>{

    useNowplayingMovies();
   

    return (
        <div>
           
           
            <MainContainer />
            <SecondaryContainer />

        </div>
    )
}

export default Browse;
