import React from "react";
import { useLocation } from "react-router-dom";

const MovieSelected = () => {
  const location = useLocation();
  const { movie } = location.state || {};
  return (
    <div className=" w-full bg-white h-screen  border-2 border-green-400 relative flex items-center justify-center">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          filter: "blur(1.5px)",
        }}
        className="h-full bg-cover bg-center absolute z-0 inset-0"
      ></div>
      <div className="border-2 flex z-10 relative w-4/5 items-center">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
          className="h-96 rounded-2xl p-2"
        />
        <div className="text-white max-w-xl">
          <h1>{movie.original_name || movie.original_title}</h1>
          <p>{movie.overview}</p>
          <p>
            {Array.from({ length: 5 }, (_, i) => {
              if (i < Math.floor(movie.vote_average / 2)) {
                return (
                  <span key={i} className="mr-[-3px]">
                    <i className="bx bxs-star text-yellow-300"></i>
                  </span>
                );
              } else if (i < movie.vote_average / 2) {
                return (
                  <span key={i} className="mr-[-3px]">
                    <i className="bx bxs-star-half text-yellow-300"></i>
                  </span>
                );
              } else {
                return (
                  <span key={i} className="mr-[-3px]">
                    <i className="bx bx-star text-gray-400"></i>
                  </span>
                );
              }
            })}
          </p>
          <p>Release Date: {movie.release_date || movie.first_air_date}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieSelected;
