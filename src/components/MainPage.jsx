import React from "react";
import Movies from "./Movies";
import { useState, useEffect, useContext } from "react";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";

const MainPage = ({
  category,
  mainPage,
  series,
  movieClicked,
  setMovieClicked,
  setNavShow,
  navShow,
  selection,
  list,
}) => {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const {
    movieData,
    setMovieData,
    searchItem,
    setSearchItem,
    loading,
    setLoading,
    count,
    setCount,
    genres,
    setGenres,
    selectedGenre,
    setSelectedGenre,
    handleInputChange,
    getSearchData,
    getData,
    favouriteMovies,
  } = useContext(Context);

  const getGenreNames = (genre_ids) => {
    return genre_ids
      .map((id) => {
        const genre = genres.find((genre) => genre.id === id);
        return genre ? genre.name : "";
      })
      .join(", ");
  };

  return (
    <div className=" w-4/5 bg-white ml-[20%]  px-24 py-8 lg:ml-0 lg:w-full relative md:py-5 md:px-5 dark:bg-black ">
      <div
        className="absolute top-7 left-10 hidden lg:block sm:left-4"
        onClick={() => {
          setNavShow((prev) => !prev);
        }}
      >
        <i className="bx bx-menu text-3xl hover:scale-105 cursor-pointer hover:rotate-180 transition-transform"></i>
      </div>
      {list ? (
        <div className=" p-2">
          <div className="flex flex-col justify-center items-center my-10">
            <h1
              className="font-vollkorn text-3xl"
              onClick={() => console.log(movieData)}
            >
              Your Favourite Movies
            </h1>
            <h2>List of Movies</h2>
          </div>
          <div className="grid grid-cols-4 gap-8 md:grid-cols-2  ">
            {favouriteMovies.map((movie, i) => {
              return (
                <div key={i} className=" rounded-2xl  p-1 flex flex-col gap-2 ">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                    className="rounded-2xl shadow-lg hover:scale-105 hover:cursor-pointer transition-transform object-fill"
                    alt=""
                    onClick={() => {
                      const genreNames = movie.genre;
                      navigate("/movieinfo", { state: { movie, genreNames } });
                    }}
                  />
                  <div className="flex justify-between flex-wrap">
                    <h3 className="text-md text-[#1E195A] font-medium max-w-32 ">
                      {movie.name}
                    </h3>
                    <p className="">
                      {Array.from({ length: 5 }, (_, i) => {
                        if (i < Math.floor(movie.ratings / 2)) {
                          return (
                            <span key={i} className="mr-[-3px]">
                              <i className="bx bxs-star text-yellow-300"></i>
                            </span>
                          );
                        } else if (i < movie.ratings / 2) {
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
                  <p>Date: {movie.releaseDate}</p>
                  {/* <p className="p-2 rounded-lg border-2 cursor-pointer">
                  {getGenreNames(favMovie.genre_ids)}
                </p> */}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className="navbar flex items-center justify-between">
            <div className="relative rounded-md w-56  md:ml-auto xi:w-40">
              <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"></i>
              <input
                type="text"
                className="pl-10 pr-4 py-2 w-full border-b-2 outline-none  dark:border-b-white dark:bg-black dark:text-white"
                placeholder="Search for a movie"
                value={searchItem}
                onChange={handleInputChange}
              />
            </div>
            <div className=" w-20">
              {dark ? (
                <i
                  class="bx bx-sun text-3xl dark:text-white hover:cursor-pointer"
                  onClick={toggleTheme}
                ></i>
              ) : (
                <i
                  class="bx bxs-sun dark:text-white text-3xl hover:cursor-pointer"
                  onClick={toggleTheme}
                ></i>
              )}
            </div>
          </div>
          <Movies
            data={movieData}
            genres={genres}
            loading={loading}
            setCount={setCount}
            setGenre={setSelectedGenre}
            movieClicked={movieClicked}
            setMovieClicked={setMovieClicked}
            selection={selection}
          />
        </div>
      )}
    </div>
  );
};

export default MainPage;
