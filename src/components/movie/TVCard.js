import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const TVCard = ({ item, name }) => {
  // console.log(name);
  const navigate = useNavigate();
  if (!item) return null;
  const { title, poster_path, id } = item;
  // console.log(item);
  return (
    <div className="movie-list">
      <div className="movie-card h-[350px] p-3 rounded-3xl relative  ">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="w-full h-full object-cover  rounded-3xl mb-3"
        />
        <Button onClick={() => navigate(`/${name}/${id}`)}></Button>
        <h2 className="text-xl font-medium text-center transition-all mb-3 hover:text-red-600 ">
          {title || item.name}
        </h2>
        <span className=" border p-1 absolute text-xs top-[20px] left-[20px] rounded-lg text-white bg-red-600 border-red-500 ">
          HD - 1080p
        </span>
      </div>
    </div>
  );
};

export default TVCard;
