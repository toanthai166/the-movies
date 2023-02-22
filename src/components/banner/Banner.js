import React from "react";
import { useNavigate } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";

const Banner = ({ name = "movie", type = "now_playing" }) => {
  const { data } = useSWR(tmdbAPI.getTvList(name, type), fetcher);

  const movies = data?.results || [];
  return (
    <section className="banner h-[500px] page-container mb-10 ">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item, name, id }) {
  const { title, overview, poster_path, backdrop_path } = item;
  const navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg max-w-[1280px]"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt=""
        className="poster w-full h-[500px] object-cover rounded-lg"
      />
      <div className="absolute left-5 gap-x-20 flex justify-between items-center bottom-10 w-full">
        <div className="items-banner px-10">
          <h2 className="title font-bold text-3xl text-center mb-5">{title}</h2>
          <span className=" overview inline-block text-lg mb-5  w-[600px] mx-auto">
            {overview}
          </span>
          <div className="btn flex items-center justify-center gap-x-5">
            <button
              onClick={() => navigate(`/movie/${item.id}`)}
              className="btn-trailer border bg-red-600 font-medium text-white rounded-full py-3 px-6"
            >
              Watch Now
            </button>
            <button className="btn-trailers border-2 font-medium bg-transition text-white transition-all  hover:ease-out duration-300 hover:bg-white hover:text-red-600  rounded-full py-3 px-6">
              Watch Trailer
            </button>
          </div>
        </div>
        <div className="w-[270px] h-[420px] mr-40 ">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt=""
            className="logo-banner w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
