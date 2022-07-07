import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState("avengers");
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=c618a12d`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, [search]);

  function getDetails() {
    var searchedMovie = document.getElementById('search').value
    setSearch(searchedMovie);
    document.getElementById('search').value = ''
  };
  console.log(movies);
  return (
    <div>
        <div className="search-container">
            <input type="text" id="search"  className="search-box" placeholder="Search the movie"/>
            <button onClick={getDetails} style={{height: "52px",
    backgroundColor: "#0a08f3",
    width: "70px"}} >Search</button>
        </div>
            {/* <Link to="/create_blog" >
                <button style={{  marginLeft:"1200px"  ,backgroundColor: "#5ee5f0", height: "39px",
                 width: "175px"}}><i class="fa fa-edit"></i>Create A Blog</button>
            </Link> */}



        <div className="movie-list">
        {
            movies && <> {movies.Search.map((movie) => (
                <div className="movies" key={movie.imdbID}>
                  {/* <img src={movie.Poster} /> */}
                  <Link className="movie-container" to={`/moviedetails/${movie.imdbID}`}><div className="movie">
                  <img src={movie.Poster} /><p className="movie-title">{movie.Title}</p>
                </div></Link>
                </div>
              ))}</>
            }
     
        </div>
    </div>
  );
}
export default Home;
