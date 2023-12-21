import "./Button.css"
export default function Button({text, onclick}){
   return (
     <div>
        <button type="button" onClick={onclick}>{text}</button>
     
     </div>
   )
}