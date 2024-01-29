import { Colors } from "./components/Colors"
const colorArr = [
    {id: 1 , name: 'blue'},
    {id: 2 , name: 'red'},
    {id: 3 , name: 'green'}
]
export function App(){
    return (
        <>
            <Colors colorArr={colorArr}/>
        </>
        
    )
    
}