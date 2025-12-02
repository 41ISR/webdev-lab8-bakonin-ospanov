import { useUserStore } from "../store/useUserStore"
import useItemStore from "../store/useItemStore"
import { api } from "../api/api"

const ItemCard = ({ id, imageUrl, title, username, bidCount, createdAt, userId, price, status, highestBid, description, }) => {


    return (
        <div className="item-card">
            <div className="item-image">{imageUrl}</div>
            <div className="item-content">
                <span className="status-badge status-active">{status}</span>
                <h3 className="item-title">{title}</h3>
                <p className="item-description">{description}</p>
                <div className="item-footer">
                    <div>
                        <div className="item-price">{price}</div>
                        <div className="bid-info">
                            Текущая ставка: {highestBid}
                            <span className="bid-count">{bidCount}</span>
                        </div>
                    </div>
                    <div className="item-meta">
                        <span className="item-seller">Продавец: {username}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard