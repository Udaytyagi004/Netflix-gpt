import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import ai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addSearchedMovies } from "../utils/gptSlice";


const GptSearchBar = () =>{
     const currentLanguage = useSelector((state)=> state.config.language);
     const searchText = useRef(null);
     const dispatch = useDispatch();

     const searchMovies = async (movieName) =>{
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        return json.results;
        


     }
     
        const handleSearch = async () => {
            const searchQuery = `
Act as a professional movie recommendation engine.
Analyze the following user query: "${searchText.current.value}".

Select exactly ten top-rated movies that match the query, ensuring:
- the language of the movie should be "${currentLanguage}"(unless the query specifies otherwise)
- At least two different genres (unless the query specifies otherwise)
- A mix of release years (if relevant)
- No repeated sequels unless specifically requested

Return ONLY the movie titles, separated by commas, with no numbering, no extra words, and no line breaks.

Example format:
The Shawshank Redemption, Inception, Spirited Away, Parasite, Casablanca
`;
;
            const result =  await ai.models.generateContent({
                          model: "gemini-2.5-flash",
                          contents: searchQuery,
                          config: {
                            thinkingConfig: {
                              thinkingBudget: 0, 
                            },
                        }
                            });
           const recomndedMovies = result.text.split(",");
           console.log(recomndedMovies);

           const data  =  recomndedMovies.map((movie)=> searchMovies(movie));
           const movieData = await Promise.all(data);
           dispatch(addSearchedMovies({moviesName: recomndedMovies, moviesList: movieData}))
            
        
     }

    
    return(
        <div className="flex justify-center items-center m-10">
            <form onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} type="text" placeholder={lang[currentLanguage].searchPlaceholder} className="bg-white text-black p-3 w-[60vh] rounded-lg"></input>
                <button className="bg-blue-600 px-6 py-3 rounded-lg m-4" onClick={handleSearch}>{lang[currentLanguage].search}</button>
            </form>
        </div>

    );
};
export default GptSearchBar;
