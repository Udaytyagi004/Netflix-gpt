import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import lang from "../utils/languageConstants";

const MovieSuggestion = ()=>{
 const {moviesName , moviesList} = useSelector((state) => state.gpt);
 const currentLanguage = useSelector((state) => state.config.language);

 if(!moviesName) return null;

    return(
        <div className="bg-black text-white">
            <h1 className="text-center text-2xl text-yellow-500">{lang[currentLanguage].searchHeading}</h1>
            {
                moviesList.map((movie,index) => <MoviesList key={index} title={""} movies={movie}  />)
            }
            

        </div>
    )
};

export default MovieSuggestion;