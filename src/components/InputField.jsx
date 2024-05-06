import '../assets/style/styles.css'
export const InputField =({label,type,placeholder,value,onChange}) =>{
    return(
        <>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange}></input>
        </>
        
    )
}