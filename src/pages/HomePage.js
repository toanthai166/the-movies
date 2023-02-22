import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import TVList from "../components/movie/TVList";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <section className="home-page page-container mb-20">
        <div className="flex justify-between mb-5">
          <h2 className="mb-5 capitalize text-3xl font-bold">
            Trending Movies
          </h2>
          <button
            onClick={() => navigate("/movies")}
            className="btn-homepage text-xl border-4 font-bold bg-transition text-white transition-all  hover:ease-out duration-300 hover:bg-white hover:font-bold hover:text-red-600  rounded-full py-2 px-4"
          >
            See More
          </button>
        </div>
        <TVList name="movie" type="now_playing"></TVList>
      </section>
      <section className="home-page  page-container mb-20">
        <div className="flex justify-between mb-5">
          <h2 className="mb-5 capitalize text-3xl font-bold">
            Top Rated Movies
          </h2>

          <button
            onClick={() => navigate("/movies")}
            className=" btn-homepage text-xl border-4 font-bold bg-transition text-white transition-all  hover:ease-out duration-300 hover:bg-white hover:font-bold hover:text-red-600  rounded-full py-2 px-4"
          >
            See More
          </button>
        </div>
        <TVList name="movie" type="top_rated"></TVList>
      </section>
      <section className="home-page  page-container mb-20">
        <div className="flex justify-between mb-5">
          <h2 className="mb-5 capitalize text-3xl font-bold">
            Trending TV Series
          </h2>

          <button
            onClick={() => navigate("/tv")}
            className="btn-homepage text-xl border-4 font-bold bg-transition text-white transition-all  hover:ease-out duration-300 hover:bg-white hover:font-bold hover:text-red-600  rounded-full py-1 px-2"
          >
            See More
          </button>
        </div>

        <TVList name="tv" type="top_rated"></TVList>
      </section>
      <section className="home-page  page-container mb-20">
        <div className="flex justify-between mb-5">
          <h2 className="mb-5 capitalize text-3xl font-bold">
            Top Rated TV Series
          </h2>

          <button
            onClick={() => navigate("/tv")}
            className="btn-homepage text-xl border-4 font-bold bg-transition text-white transition-all  hover:ease-out duration-300 hover:bg-white hover:font-bold hover:text-red-600  rounded-full py-2 px-4"
          >
            See More
          </button>
        </div>

        <TVList name="tv" type="popular"></TVList>
      </section>
    </Fragment>
  );
};

export default HomePage;
