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
        <div className="container">

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
                <form id="register-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <Input
                            id="username"
                            name="username"
                            label="Имя пользователя"
                            hint="Минимум 3 символа"
                            error="Имя пользователя должно быть не менее 3 символов"
                            type="text"
                            className="form-input"
                            placeholder="Введите имя пользователя"
                            minLength="3"
                            required
                            autoComplete="username"
                        />
                        <Input
                        
                            id="email"
                            name="email"
                            label="Email"
                            error="Введите корректный email"
                            type="email"
                            className="form-input"
                            placeholder="example@email.com"
                            autoComplete="email"
                        />
                        <Input
                            id="password"
                            name="password"
                            label="Пароль"
                            hint="Минимум 6 символов"
                            error="Пароль должен быть не менее 6 символов"
                            type="password"
                            className="form-input"
                            placeholder="Введите пароль"
                            minLength="6"
                            required
                            autoComplete="new-password"
                        />
                        <Input
                            id="password1"
                            name="password1"
                            label="Подтверждение пароля"
                            hint="Минимум 6 символов"
                            error="Пароли не совпадают"
                            type="password"
                            className="form-input"
                            placeholder="Повторите пароль"
                            required
                            autoComplete="new-password"
                        />

                        <Button className="btn-submit">Зарегистрироваться</Button>
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