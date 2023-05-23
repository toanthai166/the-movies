import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import styled from "styled-components";
const TVCardStyles = styled.div`
  .movie-list {
    width: 250px;
    height: 400px;
    opacity: 0.999;
    object-fit: cover;
    margin: 0 auto;
    .btn-play {
      transform: scale(0);
      transition: all 0.3s linear 0s;
      border: none;
    }
    :hover {
      .btn-play {
        transform: scale(1);
        background: red;
        box-shadow: rgb(255 0 0 / 30%) 0px 0px 7px 8px;
        border: none;
      }
    }
  }
  .movie-list .movie-card {
    border-radius: 20px;
    position: relative;
    height: 350px;
    margin: 0 10px;
  }

  .movie-card img {
    border-radius: 20px;
    object-fit: cover;
    margin-bottom: 20px;
    width: 100%;
    height: 100%;
  }
  .movie-card a {
    font-size: 20px;
    text-align: center;
    display: block;
    font-weight: 400;
    :hover {
      color: red;
    }
  }
  .movie-card span {
    border: 1px solid red;
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 12px;
    border-radius: 8px;
    color: white;
    background-color: red;
  }
  @media only screen and (max-width: 1024px) {
    .movie-list {
      width: 100%;
      height: 100%;
      margin-bottom: 10px;
    }
    .movie-list .movie-card {
      border-radius: 20px;
      position: relative;
      height: 100%;
      margin: 0 10px;
    }
    .movie-card img {
      width: 100%;
      height: 90%;
    }
    .btn-play {
      top: 50%;
      left: 40%;
    }
  }
`;

const TVCard = ({ item, name }) => {
  // console.log(name);
  const navigate = useNavigate();
  if (!item) return null;
  const { title, poster_path, id } = item;
  // console.log(item);
  return (
    <TVCardStyles>
      <div className="movie-list">
        <div className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
          <Button onClick={() => navigate(`/${name}/${id}`)}></Button>
          <a href={`/${name}/${id}`}>{title || item.name}</a>
          <span>HD - 1080p</span>
        </div>
      </div>
    </TVCardStyles>
  );
};

export default TVCard;
