import { useSelector } from "react-redux";
import { useTrailor } from "../customHooks/useTrailor";

const VideoBackground = ({movieId}) =>{
 const trailor = useSelector((store)=> store.movies?.trailor);
  useTrailor(movieId);

 if(!trailor) return
 
   
   

    return (
        <div className="absolute top-0 -mt-20 z-0">
           <iframe  className="w-screen aspect-video opacity-70 "  src={`https://www.youtube.com/embed/${trailor.key}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${trailor.key}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>

        </div>
    )
};
export default VideoBackground;