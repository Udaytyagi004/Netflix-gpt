import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () =>{
     const currentLanguage = useSelector((state)=> state.config.language)

    return(
        <div className="flex justify-center items-center m-10">
            <form className="">
                <input type="text" placeholder={lang[currentLanguage].searchPlaceholder} className="bg-white text-black p-3 w-[60vh] rounded-lg"></input>
                <button className="bg-blue-600 px-6 py-3 rounded-lg m-4">{lang[currentLanguage].search}</button>
            </form>
        </div>

    );
};
export default GptSearchBar;
