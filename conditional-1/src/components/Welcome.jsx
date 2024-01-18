import { Age } from "./Age";

export function Welcome({name = 'Guest' , age}) {
    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            <hr/>
            <Age age = {age} name = {name}/>
            <span>Normale</span>
            <hr/> 
            {age >= 18 && <Age age = {age} name = {name}/>}
            <span>Se Age è maggiore a 18</span>
            <hr/>
            {!!age && <Age age = {age} name = {name}/>}
            <span>Se Age esiste ed è diverso da 0</span>
            <hr/>
            {age >= 18 && age < 65 && <Age age = {age} name = {name}/>}
            <span>se Age è compreso tra 18 e 65</span>
            <hr/>
            {age >= 18 && age <= 65 && name === 'Jonh' && <Age age = {age} name = {name}/>}
            <span>Se Age è compreso tra 18 e 65 e 'name' = 'jonh'</span>
            <hr/>
            
            
        </div>
    )    
}