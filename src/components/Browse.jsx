
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useMovieList } from "../customHooks/useMoviesList";
import Header from "./Header";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () =>{
    const showSearch = useSelector((store) =>store.gpt.showGptSearch);

    useMovieList();
   

    return (
        <div className="relative m-0 bg-black ">
             <Header />
             
           {showSearch?<GptSearchPage /> : <> <MainContainer />
           <SecondaryContainer /></>}
          
        </div>
    )
}

export default Browse;
