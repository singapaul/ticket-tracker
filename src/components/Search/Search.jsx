import "./Search.scss";

const Search = ({ onSearch, searchVal }) => {
  return (
    <>
      <input type="text" name="search" value={searchVal} onChange={onSearch} />
    </>
  );
};

export default Search;
