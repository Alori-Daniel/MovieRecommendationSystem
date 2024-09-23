import React from "react";
import Movies from "./Movies";
import { useState, useEffect } from "react";

const MainPage = ({ category, mainPage, series }) => {
  const [movieData, setMovieData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(""); // For storing selected genre

  const getData = async (category, count, genre = "") => {
    setLoading(true);
    try {
      let url = "";
      if (series) {
        url = `https://api.themoviedb.org/3/discover/tv?api_key=6522eb56ca3e1a27a115cef700d64b8e&language=en-US&page=${count}`;
      } else if (mainPage) {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=6522eb56ca3e1a27a115cef700d64b8e&language=en-US&page=${count}`;
        if (genre) {
          url += `&with_genres=${genre}`;
        }
      } else {
        url = `https://api.themoviedb.org/3/movie/${category}?api_key=6522eb56ca3e1a27a115cef700d64b8e&language=en-US&page=${count}`;
        if (genre) {
          url += `&with_genres=${genre}`;
          console.log(url);
        }
      }
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setMovieData(result.results);
      } else {
        alert("error");
      }
    } catch {
      alert("problem fetching");
    }
    setLoading(false);
  };
  const getGenres = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=6522eb56ca3e1a27a115cef700d64b8e&language=en-US`
      );
      if (response.ok) {
        const result = await response.json();
        setGenres(result.genres);
      } else {
        alert("Error fetching genres");
      }
    } catch (error) {
      alert("Problem fetching genres");
    }
  };

  const getSearchData = async (query) => {
    setLoading(true);
    try {
      let url = "";
      if (series) {
        url = `https://api.themoviedb.org/3/search/tv?api_key=6522eb56ca3e1a27a115cef700d64b8e&language=en-US&query=${query}`;
      } else {
        url = `https://api.themoviedb.org/3/search/movie?api_key=6522eb56ca3e1a27a115cef700d64b8e&language=en-US&query=${query}`;
      }
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        console.log(result.results);
        setMovieData(result.results);
      } else {
        alert("error");
      }
    } catch {
      alert("problem fetching");
    }
    setLoading(false);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchItem(value);
    console.log(searchItem);
    if (value.length > 2) {
      getSearchData(value);
    } else {
      getData(category, count);
    }
  };

  useEffect(() => {
    getData(category, count, selectedGenre);
    getGenres();
  }, [count, category, selectedGenre]);

  return (
    <div className=" w-4/5 bg-white ml-[20%] border-2 border-green-400 px-24 py-8 ">
      <div className="navbar flex items-center justify-between">
        <div className="relative rounded-md w-56">
          <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"></i>
          <input
            type="text"
            className="pl-10 pr-4 py-2 w-full border-b-2 outline-none"
            placeholder="Search for a movie"
            value={searchItem}
            onChange={handleInputChange}
          />
        </div>
        <ul className="flex gap-3 text-[#382E6B]">
          <li>Films</li>
          <li>Socials</li>
          <li>Videos</li>
          <li>News</li>
          <li>About</li>
        </ul>
      </div>
      <Movies
        data={movieData}
        genres={genres}
        loading={loading}
        setCount={setCount}
        setGenre={setSelectedGenre}
      />
    </div>
  );
};

export default MainPage;
