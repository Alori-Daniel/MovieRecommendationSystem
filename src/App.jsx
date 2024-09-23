import { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";

function App() {
  const [category, setCategory] = useState("now_playing");
  const [mainPage, setMainPage] = useState(true);
  const [series, setSeries] = useState(false);

  return (
    <div className="flex ">
      <Sidebar
        setCategory={setCategory}
        setMainPage={setMainPage}
        setSeries={setSeries}
      />
      <MainPage category={category} mainPage={mainPage} series={series} />
    </div>
  );
}

export default App;
