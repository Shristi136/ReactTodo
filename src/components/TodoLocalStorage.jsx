
const todoKey  ="reactTodo";

export const getLocalStorageData=()=>{
    const rawTodos = localStorage.getItem(todoKey)
if(!rawTodos) return [];
try {
    return JSON.parse(rawTodos); // Safely parse JSON if the data exists
} catch (error) {
    console.error("Error parsing localStorage data: ", error);
    return [];
}
}
  

export const setLocalStorageData=(task)=>{
    // localStorage of task which is in arr so convert it with JSON.stringify
return localStorage.setItem(todoKey, JSON.stringify(task));
}

