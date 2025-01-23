import { useState, useEffect } from "react";
import stlyes from "../shop.module.css";

function ShopPage({ products, setProducts }) {
  const [productQuantity, setProductQuantity] = useState(quantityArray(products));

  function quantityArray(allProducts) {
    const array = [];
    for (let i = 0; i < allProducts.length; i++) {
      array.push(1);
    }
    return array;
  }

  function productMinusOne(e) {
    const buttonIndex = e.target.id;
    if (productQuantity[buttonIndex] > 1) {
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
    const buttonIndex = e.target.id;
    if (products[buttonIndex]) {
      const newObject = { ...products[buttonIndex], quantity: products[buttonIndex].quantity + productQuantity[buttonIndex] };
      const newProductsArray = products.toSpliced(buttonIndex, 1, newObject);
      setProducts(newProductsArray);
    }
  }

  return (
    <div className={stlyes.fullContainer}>
      <h2 className={stlyes.h2style}>Products</h2>
      <div className={stlyes.grid}>
        {products.map((product, index) => {
          return (
            <div className={stlyes.card} key={index}>
              <img src={product.image} alt="" className={stlyes.image} />
              <div className={stlyes.cardInfo}>
                <div className={stlyes.cardTitleAndPrice}>
                  <h3> {product.title}</h3>
                  <div className={stlyes.price}>${product.price}</div>
                </div>
                <div className={stlyes.counterAndAddToCartContainer}>
                  <div className={stlyes.counterCountainer}>
                    <button id={index} className={stlyes.button} onClick={(e) => productMinusOne(e)}>
                      &minus;
                    </button>
                    <div>{productQuantity[index]}</div>
                    <button id={index} className={stlyes.button} onClick={(e) => productPlusOne(e)}>
                      &#43;
                    </button>
                  </div>
                  <button className={`${stlyes.addToCart} ${stlyes.button}`} id={index} onClick={(e) => addToCartClick(e)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopPage;
