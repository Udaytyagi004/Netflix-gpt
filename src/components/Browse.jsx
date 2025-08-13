
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
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
