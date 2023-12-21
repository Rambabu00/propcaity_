import { useState } from "react"
 import Input from "../Common/Input/Input";
 import TextArea from "../Common/TextArea/TextArea";
 import "./Note.css";
 import Button from "../Common/Button/Button";
 import Label from "../Common/Label/Label";
 import { toast } from 'react-toastify';
 import PopUp from "../Common/popUp/PopUp";
export default function Note({data, setData, id, setId}){
    let [title, setTitle]= useState("");
    let [text, setText]= useState("");
    let [color, setColor]= useState('#ffffff');
    const [showTitle, setShowTitle]= useState(false);
    const [togglePOP, setTogglePop]=useState(false);
    const [deletionId, setDeletionId]=useState(null);
    const [edit, setEdit]= useState("Add");
    const [editId, setEditId]=useState(null)
     let arr;
     if(data){
        arr=data
     }
     else{
        arr=[]
     }
     
    function titleShowHandle(){
        setShowTitle(true);
    }
   function AddHandle(){
      if(title && text){
     let obj={
        "id": id,
        "title": title,
        "text":text,
        "color": color
         }
        arr.unshift(obj);
        setData(arr);
        setId(id+1)
        localStorage.setItem("data", JSON.stringify(data));
        toast.success("Note Added");
        closeNote()
      }
      else if(!title && text){
        toast.warning("OOPS...! Enter Title")
      }
      else if(!text && text){
        toast.warning("OOPS...! Enter text")
      }
      else {
        toast.warning("OOPS...! Enter text and Title")
      }
   }
   async function EditHandle(){
    arr.map((obj)=>{
        if(obj.id===editId){
            obj.title=title;
            obj.text=text;
            obj.color=color
        }
       })
       setData(arr);
       localStorage.setItem("data", JSON.stringify(arr));
       toast.success("Note Edited...!");

       closeNote();
       setEdit("Add")
   }
    async function deleteList(id){
        setTogglePop(true) 
        setDeletionId(id)  
    }
    function closeNote(){
        setShowTitle(false);
        setColor("#ffffff");
        setText("");
        setTitle("");
    }
    async function editList(id){
        setEdit("Edit")
        let obj= arr.filter((obj)=>{
            if(obj.id===id){
                return obj
            }
        })
         console.log(arr)
        setText(obj[0].text);
        setColor(obj[0].color);
        setTitle(obj[0].title);

        setShowTitle(true);
       setEditId(id)

         
    }
     
    return (
        <div className="NoteContainer">
            {/*  Note container */}
         <form style={{backgroundColor: color}}>
       
       {
        showTitle &&   <Input type="text" placeholder="Title" setState={setTitle} value={title} color={color}></Input>
       }
           <TextArea placeholder="Take a Note" setState={setText} value={text} onClick={titleShowHandle} color={color}></TextArea>
         
         {
            showTitle &&  ( <div className="NoteFooter">
                <div>
                <Label htmlFor="color"></Label>
            <Input type="color" id="color" display="none" value={color} setState={setColor}></Input>
                </div>
            <Button text="Cancel" onclick={closeNote}></Button>
            <Button text={edit==="Add" ? "ADD" : "Edit"} onclick={edit==="Add" ? AddHandle : EditHandle}></Button>
           </div>)
         }
         </form>
         
          {/* cards container */}
                <div className="NoteListContainer">

               {
                data &&  (
                    data.map((obj)=>(
                        // creating each card
                        <div className="NoteList"style={{backgroundColor: obj.color} }   id={obj.id} >
                        <h3>{obj.title}</h3>
                        <p>{obj.text}</p>
                        <div className="NoteListFooter">
                           <Button text="edit" onclick={()=>{
                           editList(obj.id)
                           }}></Button>
                           <Button text="delete" onclick={()=>{
                               deleteList(obj.id)
                           }}></Button>
                        </div>
                    </div>
                               ))
                ) 
               }
               </div>
             
         {/* popContainer */}
         { togglePOP && 
         <PopUp setTogglePop={setTogglePop} id={deletionId} arr={arr} setData={setData}></PopUp>
         }
         
        </div>
    )
}