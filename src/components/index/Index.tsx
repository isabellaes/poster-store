import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="index">
      <h1>Decorate your walls with Posters! </h1>

      <h2 onClick={() => navigate("/products")}>Explore products</h2>
    </div>
  );
};

export default Index;
