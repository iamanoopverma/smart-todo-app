import {useState} from 'react'
import './TodoInput.css'


function TodoInput({addTodo}){
const [inputText, setInputText] = useState("");
function handleSubmit(e){
   e.preventDefault();
   const trimmed = inputText.trim();
   if (trimmed){
       addTodo(trimmed);
       setInputText("");
   }
   
}
    return(
        <>
           <form action="" onSubmit={handleSubmit}>
               <input type="text" 
               value={inputText}
               onChange={(e)=> setInputText(e.target.value)}
               />
               <button className="add-btn" type="submit">Add Todo</button>
           </form>
        </>
    )
}

export default TodoInput;