import React, { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";
import MovieSelected from "./components/MovieSelected";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const Context = React.createContext();

function App() {
  const [category, setCategory] = useState("now_playing");
  const [mainPage, setMainPage] = useState(true);
  const [series, setSeries] = useState(false);
  const [movieClicked, setMovieClicked] = useState(false);
  const [navShow, setNavShow] = useState(false);
  const [selection, setSelection] = useState("Discover");
  const [list, setList] = useState(false);

  const [movieData, setMovieData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]); // For storing selected genre
  const [favouriteMovies, setFavouriteMovies] = useState(() => {
    const savedFavourites = localStorage.getItem("favouriteMovies");
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  // Save favouriteMovies to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
  }, [favouriteMovies]);

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
          // console.log(url);
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
        // console.log(result.results);
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
    // console.log(searchItem);
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
    <Context.Provider
      value={{
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
        setFavouriteMovies,
      }}
      className="flex "
    >
      <Router>
        <Routes>
          <Route path="/movieinfo" element={<MovieSelected />}></Route>
          <Route
            path="/"
            element={
              <>
                <Sidebar
                  setCategory={setCategory}
                  setMainPage={setMainPage}
                  setSeries={setSeries}
                  navShow={navShow}
                  setNavShow={setNavShow}
                  setSelection={setSelection}
                  setList={setList}
                />
                <MainPage
                  category={category}
                  mainPage={mainPage}
                  series={series}
                  movieClicked={movieClicked}
                  navShow={navShow}
                  setMovieClicked={setMovieClicked}
                  setNavShow={setNavShow}
                  selection={selection}
                  list={list}
                />
              </>
            }
          ></Route>
        </Routes>
      </Router>

      {/* {movieClicked ? (
        <MovieSelected />
      ) : (
        <MainPage
          category={category}
          mainPage={mainPage}
          series={series}
          movieClicked={movieClicked}
          setMovieClicked={setMovieClicked}
        />
      )} */}
    </Context.Provider>
  );
}

export default App;
