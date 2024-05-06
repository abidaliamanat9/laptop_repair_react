import { locationstore, shopstore } from '../../utils/store'
import '../../assets/style/shop.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'

export const LocationIndex = () => {
    const navigate = useNavigate()
    const locations = locationstore((state) => state.locations)
    console.log(locations)
    return (
        <div className="shops-container">
            <p className="shop-list-title">List of Locations</p>
            <div className="shops-list">
                {locations.map((location, index) => (
                    <div key={index} className="shop-list-item">
                        <div>{location.title}</div>
                        <div>{location.latitude}</div>
                        <div>{location.longitude}</div>
                    </div>
                ))}
            </div>
            <Button
                type={'button'}
                label={'Add New Location'}
                onclick={() => navigate('/locations/create')}
            />
        </div>
    )
}