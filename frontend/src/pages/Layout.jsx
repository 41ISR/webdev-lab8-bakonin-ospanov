import "./Layout.css"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"

const Layout = () => {

    return (

        <>
            <NavBar />
            <main>

                <div id="outlet">
                    <Outlet />
                </div>
            </main>


            <footer>
                <p>&copy; 2025 Маркетплейс. Все права защищены.</p>
            </footer>
        </>
    )
}

export default Layout