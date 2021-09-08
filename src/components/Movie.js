const IMG_URL = "https://image.tmdb.org/t/p/w500";

const Movie = ({ title, poster_path, vote_average }) => {
  return (
    <div>
      <img src={IMG_URL + poster_path} alt={title} />
      <h2>{title}</h2>
      <h2>Average Rating: {vote_average}</h2>
    </div>
  );
};

export default Movie;
