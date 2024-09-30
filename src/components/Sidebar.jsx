import React from "react";
import "boxicons/css/boxicons.min.css";
import { useNavigate } from "react-router-dom";

const Sidebar = ({
  setCategory,
  setMainPage,
  setSeries,
  navShow,
  setNavShow,
  setSelection,
  setList,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`h-screen bg-blue-950 w-1/5  dark:bg-white  dark:text-blue-950 border-gray-900  flex flex-col items-center py-8 text-white fixed top-0 left-0 z-10 lg:w-64 sm:w-56 sm:overflow-y-auto transition-all duration-400 ease-in-out ${
        navShow ? "lg:left-0" : "lg:-left-full"
      }`}
    >
      {navShow ? (
        <div
          className="absolute top-6 right-5"
          onClick={() => setNavShow((prev) => !prev)}
        >
          <i className="bx bx-x-circle text-2xl cursor-pointer"></i>
        </div>
      ) : (
        ""
      )}
      <div className=" w-full p-2 flex flex-col gap-4 h-screen ">
        <div className="flex flex-col gap-6  w-4/5 mx-auto md:w-full px-6 font-vollkorn">
          <h1 className="text-3xl font-bold text-white mb-4 lg:text-2xl font-vollkorn animate-title">
            AJMOVIES
          </h1>
          <p
            className="text-lg	font-medium hover:text-yellow-300 hover:cursor-pointer"
            onClick={() => {
              navigate("/");
              setCategory("discover");
              setMainPage(true);
              setSeries(false);
              setSelection("Discover");
              setList(false);
              setNavShow(false);
            }}
          >
            Films
          </p>
          <p
            className="text-lg	font-medium hover:text-yellow-300 hover:cursor-pointer"
            onClick={() => {
              navigate("/");
              setCategory("tv_shows");
              setMainPage(false);
              setSeries(true);
              setSelection("Tv Shows");
              setList(false);
              setNavShow(false);
            }}
          >
            Series
          </p>
          <p
            className="text-lg	font-medium hover:text-yellow-300 hover:cursor-pointer"
            onClick={() => {
              setList(true);
              setNavShow(false);
            }}
          >
            My List
          </p>
        </div>
        <hr />
        <div className="my-2 mb-auto">
          <div className="flex flex-col gap-8  w-4/5 mx-auto md:w-full font-medium px-6 ">
            <div className="flex gap-2 items-center hover:cursor-pointer hover:text-yellow-300">
              <i className="bx bx-film text-2xl font-thin"></i>
              <p
                onClick={() => {
                  navigate("/");
                  setCategory("popular");
                  setMainPage(false);
                  setSeries(false);
                  setSelection("Popular");
                  setList(false);
                  setNavShow(false);
                }}
              >
                Popular
              </p>
            </div>
            <div className="flex gap-2 items-center hover:cursor-pointer hover:text-yellow-300">
              <i className="bx bx-barcode text-2xl font-thin "></i>
              <p
                onClick={() => {
                  navigate("/");
                  setCategory("top_rated");
                  setMainPage(false);
                  setSeries(false);
                  setSelection("Top Rated");
                  setList(false);
                  setNavShow(false);
                }}
              >
                Top Rated
              </p>
            </div>
            <div className="flex gap-2 items-center hover:cursor-pointer hover:text-yellow-300">
              <i className="bx bx-movie text-2xl font-thin "></i>
              <p
                onClick={() => {
                  navigate("/");
                  setCategory("upcoming");
                  setMainPage(false);
                  setSeries(false);
                  setSelection("Upcoming");
                  setList(false);
                  setNavShow(false);
                }}
              >
                Upcoming
              </p>
            </div>
            <div className="flex gap-2 items-center hover:cursor-pointer hover:text-yellow-300">
              <i className="bx bx-movie-play text-2xl font-thin "></i>
              <p
                onClick={() => {
                  navigate("/");
                  setCategory("now_playing");
                  setMainPage(false);
                  setSeries(false);
                  setSelection("Now Playing");
                  setList(false);
                  setNavShow(false);
                }}
              >
                Now Playing
              </p>
            </div>
            <div className="flex gap-2 items-center hover:cursor-pointer hover:text-yellow-300">
              <i className="bx bx-tv text-2xl font-thin "></i>
              <p
                onClick={() => {
                  navigate("/");
                  setCategory("tv_shows");
                  setMainPage(false);
                  setSeries(true);
                  setSelection("Tv Shows");
                  setList(false);
                  setNavShow(false);
                }}
              >
                Tv Shows
              </p>
            </div>
            <div className="flex gap-2 items-center hover:cursor-pointer hover:text-yellow-300">
              <i className="bx bx-wallet-alt text-2xl font-thin "></i>
              <p>Commercials</p>
            </div>
          </div>
        </div>
        <div className="icons flex w-4/5 mx-auto  gap-2 justify-center">
          <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center hover:scale-125">
            <a href="https://web.facebook.com/daniel.alori.16" target="_blank">
              <i className="bx bxl-facebook text-blue-600"></i>
            </a>
          </div>
          <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center hover:scale-125">
            <a href="mailto:aloridaniel123@gmail.com" target="_blank">
              <i className="bx bx-envelope text-gray-800"></i>
            </a>
          </div>
          <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center hover:scale-125">
            <a href="https://www.instagram.com/daniel_alori/" target="_blank">
              {" "}
              <i className="bx bxl-instagram text-red-300"></i>
            </a>
          </div>
          <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center hover:scale-125">
            <a href="https://x.com/AloriDaniel" target="_blank">
              {" "}
              <i className="bx bxl-twitter text-blue-400 "></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
