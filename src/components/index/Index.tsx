import { useNavigate } from "react-router-dom";
import { categorys } from "../../utils/data";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="index">
      <h1>Decorate your walls with Posters! </h1>

      <h2>Explore products from our categorys below</h2>
      <div className="row">
        {categorys.map((c) => {
          return (
            <>
              <div
                className="category-item"
                onClick={() => navigate(`category/${c.id}`)}
              >
                <h2 className="centered">{c.name}</h2>
                <img src={c.img} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
