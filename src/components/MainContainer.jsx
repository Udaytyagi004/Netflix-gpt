import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import Header from "./Header";

const MainContainer = () =>{
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[8];
    
    const { original_title, overview, id } = mainMovie;

    return (
        <div className="relative">
             <Header />
           <VideoTitle title={original_title} description={overview} />
                       <VideoBackground  movieId={id}/>

        </div>

    )
};

export default MainContainer;