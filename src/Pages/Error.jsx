import styles from "../error.module.css";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div className={styles.relative}>
      <div className={styles.fullContainer}>
        <div className={styles.error}>
          <div>404</div>
          <div>Error</div>
        </div>
        <p>The URL does not exist</p>
        <p>
          Click{" "}
          <NavLink className={styles.navLink} to="/">
            home
          </NavLink>{" "}
          to return
        </p>
      </div>
    </div>
  );
}

export default Error;
