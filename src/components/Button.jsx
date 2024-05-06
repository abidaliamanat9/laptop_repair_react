import { useNavigate } from 'react-router-dom'
import '../assets/style/styles.css'
export const Button = ({type,label,onclick})=>{
    return (
        <button className='submit-button' type={type} onClick={onclick}>{label}</button>
    )
}
export const BackButton = ()=>{
    const navigate = useNavigate()
    return(
        <button className='back-button' onClick={()=>navigate(-1)}>Go Back</button>
    )
}