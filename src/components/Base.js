import MovieList from "./MovieList";
import Inputs from "./Inputs";

const Base = ({ movies }) => {
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Base;
