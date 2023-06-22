import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../config";
import "swiper/scss";
import TVCard from "../components/movie/TVCard";
import styled from "styled-components";
const DetailPageStyles = styled.div`
  .page-detail {
    margin-bottom: 40px;
    display: flex;
    position: relative;
  }
  .page-detail img {
    border-radius: 24px;
    width: 400px;
  }

  .page-detail .text {
    margin-left: 20px;
    padding: 40px 40px;
  }
  .page-detail .text h2 {
    font-size: 30px;
    font-weight: 600;
    color: #f51010db;
    margin-bottom: 20px;
  }
  .page-detail .text .describe {
    border-radius: 8px;
    /* font-size: 18px; */
    padding: 10px;
    margin-bottom: 40px;
    background: #47474cb8;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
  .page-detail .text .describe > div {
    display: flex;
    column-gap: 20px;
  }
  .page-detail .text .describe .icon {
    font-size: 12px;
    background: #f51010db;
    display: flex;
    border-radius: 8px;
    padding: 3px 5px;
    margin-bottom: 20px;
  }
  .page-detail .text .describe .votes > div {
    margin-top: 5px;
    display: flex;
    column-gap: 20px;
  }
  .page-detail .text .describe .votes h2 {
    font-size: 24px;
    color: #f51010db;
  }
  .video {
    margin-bottom: 60px;
  }
  .bottom-video > div {
    display: flex;
    width: 100%;
    margin: 0 auto;
    background-color: #1e1e1e;
    height: 50px;
  }
  .bottom-video .icon {
    display: flex;
    padding: 0 20px;
    align-items: center;
    border-right: 1px solid #ccc;
    :hover {
      color: #f51010db;
    }
  }
  @media only screen and (max-width: 1024px) {
    padding: 0 20px;
    .video iframe {
      width: 100%;
    }
    .videos iframe {
      width: 100%;
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
    .video iframe {
      width: 100%;
      height: 400px;
    }
    .videos iframe {
      width: 100%;
      height: 400px;
    }
    .page-detail {
      display: flex;
      flex-direction: column;
    }
    .page-detail .text {
      width: 100%;
      font-size: 14px;
      padding: 0;
    }
    .text .describe {
      font-size: 14px;
      margin-right: 40px;
    }

    .text .cats {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

const TVDetailsPage = ({ names = "tv", type }) => {
  const { Id } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/${names}/${Id}?api_key=31e30b916b89f4bfc38509914299c466`,
    fetcher
  );

  if (!data) return null;
  const {
    poster_path,
    overview,
    original_language,
    runtime,
    status,
    genres,
    title,
    vote_average,
    name,
    vote_count,
    first_air_date,
    release_date,
  } = data;

  if (!genres) return;
  return (
    <DetailPageStyles className="page-details ">
      <div className="page-detail top page-container">
        <span>Home > Movies > {title}</span>
      </div>
      {/* <Video></Video> */}
      <TvVideos names={names}></TvVideos>
      <div className="page-detail page-container ">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />

        <div className="text ">
          <h2>{name || title}</h2>
          <div className="describe">
            <span>Status: {status}</span>
            <span>Runtime: {runtime} minute </span>
            <span>Language: {original_language}</span>
            <span>Year: {first_air_date || release_date}</span>
            <span>Movie content: {overview}</span>

            <div className="cats">
              <span>Cats:</span>
              {genres.length > 0 &&
                genres.map((item) => <div key={item.id}>{item.name},</div>)}
            </div>
          </div>
          <div className="describe">
            <div>
              <div className="icon ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 30"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
                <span className=" ">Like</span>
              </div>
              <div className="icon ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 30"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>

                <span className=" ">Share</span>
              </div>
              <div className=" icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 30"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>

                <span className=" ">Save to facebook</span>
              </div>
            </div>

            <div className="votes">
              <h2>Votes: </h2>
              <div>
                <span>{vote_average.toFixed(2)} / 10</span>
                <span>( {vote_count} vote )</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MovieSimilar names={names}></MovieSimilar>
    </DetailPageStyles>
  );
};
function Video() {
  const { Id } = useParams();
  return (
    <div className="page-container video">
      <iframe
        id="iframe"
        src={`https://2embed.org//embed/movie?tmdb=${Id}`}
        title="df"
        width="1240"
        height="750"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="bottom-video">
        <div>
          <div className="icon ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>
            <span className=" ">Like</span>
          </div>
          <div className="icon ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>

            <span className=" ">Share</span>
          </div>
          <div className=" icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>

            <span className=" ">Save to facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TvVideos({ names }) {
  const { Id } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/${names}/${Id}/videos?api_key=31e30b916b89f4bfc38509914299c466`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results) return null;

  return (
    <div className="videos page-container mb-10">
      {results.length > 0 &&
        results.slice(0, 1).map((item, index) => (
          <div key={item.id}>
            <h2 className="text-3xl font-bold mb-10">Trailer</h2>
            <iframe
              className="video"
              width="1240"
              height="600"
              src={`https://www.youtube.com/embed/${item.key}`}
              title={`${item.name}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
    </div>
  );
}

function MovieSimilar({ names = "tv", type = "similar" }) {
  // https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=
  const { Id } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/${names}/${Id}/similar?api_key=31e30b916b89f4bfc38509914299c466`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  return (
    <div className="movie-swiper mb-10 page-container">
      <h2 className="text-3xl font-bold mb-5">Similar Movies</h2>
      <Swiper grabCursor={"true"} spaceBetween={10} slidesPerView={"auto"}>
        {results.length > 0 &&
          results.map((item) => (
            <SwiperSlide key={item.id}>
              <TVCard item={item} name={names}></TVCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
export default TVDetailsPage;
