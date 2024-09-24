import React, { useEffect, useState } from "react";
import havert from "../assets/havert.jpeg";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";

const Movies = ({
  data,
  loading,
  setCount,
  genres,
  setGenre,
  movieClicked,
  setMovieClicked,
  selection,
}) => {
  const navigate = useNavigate();

  const getGenreNames = (genre_ids) => {
    return genre_ids
      .map((id) => {
        const genre = genres.find((genre) => genre.id === id);
        return genre ? genre.name : "";
      })
      .join(", ");
  };
  const handlePageChange = (page) => {
    setCount(page);
  };
  const handleMovieClick = (movie) => {
    const genreNames = getGenreNames(movie.genre_ids);
    navigate("/movieinfo", { state: { movie, genreNames } });
  };
  return (
    <div className="w-full  flex flex-col items-center gap-2 ">
      <div className="flex w-full justify-between  my-8 items-center gap-2   p-4 lg:flex-col">
        <h2
          className="text-2xl font-vollkorn "
          onClick={() => {
            console.log(data);
          }}
        >
          {selection}
        </h2>
        <div className="grid gap-6 self-center grid-cols-5 mi:grid-cols-3 xi:grid-cols-2">
          <p
            className="px-2 py-2 rounded-lg border-2 cursor-pointer hover:bg-blue-950 hover:text-white"
            onClick={() => setGenre(28)}
          >
            Action
          </p>
          <p
            className="px-2 py-2 rounded-lg border-2 cursor-pointer hover:bg-blue-950 hover:text-white"
            onClick={() => setGenre(10749)}
          >
            Romance
          </p>
          <p
            className="px-2 py-2 rounded-lg border-2 cursor-pointer hover:bg-blue-950 hover:text-white"
            onClick={() => setGenre(878)}
          >
            Sci-Fi
          </p>
          <p
            className="px-2 py-2 rounded-lg border-2 cursor-pointer hover:bg-blue-950 hover:text-white"
            onClick={() => setGenre(35)}
          >
            Comedy
          </p>
          <p
            className="px-2 py-2 rounded-lg border-2 cursor-pointer hover:bg-blue-950 hover:text-white"
            onClick={() => setGenre(53)}
          >
            Horror
          </p>
        </div>
      </div>
      {loading ? (
        <p>Loading movies.....</p>
      ) : data.length > 2 ? (
        <div className="grid grid-cols-4 gap-8 md:grid-cols-2  ">
          {data.map((movie, i) => {
            return (
              <div key={i} className=" rounded-2xl  p-1 flex flex-col gap-2 ">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="rounded-2xl shadow-lg hover:scale-105 hover:cursor-pointer transition-transform object-fill"
                  alt=""
                  onClick={() => handleMovieClick(movie)}
                />
                <div className="flex justify-between flex-wrap">
                  <h3 className="text-md text-[#1E195A] font-medium max-w-32 ">
                    {movie.original_title || movie.original_name}
                  </h3>
                  <p className="">
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
                </div>
                <p>Date: {movie.release_date || movie.first_air_date}</p>
                <p className="p-2 rounded-lg border-2 cursor-pointer">
                  {getGenreNames(movie.genre_ids)}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-3xl">No movie found</p>
      )}

      <Pagination defaultCurrent={1} total={50} onChange={handlePageChange} />
    </div>
  );
};

export default Movies;
