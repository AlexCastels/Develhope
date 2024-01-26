
import { Login } from "./Login"
import { UncontrolledForm } from "./UncontrolledForm"

function onLogin(login){
    console.log(login)
}

export function InteractiveWelcome(){
    
    
    
    
    return (
        <div className="container">
            <Login onLogin={onLogin}/> 
            <UncontrolledForm/>
        </div>  
    )
}