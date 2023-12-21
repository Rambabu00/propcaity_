import Button from "../Common/Button/Button";
import "./Header.css"
export default function Header({mode, setMode}){
    function toggleHandle(){
       if(mode==="Light-Mode"){
        setMode("Dark-Mode")
       }
       else if(mode==="Dark-Mode")
       setMode("Light-Mode")
    }
    return(
        <div className="Header">
             <div className="leftHeader">
             <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo"></img>
             <span>Propcaity Keep</span>
             </div>
             <Button text={mode==="Light-Mode" ? "Dark-Mode": "Light-Mode"} onclick={toggleHandle}></Button>
        </div>
    )
}