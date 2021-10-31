import styled from "styled-components";

const SearchBox = ({ query, onChange }) => {
  return (
    <SearchContainer>
      <StyledInput
        type="search"
        name="query"
        placeholder="Search by Artist, Venue or Keyword..."
        value={query}
        onChange={onChange}
        autoCorrect="off"
        autoComplete="off"
        spellCheck="false"
        autoCapitalize="none"
      />
    </SearchContainer>
  );
};

export default SearchBox;

const StyledInput = styled.input`
  border: none;
  border-bottom: 3px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  width: 100%;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 0;
  outline: 0;
  background: #fff;
  padding: 0.5rem 0;
  transition: border 300ms linear;
  max-width: 600px;

  &::placeholder {
    font-weight: 400;
    font-size: 1.25rem;
  }
`;

const SearchContainer = styled.div`
  padding: 0 1.5rem 1.75rem;
  border-bottom: 1px solid rgb(229, 232, 236);
  display: flex;
  justify-content: center;
`;
