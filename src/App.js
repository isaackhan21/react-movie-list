import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Base from "./components/Base";

const url =
  "https://api.themoviedb.org/3/discover/movie?api_key=4d4fa02f74f80466555c39a034ecfb35&with_genres=35";

const App = () => {
  const [movies, setMovies] = useState([]);

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