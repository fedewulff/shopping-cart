import { useParams } from "react-router-dom";
import Home from "./Home.jsx";
import ShopPage from "./Shop.jsx";
import Error from "./Error.jsx";
import stlyes from "../fullscreen.module.css";
import { NavLink } from "react-router-dom";

function FullScreen() {
  const { name } = useParams();

  function onHover(e) {
    e.target.children[0].style.fill = `#FF6700`;
    e.target.children[1].style.color = `#FF6700`;
  }
  function offHover(e) {
    e.target.children[0].style.fill = `#f8f6f0`;
    e.target.children[1].style.color = `#f8f6f0`;
  }

  return (
    <div className={stlyes.flex}>
      <div className={stlyes.navBar}>
        <h1>Fede's Shop</h1>
        <NavLink to="/home" onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => offHover(e)}>
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
        <NavLink to="" onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => offHover(e)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>cart</title>
            <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
          </svg>
          <span>Cart</span>
        </NavLink>
      </div>
      {name === "home" ? <Home /> : name === "shop" ? <ShopPage /> : name === undefined ? <Home /> : <Error />}
    </div>
  );
}

export default FullScreen;
