import { useEffect, useState } from "react";
const API = "https://peaceful-spire-60083.herokuapp.com/api/products";

const Games = () => {
  const [products, setProducts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const getProducts = () => {
    fetch(`${API}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch(console.error);
  };

  const getProductsByCategory = (category) => {
    fetch(`${API}/${category}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!Array.isArray(data)) {
          return setProducts([data]);
        }
        setProducts(data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="game-page">
      <h1>Here's the games page</h1>
      <aside className="genre-aside">
        <h3 onClick={getProducts}>Show All Games</h3>
        <h3 onClick={() => getProductsByCategory("JRPG")}>JRPG</h3>
        <h3 onClick={() => getProductsByCategory("Action/Adventure")}>
          Action/Adventure
        </h3>
        <h3 onClick={() => getProductsByCategory("RPG")}>RPG</h3>
        <h3 onClick={() => getProductsByCategory("Fighting")}>Fighting</h3>
        <h3 onClick={() => getProductsByCategory("Horror")}>Horror</h3>
      </aside>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for games here"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div>
        {products
          ? products
              .filter((product) => {
                if (searchTerm === "") {
                  return product;
                } else if (
                  product.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return product;
                }
              })
              .map((product, index) => {
                return (
                  <div className="results" key={index}>
                    <h2>{product.title}</h2>
                    <h3>{product.category}</h3>
                    <h4>${product.price}</h4>
                    <p>{product.description}</p>
                  </div>
                );
              })
          : "There's no games to display!"}
      </div>
    </div>
  );
};

export default Games;
