const SearchBox = ({ query, onChange }) => {
  return (
    <div>
      <label htmlFor="searchInput"></label>
      <input
        id="searchInput"
        type="search"
        name="query"
        placeholder="Search by Events or Artist"
        value={query}
        onChange={onChange}
        autoCorrect="off"
        autoComplete="off"
        spellCheck="false"
        autoCapitalize="none"
      />
    </div>
  );
};

export default SearchBox;
