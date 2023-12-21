 
import "./Input.css"
export default function Input({placeholder,  type, setState, value,id, display, color, onClick}){
    return (
        <div>
            <input placeholder={placeholder} type={type} value={value} onChange={(e)=>{setState(e.target.value)}} onClick={onClick} id={id} style={{display: display, backgroundColor: color}}  />
        </div>
    )
}