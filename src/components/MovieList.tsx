import Movie from "./Movie";
import SearchBar from "./Inputs";
import { useState } from "react";
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

interface IState {
  searchTerm: string;
  sortRating: string;
}

const MovieList: React.FC<IProps> = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState<IState["searchTerm"]>("");
  const [sortRating, setSortRating] = useState<IState["sortRating"]>("");

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortRating(e.target.value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const sortedMovies = movies.sort((a: any, b: any): any => {
    if (sortRating === "Highest Rating") {
      return parseFloat(b.vote_average) - parseFloat(a.vote_average);
    } else if (sortRating === "Lowest Rating") {
      return parseFloat(a.vote_average) - parseFloat(b.vote_average);
    }
  });

  return (
    <div className="movie-list">
      <Inputs handleSort={handleSort} handleSearch={handleSearch} />

      {movies.length > 0 &&
        sortedMovies
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
              overview={movie.overview}
              release_date={movie.release_date}
            />
          ))}
    </div>
  );
};

export default MovieList;
