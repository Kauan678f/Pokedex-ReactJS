import NavBar from "../components/NavBar";
import styles from "./ErrorPage.module.css"

function ErrorPage() {
    return (
        <>
            <NavBar />
            <div className={styles.erro}>
                <h1>Erro 404</h1>
                <p>Página não encontrada</p>
            </div>
        </>
    )
}

export default ErrorPage;