import "./Layout.css"
import Items from "./Items"
import NavBar from "../components/NavBar"

const Layout = () => {

    return (

        <>
            <main>
                <NavBar />
                <Items />
            </main>

            <footer>
                <p>&copy; 2025 Маркетплейс. Все права защищены.</p>
            </footer>
        </>
    )
}

export default Layout