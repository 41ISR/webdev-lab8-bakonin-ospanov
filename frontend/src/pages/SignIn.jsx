import { useState } from "react"
import Button from "../components/Button"
import "./SignIn.css"
import Input from "../components/Input"
import { api } from "../api/api"
import { Link, useNavigate } from "react-router-dom"
import { useUserStore } from "../store/useUserStore"

const SignIn = () => {
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { setSession } = useUserStore()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        const user = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        try {
            const data = await api.loginUser(user)
            setSession(data.data)
            navigate("/")
        } catch (error) {
            setError(error.response.data.error)
            console.error(error)
        }
    }
    return (
        <div className="auth-container">
            <div className="auth-header">
                <div className="auth-icon">🔐</div>
                <h1 className="auth-title">Вход</h1>
                <p className="auth-subtitle">Войдите в свой аккаунт</p>
            </div>

            <div className="alert alert-error" id="error-alert">
                Неверное имя пользователя или пароль
            </div>
            {error.length > 0 && <div className="auth-error">{error}</div>}
            <form id="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <Input
                        label="Имя пользователя"
                        hint="Минимум 3 символа"
                        error="Введите имя пользователя"
                        type="text"
                        className="form-input"
                        name="username"
                        placeholder="Введите имя пользователя"
                        required
                        autocomplete="username"
                    />
                    <Input
                        label="Пароль"
                        hint="Минимум 3 символа"
                        error="Введите пароль"
                        type="password"
                        className="form-input"
                        name="password"
                        placeholder="Введите пароль"
                        required
                        autocomplete="current-password"
                    />
                    </div>

                <Button className="btn-submit">Войти</Button>
            </form>

            <div className="auth-divider">или</div>

            <div className="auth-link">
                Нет аккаунта? <Link to={"/signup"}>Pегистрация</Link>
            </div>
        </div>
    )
}

export default SignIn