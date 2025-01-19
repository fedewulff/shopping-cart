import { useState, useEffect } from "react";

function ShopPage() {
  const [products, setProducts] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    (async function getProductsFromAPI() {
      try {
        const allNineProducts = await fetch("https://fakestoreapi.com/products?limit=9", { mode: "cors" });
        // console.log(allNineProducts);
        if (!allNineProducts.ok) {
          throw new Error(`HTTP error: Status ${allNineProducts.status}`);
        }
        const allNineProductsJson = await allNineProducts.json();
        // console.log(allNineProductsJson);
        setProducts(allNineProductsJson);
      } catch (error) {
        // setPokemon(null);
        setErrorMessage(error);
      } finally {
        setLoadingProducts(false);
      }
    })();
  }, []);

  if (loadingProducts) return <p>Loading pokemon...</p>;
  if (errorMessage) return <p>An error happened. No pokemon visible</p>;
  return <div>{products[0].title}</div>;
}

export default ShopPage;
