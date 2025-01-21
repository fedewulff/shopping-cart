import { useState, useEffect } from "react";
import stlyes from "../shop.module.css";

function ShopPage() {
  const [products, setProducts] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [productQuantity, setProductQuantity] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  console.log(products);

  function productMinusOne(e) {
    const buttonIndex = e.target.id;
    if (productQuantity[buttonIndex] > 0) {
      const newProductQuantityArray = productQuantity.toSpliced(buttonIndex, 1, --productQuantity[buttonIndex]);
      setProductQuantity(newProductQuantityArray);
    }
  }

  function productPlusOne(e) {
    const buttonIndex = e.target.id;
    const newProductQuantityArray = productQuantity.toSpliced(buttonIndex, 1, ++productQuantity[buttonIndex]);
    setProductQuantity(newProductQuantityArray);
  }

  function addToCartClick(e) {
    {
      console.log(e.target);
      console.log(e.target.id);
    }
  }

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

  if (loadingProducts) return <p>Loading ...</p>;
  if (errorMessage) return <p>An error happened.</p>;
  return (
    <div className={stlyes.fullContainer}>
      <h2 className={stlyes.h2style}>Products</h2>
      <div className={stlyes.grid}>
        {products.map((product, index) => {
          return (
            <div className={stlyes.card} key={index}>
              <img src={product.image} alt="" />
              <div className={stlyes.cardInfo}>
                <div className={stlyes.cardTitleAndCounter}>
                  <h3> {product.title}</h3>
                  <div>
                    <div className={stlyes.counterCountainer}>
                      <button id={index} onClick={(e) => productMinusOne(e)}>
                        &minus;
                      </button>
                      <div>{productQuantity[index]}</div>
                      <button id={index} onClick={(e) => productPlusOne(e)}>
                        &#43;
                      </button>
                    </div>
                  </div>
                </div>
                <button className={stlyes.addToCart} id={index} onClick={(e) => addToCartClick(e)}>
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopPage;
