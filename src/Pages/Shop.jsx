import { useState, useEffect } from "react";
import stlyes from "../shop.module.css";

function ShopPage() {
  const [products, setProducts] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [productQuantity, setProductQuantity] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    (async function getProductsFromAPI() {
      try {
        const allNineProducts = await fetch("https://fakestoreapi.com/products?limit=9", { mode: "cors" });
        // console.log(allNineProducts);
        if (!allNineProducts.ok) {
          throw new Error(`HTTP error: Status ${allNineProducts.status}`);
        }
        const allNineProductsJson = await allNineProducts.json();
        console.log(allNineProductsJson);
        setProducts(allNineProductsJson);
      } catch (error) {
        // setPokemon(null);
        setErrorMessage(error);
      } finally {
        setLoadingProducts(false);
      }
    })();
  }, []);

  if (loadingProducts) return <p>Loading ...</p>;
  if (errorMessage) return <p>An error happened.</p>;
  return (
    <div className={stlyes.fullContainer}>
      <h2 className={stlyes.h2style}>Products</h2>
      <div className={stlyes.grid}>
        {products.map((product) => {
          return (
            <div className={stlyes.card}>
              <img src={product.image} alt="" />
              <div className={stlyes.cardInfo}>
                <div className={stlyes.cardTitleAndCounter}>
                  <h3>{product.title}</h3>
                  <div>
                    <div className={stlyes.counterCountainer}>
                      <button>&minus;</button>
                      <div>0</div>
                      <button>&#43;</button>
                    </div>
                  </div>
                </div>
                <button className={stlyes.addToCart}>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopPage;
