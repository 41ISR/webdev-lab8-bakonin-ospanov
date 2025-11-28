import { Link } from "react-router-dom"
import { useUserStore } from '../store/useUserStore'
import Button from "./Button"

const NavBar = () => {
    const { session } = useUserStore()
    return (
        <>
            <header>
                <nav>
                    <a href="/" className="logo">🛒 Маркетплейс</a>

                    {!session?.user ? (
                        <ul className="nav-links" id="guest-nav">
                            <li><Link to={"/"} className="active">Товары</Link></li>
                            <li><Link to={"/SignIn"}>Войти</Link></li>
                            <li><Link to={"/SignUp"}>Register</Link></li>
                        </ul>
                    ) : (
                        <ul className="nav-links" id="auth-nav">
                            <li><Link to={"/"} className="active">Товары</Link></li>
                            <li><Link to={"/my-bids"}>My bids</Link></li>
                            <li><Link to={"/createItem"} className="btn-primary">Create item</Link></li>
                            <li className="user-info">
                                <span className="username">asd</span>
                                <Button className="btn-logout"><Link to={"/Logout"}>Выйти</Link></Button>
                            </li>
                        </ul>
                    )}
                </nav>
            </header>
</>
            )
}

export default NavBar