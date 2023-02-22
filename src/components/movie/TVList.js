import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import TVCard from "./TVCard";

const TVList = ({ name = "movie", type = "now_playing" }) => {
  const { data } = useSWR(tmdbAPI.getTvList(name, type), fetcher);
  // console.log(data);

  const movies = data?.results || [];
  return (
    <div className="movie-swiper">
      <Swiper grabCursor={"true"} spaceBetween={10} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <TVCard item={item} type={type} name={name}></TVCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TVList;
