
import useSWR from "swr"

export function useGitHubUser(username){
    
    //Es:2 Controllare se 'username' è null

    if(username){

        const {data , error , mutate} = useSWR(`https://api.github.com/users/${username}`)

        const loading = !data && !error

        function handleRefresh(){ //Es3: passare una funzione per il Refresh manuale dei dati
            mutate()
            console.log(data);
        }

        return {data , error , loading , handleRefresh}
    }
    
}