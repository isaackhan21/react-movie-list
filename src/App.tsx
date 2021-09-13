import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Base from "./components/Base";

const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`;

interface IState {
  movies: {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    release_date: string;
  }[];
}

const App = () => {
  const [movies, setMovies] = useState<IState["movies"]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
  return (
    <div className="container">
      <Header title="Comedy Movies List" />
      <Base movies={movies} />
    </div>
  );
};

export default App;
