/* eslint-disable react-hooks/exhaustive-deps */


import{ useEffect, useRef, useState } from "react"

import CreateTodo from "./Components/CreateTodo"
import Todos from "./Components/Todos";
const App=()=> {
  
const [todos,setTodos]=useState([]);
const updateRef=useRef();
useEffect(()=>{
 fetch("http://localhost:4000/todos").then(async(res)=>{
  const data=await res.json();
  // console.log(data)
setTodos(data)
});
},[updateRef])
  return (
    <div style={{width:"100",height:"10vh"}}>
    <h1  style={{textAlign:"center"}}>Todo App</h1>
<CreateTodo updateRef={updateRef}/>
<Todos todos={todos} />
    </div>
  )
}

export default App
