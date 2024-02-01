import "./Search.scss";

const Search = () => {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        name="search"
        id="search"
        className="search"
        placeholder="e.g. The Godfather"
      />
      <button className="search-movie-btn">Submit</button>
    </div>
  );
};

export default Search;
