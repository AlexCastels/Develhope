import { Welcome } from "./Welcome"

export function UncontrolledForm(){
    function handleForm(event){
        
        event.preventDefault()
        
        const username = event.target.elements.namedItem('username').value
        const password = event.target.elements.namedItem('password').value
        const checkbox = event.target.elements.namedItem('check').checked
        
        const formData = {username , password , checkbox}
        console.log(formData);
        
    }
    
    
    return (
        <form onSubmit={handleForm} className="form">
            <h2>My Uncontrolled Form!</h2>
            <label htmlFor="username">Username:</label>
            <input name='username'></input>
            <label htmlFor="password">Password:</label>
            <input name='password' type="password"></input>
            <div className="checkInput">
                <label htmlFor="check">Controlled:</label>
                <input name='check' type='checkbox' className='check'></input>
            </div>
            <button>Login</button>
            <button type="reset">Reset Form</button>
        </form>
    )
}