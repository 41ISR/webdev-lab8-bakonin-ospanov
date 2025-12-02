import { Navigate, useNavigate } from "react-router-dom"
import { api } from "../api/api"
import Input from "../components/Input"
import NavBar from "../components/NavBar"
import "./createItem.css"
import "./Layout.css"
import { useState } from "react"


const CreateItem = () => {
    const [error, setError] = useState("")
    const Navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const item = {
            title: e.target.title.value,
            description: e.target.description.value,
            price: e.target.price.value,
            imageUrl: e.target.imageUrl.value
        }

        try {
            const data = await api.createItem(item)
            Navigate("/")
        } catch (error) {
            console.log(error);
            setError(error.response.data.error)
        }
    }


    return (
        <>
            <NavBar />
            <div className="page-header">
                <h1>Создать новый товар</h1>
            </div>

            <div className="form-container">
                <form onSubmit={handleSubmit} id="create-item-form">
                    <div className="form-group">
                        <label className="form-label">
                            Название товара <span className="required">*</span>
                        </label>
                        <Input
                            id="title"
                            type="text"
                            className="form-Input"
                            name="title"
                            placeholder="Например: iPhone 14 Pro 256GB"
                            maxLength="100"
                            required
                        />
                        <div className="char-counter">
                            <span className="current">0</span> / 100
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            Описание <span className="required">*</span>
                        </label>
                        <textarea
                            className="form-textarea"
                            id="description"
                            name="description"
                            placeholder="Подробно опишите товар, его состояние, характеристики..."
                            maxLength="1000"
                            required
                        ></textarea>
                        <div className="char-counter">
                            <span className="current">0</span> / 1000
                        </div>
                        <div className="form-hint">
                            Чем подробнее описание, тем больше шансов продать товар
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            Начальная цена <span className="required">*</span>
                        </label>
                        <div className="Input-group">
                            <Input
                                type="number"
                                className="form-Input with-prefix"
                                id="price"
                                name="price"
                                placeholder="5000"
                                min="1"
                                required
                            />
                            <span className="Input-prefix">₽</span>
                        </div>
                        <div className="form-hint">
                            Укажите минимальную цену, с которой начнутся торги
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            URL изображения
                        </label>
                        <Input
                            type="url"
                            className="form-Input"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="https://example.com/image.jpg"
                        />
                        <div className="form-hint">
                            Вставьте ссылку на изображение товара (опционально)
                        </div>
                        <div className="image-preview" id="image-preview">
                        </div>
                    </div>

                    <div className="form-actions">
                        <a href="/" className="btn-cancel">Отмена</a>
                        <button type="submit" className="btn-submit">Создать товар</button>
                    </div>
                </form>
            </div></>
    )
}
export default CreateItem