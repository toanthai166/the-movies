import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import styled from "styled-components";
const BannerStyles = styled.div`
  margin: 60px 0;
  opacity: 0.999;
  .banner {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    position: relative;
  }
  .banner > img {
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.6);
  }
  .banner .poster {
    object-fit: cover;
    border-radius: 8px;
    width: 100%;
    height: 500px;
  }
  .banner-item {
    position: absolute;
    top: 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 5%;
    gap: 60px;
  }

  .content {
    padding: 0 40px;
    width: 65%;
    height: 100%;
  }
  .content .title {
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }
  .content .overview {
    font-size: 18px;
    width: 600px;
    margin: 0 auto;
    display: inline-block;
  }
  .content .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
  .content .btn button {
    border: 1px solid;
    padding: 10px 20px;
    border-radius: 50px;
    font-weight: 400;
  }
  .content .btn .now {
    background-color: rgb(255, 0, 0);
    transition: all 0.3s linear 0s;
    box-shadow: rgba(255, 0, 0, 0.3) 0px 0px 7px 8px;
    margin-right: 20px;
    :hover {
      box-shadow: rgba(255, 0, 0, 0.3) 0px 0px 14px 15px;
    }
  }
  .content .btn .trailer {
    transition: all 0.3s linear 0s;
    :hover {
      background: white;
      color: rgb(255, 0, 0);
    }
  }
  .banner-img {
    width: 35%;
    height: 420px;
    margin-right: 40px;
  }
  .banner-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  @media only screen and (max-width: 1024px) {
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 0;
    }
    .content .title {
      font-size: 18px;
      text-align: center;
    }
    .banner-img {
      /* display: none; */
    }
  }
  @media only screen and (max-width: 760px) {
    .banner-item {
      display: flex;
      width: 100%;
      padding: 20px 10px;
      left: 0;
      flex-direction: column;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 0px 0px;
    }
    .content .overview {
      width: 100%;
      padding: 0 20px;
      height: 194px;
      overflow: hidden;
      -webkit-line-clamp: 3;
      text-overflow: ellipsis;
    }
    .content .title {
      font-size: 22px;
      text-align: center;
    }
    .banner-img {
      display: none;
    }
    .btn {
      display: flex;
      flex-direction: column;
      row-gap: 5px;
      gap: 20px;
    }
    .btn .now {
      margin-left: 20px;
    }
  }
`;

const Banner = ({ name = "movie", type = "now_playing" }) => {
  const { data } = useSWR(tmdbAPI.getTvList(name, type), fetcher);
  console.log(data);
  const movies = data?.results || [];

  return (
    <BannerStyles>
      <section className="page-container">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <BannerItem item={item}></BannerItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </BannerStyles>
  );
};

function BannerItem({ item, name, id }) {
  console.log(item);
  const navigate = useNavigate();
  if (!item) return null;
  const { title, overview, poster_path, backdrop_path } = item;

  return (
    <div className="banner">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt=""
        className="poster"
      />
      <div className="banner-item">
        <div className="content">
          <h2 className="title">{title}</h2>
          <span className=" overview ">{overview}</span>
          <div className="btn">
            <button
              className="now"
              onClick={() => navigate(`/movie/${item.id}`)}
            >
              Watch Now
            </button>
            <button className="trailer">Watch Trailer</button>
          </div>
        </div>
        <div className="banner-img">
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
