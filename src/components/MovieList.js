import Movie from "./Movie";
import SearchBar from "./SearchBar";
import { useState } from "react";

const MovieList = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <SearchBar />
      <input
        type="text"
        placeholder="Search movie..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {movies.length > 0 &&
        movies
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
            />
          ))}
    </div>
  );
};

export default MovieList;
