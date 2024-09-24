import { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";
import MovieSelected from "./components/MovieSelected";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [category, setCategory] = useState("now_playing");
  const [mainPage, setMainPage] = useState(true);
  const [series, setSeries] = useState(false);
  const [movieClicked, setMovieClicked] = useState(false);

  return (
    <div className="flex ">
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
                />
                <MainPage
                  category={category}
                  mainPage={mainPage}
                  series={series}
                  movieClicked={movieClicked}
                  setMovieClicked={setMovieClicked}
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
    </div>
  );
}

export default App;
