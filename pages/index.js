import { useState } from "react";

import useDebounce from "../hooks/useDebounce";
import EventsList from "../components/EventsList";
import useSearchEvents from "../hooks/useSearchEvents";
import SearchBox from "../components/SearchBox";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const onSearchChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  const debouncedValue = useDebounce(query, 500);
  const { events, isLoading, totalCount } = useSearchEvents(debouncedValue);

  return (
    <div>
      <SearchBox query={query} onChange={onSearchChange} />
      <EventsList
        events={events}
        query={debouncedValue}
        totalCount={totalCount}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SearchPage;
