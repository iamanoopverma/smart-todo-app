import {useState} from 'react'


function TodoInput({addTodo}){
const [inputText, setInputText] = useState("");
    return(
        <>
           <form action="" onSubmit={()=>addTodo(inputText)}>
               <input type="text" 
               value={inputText}
               onChange={(e)=> setInputText(e.target.value)}
               />
               <button type="submit">Add Todo</button>
           </form>
        </>
    )
}

export default TodoInput;