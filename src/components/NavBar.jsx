import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav className={styles.NavBar}>
            <div className={styles.Container}>
                <h1>
                    <Link className={styles.h1Link} to='/Pokedex-ReactJS'>Pokemon</Link>
                </h1>
            </div>
        </nav>
    )
}

export default NavBar;