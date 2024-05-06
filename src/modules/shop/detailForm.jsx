import { useState } from 'react'
import { InputField } from '../../components/InputField'
import { BackButton, Button } from '../../components/Button'
import '../../assets/style/styles.css'
import { locationstore, shopstore } from '../../utils/store'
import { useNavigate } from 'react-router-dom'
import { SelectBox } from '../../components/SelectBox'
export const DetailForm = () => {
    const redirect = useNavigate()
    const [shop, setShop] = useState({ name: '', number: '', location: '' })
    const addShop = shopstore((state) => state.addShop)
    const handleSubmit = (e) => {
        e.preventDefault()
        addShop(shop)
        setShop({ name: '', number: '' })
        redirect('/shops')
    }
    const locations = locationstore((state) => state.locations)
    return (
        <>
            <BackButton />
            <div className="container">
                <h4>Shop Detail</h4>
                <form onSubmit={handleSubmit}>
                    <InputField
                        label={'Name'}
                        placeholder={'Enter Shop Name'}
                        type={'text'}
                        value={shop.name}
                        onChange={(e) =>
                            setShop({ ...shop, name: e.target.value })
                        }
                    />
                    <InputField
                        label={'Number'}
                        placeholder={'Enter Shop Number'}
                        type={'number'}
                        value={shop.number}
                        onChange={(e) =>
                            setShop({ ...shop, number: e.target.value })
                        }
                    />
                    <SelectBox
                        options={locations}
                        onChange={(e) =>
                            setShop({ ...shop, location: e.target.value })
                        }
                    />
                    <Button type={'submit'} label={'Add Shop'} />
                </form>
            </div>
        </>
    )
}
