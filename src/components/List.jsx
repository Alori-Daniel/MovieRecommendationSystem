import React from "react";
import { Context } from "../App";
import { useContext } from "react";

const List = () => {
  const { movieData, selectedGenre, setSelectedGenre } = useContext(Context);
  return <div onClick={() => console.log(movieData)}>CLick ME</div>;
};

export default List;
