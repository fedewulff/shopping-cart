import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home.jsx";
import ShopPage from "./Shop.jsx";
import Cart from "./Cart.jsx";
import Error from "./Error.jsx";
import stlyes from "../fullscreen.module.css";
import { NavLink } from "react-router-dom";
import Test from "./test.jsx";

// function CartTotalQuantity({ products }) {
//   let sum = 0;

//   for (let i = 0; i < products.length; i++) {
//     sum += products[i].quantity;
//   }

//   return <div className={stlyes.quantity}>{sum}</div>;
// }

function FullScreen() {
  const { name } = useParams();

  const [products, setProducts] = useState(`hola`);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(true);

  function onHover(e) {
    e.target.children[0].style.fill = `#bab86c`;
    e.target.children[1].style.color = `#bab86c`;
  }
  function offHover(e) {
    e.target.children[0].style.fill = `#f8f6f0`;
    e.target.children[1].style.color = `#f8f6f0`;
  }
  function cartTotalQuantity() {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
      sum += products[i].quantity;
    }

    return sum;
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

        const newArray = allNineProductsJson.map((product) => {
          return { ...product, quantity: 0 };
        });

        setProducts(newArray);
      } catch (error) {
        setErrorMessage(error);
      } finally {
        setLoadingProducts(false);
      }
    })();
  }, []);

  if (loadingProducts) return <p className={stlyes.loading}>Loading ...</p>;
  if (errorMessage) return <p>An error happened.</p>;

  return (
    <div className={stlyes.flex}>
      <div className={stlyes.navBar}>
        <h1>Fede's Shop</h1>
        <NavLink to="/" onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => offHover(e)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>home</title>
            <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
          </svg>
          <span>Home</span>
        </NavLink>
        <NavLink to="/shop" onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => offHover(e)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>store</title>
            <path d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z" />
          </svg>
          <span>Shop</span>
        </NavLink>
        <div className={stlyes.cart}>
          <NavLink to="/cart" onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => offHover(e)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>cart</title>
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
            <span>Cart</span>
            <div className={stlyes.quantity}>{cartTotalQuantity()}</div>
            {/* <CartTotalQuantity products={products} /> */}
          </NavLink>
        </div>
      </div>

      {/* <Test /> */}
      {name === undefined ? (
        <Home />
      ) : name === "shop" ? (
        <ShopPage products={products} setProducts={setProducts} />
      ) : name === "cart" ? (
        <Cart products={products} setProducts={setProducts} />
      ) : (
        <Error />
      )}
    </div>
  );
}

export default FullScreen;
