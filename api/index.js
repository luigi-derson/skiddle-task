import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  params: {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
  },
});

export const getEventsByQuery = (query) =>
  api
    .get(`/events/search?keyword=${encodeURIComponent(query)}`)
    .then((res) => res.data);

export const getEventById = (id) =>
  api.get(`/events/${id}`).then((res) => res.data.results);

export const getArtistById = (id) =>
  api.get(`/artist/${id}`).then((res) => res.data.results);
