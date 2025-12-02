import { useEffect } from "react"
import useItemStore from "../store/useItemStore"
import "./Items.css"

const Items = () => {
        const { items, getItems } = useItemStore()

        useEffect 
    return (
        <>
        <div className="page-header">
        <h1>Все товары</h1>
    </div>


    <div className="stats">
        <div className="stat-item">
            <span className="stat-value">15</span>
            <span className="stat-label">Товаров</span>
        </div>
        <div className="stat-item">
            <span className="stat-value">42</span>
            <span className="stat-label">Ставок</span>
        </div>
        <div className="stat-item">
            <span className="stat-value">12</span>
            <span className="stat-label">Активных</span>
        </div>
        <div className="stat-item">
            <span className="stat-value">25 000 ₽</span>
            <span className="stat-label">Средняя цена</span>
        </div>
    </div>


    <div className="items-grid">

    </div>
</>
    )
}

export default Items