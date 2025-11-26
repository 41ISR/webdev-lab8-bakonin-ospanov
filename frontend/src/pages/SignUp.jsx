import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import { api } from "../api/api"
import { Link, useNavigate } from "react-router-dom"
import { useUserStore } from "../store/useUserStore"

const SignUp = () => {
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { setSession } = useUserStore()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        if (e.target.password.value !== e.target.password1.value) {
            setError("Passwords dont match")
            return
        }

        const user = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        try {
            const data = await api.registerUser(user)
            setSession(data.data)
            navigate("/")
        } catch (error) {
            console.log(error);
            setError(error.response.data.error)
        }

        console.log(user);

    }
    return (
        <div classNameName="container">

            <div className="auth-container">
                <div className="auth-header">
                    <div className="auth-icon">👤</div>
                    <h1 className="auth-title">Регистрация</h1>
                    <p className="auth-subtitle">Создайте новый аккаунт</p>
                </div>

                <div className="alert alert-error" id="error-alert">
                    Такое имя пользователя уже занято
                </div>

                {error.length > 0 && <div classNameName="auth-error">{error}</div>}
                <form id="register-form">
                    <div className="form-group">
                        <Input
                            label="Имя пользователя"
                            hint="Минимум 3 символа"
                            error="Имя пользователя должно быть не менее 3 символов"
                            type="text"
                            className="form-input"
                            name="username"
                            placeholder="Введите имя пользователя"
                            minlength="3"
                            required
                            autocomplete="username"
                        />
                        <Input
                            label="Email"
                            error="Введите корректный email"
                            type="email"
                            className="form-input"
                            name="email"
                            placeholder="example@email.com"
                            autocomplete="email"
                        />
                        <Input
                            label="Пароль"
                            hint="Минимум 6 символов"
                            error="Пароль должен быть не менее 6 символов"
                            type="password"
                            className="form-input"
                            name="password"
                            placeholder="Введите пароль"
                            minlength="6"
                            required
                            autocomplete="new-password"
                        />
                        <Input
                            label="Подтверждение пароля"
                            hint="Минимум 6 символов"
                            error="Пароли не совпадают"
                            type="password"
                            className="form-input"
                            name="confirmPassword"
                            placeholder="Повторите пароль"
                            required
                            autocomplete="new-password"
                        />

                        <button type="submit" className="btn-submit">Зарегистрироваться</button>
                        </div>
                </form>

                <div className="auth-divider">или</div>

                <div className="auth-link">
                    <p>
                        <Link to={"/signin"}>Вход</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp