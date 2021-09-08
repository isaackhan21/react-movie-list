import MovieList from "./MovieList";
import SearchBar from "./SearchBar";

const Base = ({ movies }) => {
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Base;
