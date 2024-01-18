import { Age } from "./Age";

export function Welcome({name = 'Guest' , age}) {
    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            {age >= 18 ? <Age age = {age} name = {name}/> : <p>{name}, you are very young!</p>}
        </div>
    )    
}