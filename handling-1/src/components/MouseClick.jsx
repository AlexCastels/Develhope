export function MouseClick(){
    function handleClick(event){
        console.log(`The button's name is: "${event.target.name}"`)
    }
    
    return <button name = 'one' onClick={handleClick}>Click Me!</button>
}

