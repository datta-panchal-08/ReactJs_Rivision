import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
  const  [todo, setTodo] = useState([{task: "sample task" ,id:uuidv4()}])
  const [inpVal , setInpVal] = useState("");
   
  const addNewTask = () =>{
      setTodo((prevTodos)=>{
       return  [...prevTodos,{task : inpVal , id : uuidv4()}];

      })
      setInpVal("");
  }
  
  const updateTodoValue = (event)=>{
      setInpVal(event.target.value);
  }

  const deleteTodo = (id) =>{
    setTodo(todo.filter((todo)=>todo.id != id));
  }
  return (
    <div className="flex flex-col p-[4vw] absolute left-[50%] -translate-y-[50%] -translate-x-[50%] top-[50%] w-[50%] min-h-64 bg-zinc-500">
      <input value={inpVal}  onChange={updateTodoValue}
        className="px-4 py-2 mb-3 border rounded-md  border-green-600  border-solid-[5px]   outline-blue-400 "
        type="text"
        placeholder="Enter Your Task"
      />
      <button onClick={addNewTask} className="px-5 py-3 text-white font-bold mb-3 rounded-md  bg-red-600">Add Task</button>
      <hr />
      <div className="text-white mt-4">
        <h1 className="font-bold text-5xl mb-3 ">TASKS</h1>
        <ul>

           {todo.map((todo)=>{
            return <li key={todo.id} className="text-white mb-3 flex items-center justify-between">
             <span> {todo.task} </span>
             <button onClick={()=>deleteTodo(todo.id)} className="px-4 py-1 rounded-md  bg-red-600 text-white font-bold">Delete</button>
              </li>
           })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
