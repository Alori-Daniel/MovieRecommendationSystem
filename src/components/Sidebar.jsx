import React from "react";
import "boxicons/css/boxicons.min.css";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setCategory, setMainPage, setSeries }) => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-blue-950 w-1/5 	border-gray-900 sm:w-2/5 flex flex-col items-center py-8 text-white fixed top-0 left-0">
      <div className=" w-full p-2 flex flex-col gap-4 h-screen ">
        <div className="flex flex-col gap-6  w-4/5 mx-auto md:w-full px-6">
          <h1 className="text-3xl font-bold text-white mb-4 lg:text-2xl">
            AJMOVIES
          </h1>
          <p
            className="text-lg	font-medium hover:text-yellow-300 hover:cursor-pointer"
            onClick={() => {
              navigate("/");
              setCategory("discover");
              setMainPage(true);
              setSeries(false);
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
            }}
          >
            Series
          </p>
          <p className="text-lg	font-medium hover:text-yellow-300 hover:cursor-pointer">
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
          <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center">
            <i className="bx bxl-facebook text-blue-600"></i>
          </div>
          <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center">
            <i className="bx bx-envelope text-gray-800"></i>
          </div>
          <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center">
            <i className="bx bxl-instagram text-red-300"></i>
          </div>
          <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center">
            <i className="bx bxl-twitter text-blue-400"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
