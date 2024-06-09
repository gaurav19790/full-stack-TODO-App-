import { useRef, useState } from "react"


const CreateTodo = ({updateRef}) => {
  const titileRef=useRef();
  const decriptionRef=useRef();
const [message,setMessage]=useState("");
 const CreateTodoPost=()=>{
  fetch("http://localhost:4000/todo",{
    method:"POST",
    body:JSON.stringify({
      title:titileRef.current.value,
      description:decriptionRef.current.value
    }),
    headers:{
      "Content-Type": "application/json",
    }
  }).then(async(res)=>{
    const data=await res.json();
    updateRef=data.msg;
 setMessage(data.msg);
  })
 }
  return (
    <div style={{padding:"10px",gap:"3px",justifyContent:"center" ,width:"30rem",margin:"auto",display:"grid"}}>
      <input type='text' placeholder="title" ref={titileRef}  style={{padding:"5px"}}/><br/>
      {/* <input type='text' placeholder="description" ref={decriptionRef}/><br/> */}
      <input type='text' placeholder="description" ref={decriptionRef} style={{width:"30rem",height:"100px",padding:"5px"}}></input><br/>
      <button  onClick={()=>{
       CreateTodoPost();
      }} style={{    width: "fit-content",padding: "5px"}}>Add a todo</button>
      <h2> {message}</h2>
    </div>
  )
}

export default CreateTodo
