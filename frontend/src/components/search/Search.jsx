import { useContext, useState } from "react";
import "./Search.scss";
import { MovieContext } from "../../contextes/MovieContext";
MovieContext;

const Search = () => {
  const { setSearchTerm } = useContext(MovieContext);

  const [inputValue, setInputValue] = useState("");

  const handleSearchClick = () => {
    setSearchTerm(inputValue);
    setInputValue("");
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        name="search"
        id="search"
        className="search"
        placeholder="e.g. The Godfather"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="search-movie-btn" onClick={handleSearchClick}>
        Submit
      </button>
    </div>
  );
};

export default Search;
