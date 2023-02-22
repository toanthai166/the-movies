import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import TVCard from "../components/movie/TVCard";
import { fetcher } from "../config";

const TVPage = ({ name = "movie", type = "popular" }) => {
  const inputRef = useRef();
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/${name}/${type}?api_key=31e30b916b89f4bfc38509914299c466`
  );
  const [filter, setFilter] = useState("");

  const handleFilterChange = () => {
    if (!filter) return null;

    setUrl(
      `https://api.themoviedb.org/3/search/${name}?api_key=31e30b916b89f4bfc38509914299c466&query=${filter}`
    );
    setFilter((inputRef.current.value = ""));
  };

  useEffect(() => {
    setUrl(
      `https://api.themoviedb.org/3/${name}/${type}?api_key=31e30b916b89f4bfc38509914299c466`
    );
  }, [name, type]);

  const { data } = useSWR(url, fetcher);

  const movies = data?.results || [];
  return (
    <div className=" page-container">
      <h2 className="text-center text-3xl capitalize font-semibold mb-10">
        {name}
      </h2>
      <div className="flex mb-10 pages relative">
        <div className="input-search flex-1  ">
          <input
            ref={inputRef}
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            type="text"
            className="w-1/3 h-[40px] p-4 rounded-2xl italic bg-slate-800  focus:outline-red-700 outline-none text-white"
            placeholder="Type here to search...."
          />
        </div>
        <button
          onClick={handleFilterChange}
          className="btn-search absolute  text-white rounded-3xl  px-8 py-3 top-0 right-2/3 -translate-y-1 translate-x-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>

      <div className="pages-items grid grid-cols-5 gap-10">
        {(movies.length > 0 &&
          movies.map((item) => (
            <TVCard key={item.id} item={item} name={name}></TVCard>
          ))) || (
          <div className="page-container text-3xl font-normal h-full my-[25vh] w-full">
            No results found
          </div>
        )}
      </div>
    </div>
  );
};

export default TVPage;
