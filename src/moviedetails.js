import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Details() {
let params = useParams();
const [movie, setMovie] = useState();
useEffect(() => {
    fetch("http://www.omdbapi.com/?i="+params.movieid+"&apikey=142e1265")
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, []);

  console.log(movie);
return(<div>
    {movie ? <><h1 id="detail-title" style={{textAlign: "center"}}>Movie Details</h1>
    <div style={{  width: "269px",margin: "auto"}}>
        <img src={movie.Poster} />
        <p>{movie.Title}</p>
        <p>Actors : {movie.Actors}</p>
        <p>Year: {movie.Released}</p>
        <p> Ratings : {movie.imdbRating}</p>
        <p>Runtime : {movie.Runtime}</p>
        <p>{movie.Plot}</p>
    </div></> : <h1>Loading</h1>}
 </div>);   
}

export default Details;