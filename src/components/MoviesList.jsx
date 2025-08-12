import MovieCard from "./MovieCard";

const MoviesList = ({title , movies}) =>{

    if(!movies) return;

   
    

   return(
    <div className="m-2">
        <h1 className="text-white text-lg  text-2xl mx-5 ">
            {title}
        </h1> 
        <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide m-2">
          {movies.map((movie) => (
      
        <div key={movie.id}>
        <MovieCard movie={movie} />
      </div>
      
    ))}
        </div>
       
    
  </div>

   )
    }
export default MoviesList;