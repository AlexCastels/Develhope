import { useState } from "react";
import { Welcome } from "./Welcome";

export function Login(){
    const [data , setData] = useState({
        username: '',
        password: '',
        check: false
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
    return (
        <div className="form">
        <label htmlFor='username'>Username</label>
        <input name='username' value={data.username} onChange={handleInput}/>
        <label htmlFor='password'>Password</label>
        <input name='password' value={data.password} type="password" onChange={handleInput}/>
            <div className="checkInput">
                <label htmlFor='checkbox'>Confirmed:</label>
                <input name='checkbox' value={data.check} type="checkbox" onChange={handleInput} className='check'/>
            </div>
        <Welcome name={data.username}/>
        </div>
    )



}
