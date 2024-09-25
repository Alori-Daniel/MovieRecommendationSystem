import { useEffect, useState } from "react";
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

  return (
    <Context.Provider value={{}} className="flex ">
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
