import { shopstore } from '../../utils/store'
import '../../assets/style/shop.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'

export const ShopIndex = () => {
    const navigate = useNavigate()
    const shops = shopstore((state) => state.shops)
    console.log(shops)
    return (
        <div className="shops-container">
            <p className="shop-list-title">List of Shops</p>
            <div className="shops-list">
                {shops.map((shop, index) => (
                    <div key={index} className="shop-list-item">
                        <div>{shop.name}</div>
                        <div>{shop.number}</div>
                    </div>
                ))}
            </div>
            <Button
                type={'button'}
                label={'Add New Shop'}
                onclick={() => navigate('/shops/create')}
            />
        </div>
    )
}
