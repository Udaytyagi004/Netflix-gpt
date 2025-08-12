import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import Header from "./Header";

const MainContainer = () =>{
    const movies = useSelector((store) => store.movies?.upComigMovies);
    if(!movies) return;

    const mainMovie = movies[1];
    
    const { original_title, overview, id } = mainMovie;

    return (
        <div className="relative">
             <VideoBackground  movieId={id}/>
             <Header />

             <VideoTitle title={original_title} description={overview} />
                         
             
                      

        </div>

    )
};

export default MainContainer;