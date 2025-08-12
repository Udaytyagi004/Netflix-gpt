const MovieCard = ({movie}) =>{
    const {title, backdrop_path,poster_path} = movie;
    
    return (
        <div className="m-2 w-80 text-white">
            <img src={"https://image.tmdb.org/t/p/w500" + backdrop_path} alt="poster" />
            <p className="font-bold text-lg "> {title}</p>
        </div>
    )
};
export default MovieCard;