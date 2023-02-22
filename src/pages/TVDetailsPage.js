import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../config";
import "swiper/scss";
import TVCard from "../components/movie/TVCard";

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
    <div className="page-details ">
      <div className="page-detail flex page-container relative mb-10">
        {/* <div className="overlay absolute inset-0 z-50 -translate-y-[110px] h-[410px] bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.1)] rounded-lg min-w-[500px]"></div> */}
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="rounded-3xl w-[400px] h-[670px] bg-[rgba(0, 0, 0, 0.6)]"
        />

        <div className="text-detail text ml-5 p-10 bg-slate-900 rounded-2xl">
          <h2 className="text-3xl font-bold text-red-600 mb-5">
            {name || title}
          </h2>
          <div className="describe rounded-lg bg-slate-800 p-3 text-xl mb-10 gap-y-2 flex flex-col font-medium">
            <span>Status: {status}</span>
            <span>Runtime: {runtime} minute </span>
            <span>Language: {original_language}</span>
            <span>Year: {first_air_date || release_date}</span>
            <span>Movie content: {overview}</span>

            <div className="cats flex gap-x-2">
              <span>Cats:</span>
              {genres.length > 0 &&
                genres.map((item) => <div key={item.id}>{item.name},</div>)}
            </div>
          </div>
          <div className="status flex flex-col bg-slate-800  gap-5 p-5 rounded-2xl">
            <div className="flex justify-start gap-3 ml-5">
              <div className="icon flex gap-x-2 bg-red-500 text-white py-2 px-4 text-sm rounded-lg ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
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
              <div className="icon flex gap-x-2 bg-red-500 text-white py-2 px-4 text-sm rounded-lg ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
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
              <div className="flex icon gap-x-2 bg-red-500 text-white py-2 px-4 text-sm rounded-lg ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
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
            <div className="votes flex text-xl font-medium gap-x-5">
              <h2>Votes: </h2>
              <span className="">{vote_average.toFixed(2)} / 10</span>
              <span>( {vote_count} vote )</span>
            </div>
          </div>
        </div>
      </div>
      <TvVideos names={names}></TvVideos>
      <MovieSimilar names={names}></MovieSimilar>
    </div>
  );
};

function TvVideos({ names }) {
  // translations
  // https://api.themoviedb.org/3/tv/130542/videos?api_key=31e30b916b89f4bfc38509914299c466
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
              width="1280"
              height="800"
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
