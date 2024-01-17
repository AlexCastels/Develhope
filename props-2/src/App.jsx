import { Welcome } from "./components/Welcome";
const name = 'Alex'
export function App(){
    
    return (
        <div>
            <Welcome name = {name} age = {28}/>
        </div>
        
    )
}