import { Link } from "react-router-dom";

export function Title(){
    return (
        <>
            <h1>My awesome App!</h1>
            <span>| <Link className='link' to="welcome/Alex">Welcome</Link> | <Link className='link' to='/counter'>Counter</Link> | <Link className='link' to='/userFetch'>User Fetch</Link> | <Link className='link' to='/listUsers'>List Users</Link> |</span>
            
        </>
    )
}