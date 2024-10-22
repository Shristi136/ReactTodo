import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";
import { getLocalStorageData, setLocalStorageData } from "./TodoLocalStorage";


export const MyTodo =()=>{

const [task , setTask] = useState(()=>getLocalStorageData());


//localStorage 
setLocalStorageData(task);

const handleFormSubmit=(inputValue)=>{
    const{id,content,checked}= inputValue;

if(!content) return ;
// if(task.includes(inputValue)) return;
const ifTodoContentMatch = task.find((curTask)=>curTask.content === content);
if(ifTodoContentMatch) return;
setTask((prevTask) => [...prevTask, {id, content, checked}])
};


// Handle task deletion
  const handleDeleteTask = (valueToDelete) => {
    setTask((prevTask) => prevTask.filter((curTask) => curTask.content !== valueToDelete));
  };


  // handleClearTodoData
  const handleClearTodoData=()=>{
    setTask([])
  }

  //oHandleCheckTodo
  const handleCheckTodo =(value)=>{
    const updateTask = task.map((curTask)=>{
        if(curTask.content === value){
            return{...curTask, checked: !curTask.checked};
        }
        else{
            return curTask
        }
    })
    setTask(updateTask);
  }
  

    return(
        <>
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDateTime/>
            </header>
            <TodoForm onAddTOdo={handleFormSubmit}/>
            <section className="myUnOrdList">
                <ul>
                    { task.map((curTask)=>{
                         return <TodoList key={curTask.id} 
                         data={curTask.content}
                         checked={curTask.checked}
                         onHandleDeleteTask={handleDeleteTask}
                         onHandleCheckTodo={handleCheckTodo}/>
                        })
                    }
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>Clear all</button>
            </section>
        </section>
        </>
    )
};