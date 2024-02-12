
import { useGitHubUser } from "../hooks/useGitHubUser"

export function GitHubUser({username}){
    
    if(username){
        
        const {data , loading , error , handleRefresh} = useGitHubUser(username)
        
        return (
            <div>    
            {loading && <h2>Loading..</h2>}
            {data && data.message && <p>Errore: <span>{data.message}</span></p>} 
            {data && data.name && 
                <div className='container'>
                    <h1>Welcome: {data.name}!</h1>
                    <p>Your username is: {data.login}</p>
                    <p>Your avatar is:</p>
                    <img src={data.avatar_url} alt='avatar' width="300px"/>    
                </div>
            }
            <button onClick={()=>{handleRefresh()}}>Refresh</button>    
            </div>
        )
    }
}