import useSWR from "swr";
import { getEventsByQuery } from "../api";

function useSearchEvents(query) {
  const { data, error } = useSWR(query || null, getEventsByQuery);

  return {
    events: data?.results || [],
    isLoading: !error && !data && query,
    isError: error,
    error: data?.error,
    totalCount: data?.totalcount,
    pageCount: data?.pageCount,
  };
}

export default useSearchEvents;
