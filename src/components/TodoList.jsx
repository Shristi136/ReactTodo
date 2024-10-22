import React from "react";
import { MdCheck,MdDeleteForever } from "react-icons/md";

export const TodoList=({ data, checked, onHandleDeleteTask, onHandleCheckTodo})=>{
    return(
        <>
        <li className="todo-item" >
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
            <button className="check-btn" onClick={()=> onHandleCheckTodo(data)}><MdCheck /></button>
            <button className="delete-btn" onClick={() => onHandleDeleteTask(data)}>
             <MdDeleteForever /></button>
        </li>
        </>
    )
}