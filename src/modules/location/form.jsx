import { useState } from "react"
import { InputField } from "../../components/InputField"
import '../../assets/style/styles.css'
import { BackButton, Button } from "../../components/Button"
import { locationstore } from "../../utils/store"
import { useNavigate } from "react-router-dom"
export const Form =() => {
    const redirect = useNavigate()
    const [location, setLocation] = useState({title:'',latitude:'',longitude:''})
    const addLocation = locationstore((state)=>state.addLocation)

    const handleSubmit = (e) =>{
        e.preventDefault()
        addLocation(location)
        setLocation({title:'',latitude:'',longitude:''})
        redirect('/locations')
    }

    return(
        <>
        <BackButton/>
        <div className="container">
        <h4>Location Detail</h4>
        <form onSubmit={handleSubmit}>
        <InputField label={'Title'} placeholder={'Enter Location Title'} type={'text'} value={location.title} onChange={(e)=>setLocation({...location,title:e.target.value})} />
        <InputField label={'Latitude'} placeholder={'Enter Location Latitude'} type={'number'} value={location.latitude} onChange={(e)=>setLocation({...location,latitude:e.target.value})} />
        <InputField label={'Longitude'} placeholder={'Enter Location Longitude'} type={'number'} value={location.longitude} onChange={(e)=>setLocation({...location,longitude:e.target.value})} />
        <Button type={'submit'} label={'Add Location'} />
        </form>
        </div>
        </>
    )
}