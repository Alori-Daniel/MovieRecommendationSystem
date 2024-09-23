import React, { useEffect, useState } from "react";
import havert from "../assets/havert.jpeg";
import { Pagination } from "antd";

const Movies = ({ data, loading, setCount, genres, setGenre }) => {
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
  return (
    <div className="w-full  flex flex-col items-center gap-2 ">
      <div className="flex w-full justify-between  my-8 items-center  p-4">
        <h2
          className="text-2xl "
          onClick={() => {
            console.log(data);
          }}
        >
          AJ Movies
        </h2>
        <div className="flex gap-6 self-center">
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
        {/* <div className="flex gap-6 flex-wrap">
          <select name="games" id="games" className="px-6 py-2 rounded-full">
            <option value="">All Games</option>
            <option value="game1">Game 1</option>
            <option value="game2">Game 2</option>
            <option value="game3">Game 3</option>
          </select>
          <select name="games" id="games" className="px-6 py-2 rounded-full">
            <option value="">All Language</option>
            <option value="game1">Game 1</option>
            <option value="game2">Game 2</option>
            <option value="game3">Game 3</option>
          </select>
          <select name="games" id="games" className="px-6 py-2 rounded-full">
            <option value="">All Countries</option>
            <option value="game1">Game 1</option>
            <option value="game2">Game 2</option>
            <option value="game3">Game 3</option>
          </select>
          <select name="games" id="games" className="px-6 py-2 rounded-full">
            <option value="">All Rating</option>
            <option value="game1">Game 1</option>
            <option value="game2">Game 2</option>
            <option value="game3">Game 3</option>
          </select>
          <select name="games" id="games" className="px-6 py-2 rounded-full">
            <option value="">Sort by</option>
            <option value="game1">Game 1</option>
            <option value="game2">Game 2</option>
            <option value="game3">Game 3</option>
          </select>
        </div> */}
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
                />
                <div className="flex justify-between flex-wrap">
                  <h3 className="text-md text-[#1E195A] font-medium max-w-32 ">
                    {movie.original_title}
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
                <p>Date: {movie.release_date}</p>
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
