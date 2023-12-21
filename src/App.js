import { useState, useEffect } from "react"
import Header from "./Components/Header/Header";
import Note from "./Components/CreatingNote/Note";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 
export default function App(){
    const [mode, setMode]= useState("Light-Mode");
    const [data, setData]=useState([]);
    const [id, setId]=useState(0);
    
       useEffect(()=>{
        if(JSON.parse(localStorage.getItem("data"))){
          let arr=JSON.parse(localStorage.getItem("data"));
          setData(arr)
        }
         else {
          let arr=[];
          setData(arr)
         }
         if(JSON.parse(localStorage.getItem("id"))){
          let num=JSON.parse(localStorage.getItem("id") || "[]")
          setId(num)
         }
          
         
       },[])
    return(
   
        <div className="keepContainer"  style={{backgroundColor: mode==="Light-Mode"? "white" : "black", transition: '0.4s'}}>
            <Header mode={mode} setMode={setMode}></Header>
            <Note data={data} setData={setData} id={id} setId={setId}></Note>
   
            <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
        </div>
        
    )
}