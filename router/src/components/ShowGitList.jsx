import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export function ShowGitList(){
    
    const [users , setUsers] = useState([])
    const [loading , setLoading] = useState(false)
    const {id} = useParams()
    
    console.log(id);

    async function getData(id){
        setLoading(true)
        try {
            const res = await fetch(`https://api.github.com/users/${id}`)
            const data = await res.json()
            setUsers(data)
        } catch (error) {
            console.log(error)  
        } finally {
            setLoading(false)
        }
    }

    if(users){
        console.log(users);
    }

    useEffect(() => {
        if(id){
            getData(id) 
        }
        
        console.log(id);
    },[])
    
    return (
        <>
            <div className="GitUserList">
            {loading && <h1>Loading..</h1>}
            {users && users.message && <p>Errore: <span>{users.message}</span></p>}
            {users && users.login && <div className='card'>
                <h2>Welcome: {users.name}!</h2>
                <p>Your avatar is:</p>
                <img src={users.avatar_url} alt='avatar' width="300px"/>                
            </div>}
            </div>
            <Link className='link-list' to="/listUsers">Go back</Link> 
        </>
    )
}