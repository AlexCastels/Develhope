
import { Login } from "./Login"

function onLogin(login){
    console.log(login)
}

export function InteractiveWelcome(){
    
    
    
    
    return (
        <div className="myForm">
            <h1>My form</h1>
            <Login onLogin={onLogin}/>
        </div>
        
    )
}