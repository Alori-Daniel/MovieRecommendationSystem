import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieSelected = () => {
  const location = useLocation();
  const { movie, genreNames } = location.state || {};
  const [starClicked, setStarClicked] = useState(false);

  // console.log(typeof movie, movie);

  const { favouriteMovies, setFavouriteMovies } = useContext(Context);
  const movieShown = [
    {
      id: movie.id,
      name: movie.original_name || movie.original_title,
      poster: movie.poster_path,
      genre: genreNames,
      releaseDate: movie.release_date || movie.first_air_date,
      ratings: movie.vote_average,
      clicked: true,
      description: movie.overview,
      background: movie.backdrop_path,
    },
  ];
  const handleAddFavourite = () => {
    setStarClicked((prev) => !prev);

    setFavouriteMovies((prevList) => {
      // Check if the movie is already in the favorites list
      const isMovieInFavourites = prevList.some(
        (favourite) => favourite.id === movie.id
      );

      // If the movie is already in the list, toggle the 'clicked' state for that movie
      if (isMovieInFavourites) {
        return prevList.filter((favourite) => favourite.id !== movie.id);
      }

      //If the movie is not in the list, add it with 'clicked' set to true

      return [...prevList, ...movieShown];
    });
  };

  return (
    <div className=" w-full bg-white  min-h-screen  relative flex items-center justify-center py-3">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.background
          })`,
          filter: "blur(1px)",
        }}
        className=" h-full bg-cover bg-center absolute z-0 inset-0 aspect-w-16 aspect-h-9 "
      ></div>
      <div className=" flex z-10 relative w-4/5 items-center flex-wrap">
        <img
          src={`https://image.tmdb.org/t/p/w500${
            movie.poster_path || movie.poster
          }`}
          alt={movie.original_title || movie.name}
          className="h-96 rounded-2xl p-2 md:h-72 transition-transform"
        />
        <div className=" flex flex-col gap-2">
          <div className="flex flex-col gap-3 text-white max-w-xl bg-black bg-opacity-50 z-20 shadow-lg p-2 rounded-lg">
            <h1 className="text-5xl font-vollkorn">
              {movie.original_name || movie.original_title || movie.name}
            </h1>
            <p>{movie.overview || movie.description}</p>
            <p>
              {Array.from({ length: 5 }, (_, i) => {
                if (i < Math.floor(movie.vote_average || movie.ratings / 2)) {
                  return (
                    <span key={i} className="">
                      <i className="bx bxs-star text-yellow-300"></i>
                    </span>
                  );
                } else if (i < movie.vote_average || movie.ratings / 2) {
                  return (
                    <span key={i} className="">
                      <i className="bx bxs-star-half text-yellow-300"></i>
                    </span>
                  );
                } else {
                  return (
                    <span key={i} className="">
                      <i className="bx bx-star text-gray-400"></i>
                    </span>
                  );
                }
              })}
            </p>
            <p>Genre : {genreNames}</p>
            <p>
              Release Date:{" "}
              {movie.release_date || movie.first_air_date || movie.releaseDate}
            </p>
          </div>
          <div className=" px-2 flex gap-2 flex-wrap py-2">
            <button className="text-white bg-red-600 bg-opacity-1 max-w-40 flex transition-all justify-center  gap-2 px-2 items-center rounded-lg h-12 cursor-pointer hover:scale-105 w-40">
              Watch Trailer <i className="bx bxl-youtube text-3xl"></i>
            </button>
            <button
              className="text-white bg-black bg-opacity-1 max-w-40 flex transition-all justify-center  gap-2 px-2 items-center rounded-lg h-12 cursor-pointer hover:scale-105 w-40"
              onClick={() => {
                handleAddFavourite();
                if (favouriteMovies.some((fav) => fav.id === movie.id)) {
                  toast.info("Removed From Favourites");
                } else {
                  toast.success("Added to Favourites");
                }
              }}
            >
              Favourite
              {favouriteMovies.some(
                (favourite) => favourite.id === movie.id && favourite.clicked
              ) ? (
                <i className="bx bxs-star text-2xl text-yellow-400"></i>
              ) : (
                <i className="bx bx-star text-2xl  "></i>
              )}
            </button>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSelected;
