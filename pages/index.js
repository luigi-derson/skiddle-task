import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import EventsList from "../components/EventsList";
import useSearchEvents from "../hooks/useSearchEvents";
import SearchBox from "../components/SearchBox";

const Home = () => {
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounce(query, 500);
  const { events, isError, isLoading } = useSearchEvents(debouncedValue);

  const onSearchChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  return (
    <div>
      <h1>Search Events</h1>
      <SearchBox query={query} onChange={onSearchChange} />
      <div>
        <h2>
          {events.length} Results for {`'${debouncedValue}'`}
        </h2>
        {isError && <p style={{ color: "red" }}>Error in query</p>}
        <EventsList events={events} />
      </div>
    </div>
  );
};

export default Home;
