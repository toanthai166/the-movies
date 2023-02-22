export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "31e30b916b89f4bfc38509914299c466";
export const tmdbAPI = {
  getTvList: (name, type) =>
    `https://api.themoviedb.org/3/${name}/${type}?api_key=${apiKey}`,
};
