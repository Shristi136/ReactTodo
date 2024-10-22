import React, { useState } from "react";


export const TodoForm=({onAddTOdo})=>{

    const [inputValue, setInputValue]= useState("");

    //handleInputChange
    const handleInputChange = (value) => {
        setInputValue({id:value, content:value, checked:false} );
      };
      

    // handleFormSubmit
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        onAddTOdo(inputValue);
        setInputValue({id:"", content:"", checked:false});
    }

    return(<>
    <section>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className="todo-input" autoComplete="off" value={inputValue.content} 
                        onChange={(event)=>handleInputChange(event.target.value)}/>
                </div>
                <div>
                     <button type="submit" className="todo-btn">Add Task</button>
                </div>
            </form>
    </section>
    </>
    )
}