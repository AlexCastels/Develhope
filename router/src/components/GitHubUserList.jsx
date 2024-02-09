
import { Link, Outlet } from "react-router-dom";

export function GitHubUserList(){
    
    return (
        <div className="list">
            <h2>Users:</h2>
            <ul className="list-link">
                <li><Link className='link-list' to='/listUsers/1'>Mojombo</Link></li>
                <li><Link className='link-list' to='/listUsers/2'>Defunkt</Link></li>
                <li><Link className='link-list' to='/listUsers/3'>Pjheyett</Link></li>
                <li><Link className='link-list' to='/listUsers/4'>Wycats</Link></li>
                <li><Link className='link-list' to='/listUsers/5'>Ezmobius</Link></li>
            </ul>
            <Outlet/>
        </div>
    )
}