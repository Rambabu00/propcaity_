import Button from "../Button/Button"
import "./popUp.css";
import { toast } from 'react-toastify';
export default function PopUp({setTogglePop, id, arr, setData}){
   async function deletionYes(){
        arr= arr.filter((obj)=>{
            if(obj.id!==id){
                return obj
            }
        })
        console.log(arr)
        await setData(arr);
        
       localStorage.setItem("data", JSON.stringify(arr));
        setTogglePop(false);
        toast.info("Note deleted...!")
    }
    function deletionNo(){
        
        setTogglePop(false);
        toast.info("deletion cancelled...!")
    }
    return(
         <div className="pop">
            <div className="popContainer">
           <p>do you want delets this Note...?</p>
          <div className="footer">
          <Button text="No" onclick={deletionNo}></Button>
           <Button text="yes"  onclick={deletionYes}></Button>
          </div>
        </div>
         </div>
    )
}