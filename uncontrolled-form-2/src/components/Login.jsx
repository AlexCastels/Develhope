import { useState } from "react";
import { Welcome } from "./Welcome";

export function Login({onLogin}){
    const [data , setData] = useState({
        username: '',
        password: '',
        checkbox: false
    })
    
    function handleInput(e){
        const name = e.target.name
        const value = e.target.value
        const type = e.target.type
        const checked = e.target.checked
        setData((d) => {
            return {
                ...d ,
                [name] : type === 'checkbox' ? checked : value
            }
        })
    }

    function handleInputReset(){
        setData({
            username: '',
            password: '',
            checkbox: false
        })
        
    }
    
    function handleSubmit(e){
        e.preventDefault()
    }
    
    return (
        <form onSubmit={handleSubmit} className="form">
            <h2>My controlled form!</h2>
            <label htmlFor='username'>Username</label>
            <input name='username' value={data.username} onChange={handleInput}/>
            <label htmlFor='password'>Password</label>
            <input name='password' value={data.password} type="password" onChange={handleInput}/>
            <div className="checkInput">
                <label htmlFor='checkbox'>Confirmed:</label>
                <input name='checkbox' value={data.checkbox} type="checkbox" onChange={handleInput} className='check'/>
            </div>
            <button name='login' disabled={!data.username || !data.password} onClick={() => onLogin(data)}>Login</button>
            <button type='reset' onClick={handleInputReset}>Reset Input</button>
            <Welcome name={data.username}/>
        </form>
    )
}
