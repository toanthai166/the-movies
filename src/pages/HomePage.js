import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import TVList from "../components/movie/TVList";
import styled from "styled-components";
const HomePageStyles = styled.div`
  padding: 0 10px;
  margin-bottom: 50px;
  .home-page {
    margin-bottom: 60px;
  }
  .header {
    display: flex;
    height: 50px;
    margin-bottom: 40px;
    justify-content: space-between;
  }
  .header h2 {
    margin-bottom: 20px;
    font-size: 30px;
    width: 100%;
    height: 100%;
    font-weight: 600;
  }
  .header button {
    font-size: 16px;
    font-weight: 600;
    border: 2px solid red;
    padding: 0 25px;
    border-radius: 50px;
    :hover {
      background: white;
      color: red;
      transition: all 0.5s linear 0s;
    }
  }
  @media only screen and (max-width: 1024px) {
    section .header h2 {
      font-size: 16px;
    }
    section .header button {
      font-size: 12px;
      width: 150px;
      height: 30px;
    }
    .movie-list .movie-card {
      border-radius: 20px;
      position: relative;
      height: 350px;
      margin: 0 10px;
    }
    .btn-play {
      left: 30%;
    }
  }
  @media only screen and (max-width: 760px) {
    .movie-list .movie-card {
      border-radius: 20px;
      position: relative;
      height: 350px;
      margin: 0 10px;
    }
  }
`;

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <HomePageStyles>
        <section className="home-page page-container">
          <div className="header">
            <h2>Trending Movies</h2>
            <button onClick={() => navigate("/movies")}>See More</button>
          </div>
          <TVList name="movie" type="now_playing"></TVList>
        </section>
        <section className="home-page  page-container ">
          <div className="header">
            <h2>Top Rated Movies</h2>

            <button onClick={() => navigate("/movies")}>See More</button>
          </div>
          <TVList name="movie" type="top_rated"></TVList>
        </section>
        <section className="home-page  page-container">
          <div className="header">
            <h2>Trending TV Series</h2>

            <button onClick={() => navigate("/tv")}>See More</button>
          </div>

          <TVList name="tv" type="top_rated"></TVList>
        </section>
        <section className="home-page  page-container">
          <div className="header">
            <h2>Top Rated TV Series</h2>
            <button onClick={() => navigate("/tv")}>See More</button>
          </div>

          <TVList name="tv" type="popular"></TVList>
        </section>
      </HomePageStyles>
    </Fragment>
  );
};

export default HomePage;
