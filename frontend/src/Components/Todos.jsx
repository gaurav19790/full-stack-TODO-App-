/* eslint-disable react/prop-types */
// import React from "react"

/*
todo=[
    {
        title:"hello",
        description:"all the work done"
    }
]
*/
const Todos = ({todos}) => {

  const updateTodoPost=(id)=>{
    fetch("http://localhost:4000/updatetodo",{
      method:"PUT",
      body:JSON.stringify({
        id:id
      }),
      headers:{
        "Content-Type": "application/json",
      }
    }).then(async(res)=>{
      const data=await res.json();
    alert(data.msg)
    })
   }
  
  return (
    <div style={{display:"grid",gap:"10px"}}>
        {todos.todo?.toReversed().map((todo,index)=>( 
        <div key={index} style={{padding:"10px 20px ",width:"30rem" ,margin:"auto",border:"1px solid"}}>
            <h1>{todo.title}</h1>
                <p>{todo.description}</p>
                <button onClick={()=>{updateTodoPost(todo._id)}}>{todo.completed}{todo.completed===true?"Completed":"Mark as Completed"}</button>
                </div>
        )     
        )}
     
    </div>
  )
}

export default Todos
