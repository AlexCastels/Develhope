import { useState } from "react"

export function ToDoList(){
    const [list , setList] = useState([]) 
    const [input , setInput] = useState('')
    
    function handleInput(e){     
        let value = e.target.value 
        setInput(value)
        
    }
    
    function handleToDo(){    
        setList((e) =>[...e , input]) 
        setInput('') 
    }
    
    function handleReset(){
        setList([])
    }

    function removeTask(i){
        setList((arr) => arr.filter((item , index) => index !== i)) 
    } 
    
    console.log(list);

    return (
        <>
            <h2>La mia lista</h2>
            <input name='list' onChange={handleInput} value={input}/> 
            <button onClick={handleToDo}>Add to do</button>
            <button onClick={handleReset}>Reset list</button>
            <ul>
                {list.map(( item , index) => (  
                    <li key={index}>{item}
                        <button onClick={() => removeTask(index)}>Remove Task</button> 
                    </li>
                ))}
            </ul>
        </>
    )
}