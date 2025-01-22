import { useParams } from "react-router-dom";
import Home from "./Home.jsx";
import ShopPage from "./Shop.jsx";
import Error from "./Error.jsx";

function Test() {
  const { name } = useParams();
  return <div>{name === "home" ? <Home /> : name === "shop" ? <ShopPage /> : name === undefined ? <Home /> : <Error />}</div>;
}

export default Test;
