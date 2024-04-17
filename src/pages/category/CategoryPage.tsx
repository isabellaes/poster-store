import TuneIcon from "@mui/icons-material/Tune";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const CategoryPage = () => {
  return (
    <div className="category-page">
      <div className="sort-and-filter-btns">
        <button className="filter-button">
          <TuneIcon></TuneIcon>
          FILTER
        </button>
        <button className="sort-button">
          <SwapVertIcon></SwapVertIcon>
          SORT
        </button>
      </div>
      <h1>category</h1>
    </div>
  );
};

export default CategoryPage;
