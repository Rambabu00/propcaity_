import "./TextArea.css"
export default function TextArea({placeholder, value, setState, onClick, color}){
    return (
        <div>
            <textarea placeholder={placeholder} value={value} onChange={(e)=>{setState(e.target.value)}} onClick={onClick} style={{backgroundColor: color}}></textarea>
        </div>
    )
}