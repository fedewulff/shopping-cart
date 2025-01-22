import { useState } from "react";
import styles from "../cart.module.css";

function Cart({ products }) {
  console.log(products);
  return (
    <div className={styles.fullContainer}>
      {products.map((product, index) => {
        if (product.quantity === 0) return;
        return (
          <div className={styles.cardAndButtonContainer} key={index}>
            <div className={styles.card}>
              <img src={product.image} alt="" className={styles.image} />
              <div className={styles.cardInfo}>
                <h4>{product.title}</h4>
                <div className={styles.quantity}>x {product.quantity}</div>
                <div className={styles.price}>${product.price * product.quantity}</div>
              </div>
            </div>
            <button className={styles.button}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>trash-can-outline</title>
                <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
              </svg>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
