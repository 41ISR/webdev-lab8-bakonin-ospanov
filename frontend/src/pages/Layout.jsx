import "./Layout.css"
import Items from "./Items"
import { useUserStore } from "../store/useUserStore"

const Layout = () => {
    const { session } = useUserStore()   
        return (
        <>
        <header>
        <nav>
            <a href="/" className="logo">🛒 Маркетплейс</a>
            
            {!session?.user ? (
             <ul className="nav-links" id="guest-nav">
                <li><a href="/">Товары</a></li>
                <li><a href="/SignIn">Войти</a></li>
                <li><a href="/SignUp" className="btn-primary">Регистрация</a></li>
            </ul> 
            ) : (  
            <ul className="nav-links" id="auth-nav">
                <li><a href="/" className="active">Товары</a></li>
                <li><a href="/my-bids">Мои ставки</a></li>
                <li><a href="/create-item" className="btn-primary">+ Создать товар</a></li>
                <li className="user-info">
                    <span className="username">username</span>
                    <button className="btn-logout">Выйти</button>
                </li>
            </ul>
            )}
        </nav>
    </header>

    <main>
        <Items/>
    </main>

    <footer>
        <p>&copy; 2025 Маркетплейс. Все права защищены.</p>
    </footer>
    </>
    )
}

export default Layout