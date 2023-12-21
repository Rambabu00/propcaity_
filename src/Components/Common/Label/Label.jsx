
import "./Label.css"
export default function Label({htmlFor}){
    return (
        <div className="color">
            <label htmlFor={htmlFor}>color picker</label>
        </div>
    )
}