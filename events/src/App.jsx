import { AlertClock } from "./components/AlertClock"


function handleShowTime(){
    const actualTime = new Date()
    alert(`The current time is: ${actualTime.toLocaleTimeString()}`)
}


export function App(){
    
    return (
        <div>
            <AlertClock event={handleShowTime} text='Click me for show time!'/>
        </div>
        
    )
}