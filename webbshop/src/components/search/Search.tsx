import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="search">
      <input type="text" className="search-field" placeholder="Search..." />
      <button className="search-button">
        <SearchIcon sx={{ color: "#575757" }}></SearchIcon>
      </button>
    </div>
  );
};

export default Search;
