import "./Items.css"

const Items = () => {
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

        <div className="item-card">
            <img src="https://via.placeholder.com/300x200/3498db/ffffff?text=Laptop" alt="Ноутбук Dell XPS 15" className="item-image"></img>
            <div className="item-content">
                <span className="status-badge status-active">Активно</span>
                <h3 className="item-title">Ноутбук Dell XPS 15</h3>
                <p className="item-description">Мощный ноутбук для работы и игр. Intel Core i7, 16GB RAM, RTX 3050. Состояние отличное.</p>
                <div className="item-footer">
                    <div>
                        <div className="item-price">65 000 ₽</div>
                        <div className="bid-info">
                            Текущая ставка: 70 000 ₽
                            <span className="bid-count">5</span>
                        </div>
                    </div>
                    <div className="item-meta">
                        <span className="item-seller">Продавец: techseller</span>
                    </div>
                </div>
            </div>
        </div>


        <div className="item-card">
            <img src="https://via.placeholder.com/300x200/e74c3c/ffffff?text=iPhone" alt="iPhone 14 Pro" className="item-image"></img>
            <div className="item-content">
                <span className="status-badge status-active">Активно</span>
                <h3 className="item-title">iPhone 14 Pro 256GB</h3>
                <p className="item-description">Новый iPhone 14 Pro в идеальном состоянии. Все аксессуары в комплекте. Deep Purple.</p>
                <div className="item-footer">
                    <div>
                        <div className="item-price">85 000 ₽</div>
                        <div className="bid-info">
                            Текущая ставка: 90 000 ₽
                            <span className="bid-count">12</span>
                        </div>
                    </div>
                    <div className="item-meta">
                        <span className="item-seller">Продавец: mobileshop</span>
                    </div>
                </div>
            </div>
        </div>


        <div className="item-card">
            <img src="https://via.placeholder.com/300x200/2ecc71/ffffff?text=Keyboard" alt="Клавиатура" className="item-image"></img>
            <div className="item-content">
                <span className="status-badge status-active">Активно</span>
                <h3 className="item-title">Механическая клавиатура</h3>
                <p className="item-description">Игровая механическая клавиатура с RGB подсветкой. Cherry MX Red switches.</p>
                <div className="item-footer">
                    <div>
                        <div className="item-price">5 000 ₽</div>
                        <div className="bid-info">
                            Текущая ставка: 5 500 ₽
                            <span className="bid-count">3</span>
                        </div>
                    </div>
                    <div className="item-meta">
                        <span className="item-seller">Продавец: gamer123</span>
                    </div>
                </div>
            </div>
        </div>


        <div className="item-card">
            <img src="https://via.placeholder.com/300x200/9b59b6/ffffff?text=Headphones" alt="Наушники" className="item-image"></img>
            <div className="item-content">
                <span className="status-badge status-active">Активно</span>
                <h3 className="item-title">Sony WH-1000XM5</h3>
                <p className="item-description">Беспроводные наушники с активным шумоподавлением. Состояние как новые.</p>
                <div className="item-footer">
                    <div>
                        <div className="item-price">25 000 ₽</div>
                    </div>
                    <div className="item-meta">
                        <span className="item-seller">Продавец: audiophile</span>
                    </div>
                </div>
            </div>
        </div>


        <div className="item-card">
            <img src="https://via.placeholder.com/300x200/f39c12/ffffff?text=Watch" alt="Apple Watch" className="item-image"></img>
            <div className="item-content">
                <span className="status-badge status-active">Активно</span>
                <h3 className="item-title">Apple Watch Series 8</h3>
                <p className="item-description">Умные часы Apple Watch Series 8, 45mm. Алюминиевый корпус, GPS + Cellular.</p>
                <div className="item-footer">
                    <div>
                        <div className="item-price">35 000 ₽</div>
                        <div className="bid-info">
                            Текущая ставка: 37 000 ₽
                            <span className="bid-count">7</span>
                        </div>
                    </div>
                    <div className="item-meta">
                        <span className="item-seller">Продавец: techguru</span>
                    </div>
                </div>
            </div>
        </div>


        <div className="item-card">
            <img src="https://via.placeholder.com/300x200/1abc9c/ffffff?text=Camera" alt="Фотоаппарат" className="item-image"></img>
            <div className="item-content">
                <span className="status-badge status-active">Активно</span>
                <h3 className="item-title">Canon EOS R6</h3>
                <p className="item-description">Профессиональная беззеркальная камера. Пробег 5000 кадров. В комплекте с объективом 24-105mm.</p>
                <div className="item-footer">
                    <div>
                        <div className="item-price">150 000 ₽</div>
                        <div className="bid-info">
                            Текущая ставка: 155 000 ₽
                            <span className="bid-count">4</span>
                        </div>
                    </div>
                    <div className="item-meta">
                        <span className="item-seller">Продавец: photographer</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
    )
}

export default Items