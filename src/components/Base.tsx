import MovieList from "./MovieList";
import Inputs from "./Inputs";
import React from "react";

interface IProps {
  movies: {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    release_date: string;
  }[];
}

const Base: React.FC<IProps> = ({ movies }) => {
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Base;
