import { Age } from "./Age";

export function Welcome({name = 'Guest' , age}) {
    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            <Age age = {age} name = {name}/>
        </div>
    )    
}