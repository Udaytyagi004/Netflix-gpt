import GptSearchBar from "./GptSerachBar";
import lang from "../utils/languageConstants";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/configSlice";

const GptSearchPage = () =>{
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state)=> state.config.language)

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));

       
    }

    return(
        <div className="bg-black text-white  h-screen"> 
           <div className="flex justify-end p-5"> <select className="bg-white text-black p-2" onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map((language)=> <option key={language.identifier} value={language.identifier} >{language.name}</option> )}
                
                    
            </select> 
            </div>
            <h1 className="font-bold text-center mt-20 text-4xl">{lang[currentLanguage].heading}</h1>
            <h2 className="font-bold text-center  text-2xl m-4">{lang[currentLanguage].subHeading}</h2>
            <GptSearchBar />
            </div>
    )
}
export default GptSearchPage;