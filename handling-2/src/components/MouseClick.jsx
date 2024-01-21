export function MouseClick(){
    
    function handleClickBtn(event){
        console.log(`The button's name is: "${event.target.name}"`)
        
    }
    
    function handleClickImg(event){
        console.log(`The image src is: "${event.target.src}"`)
        event.stopPropagation()
    }
    
    return (
        <button name = 'one' onClick={handleClickBtn}>
            <img width={30} height={30} onClick={handleClickImg} title='Cliccami per vedere in console la sorgente' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6349UUGMH74VeuQjQXFRYpO3UYTdDCSCMg&usqp=CAU" alt="super mario" />
            Click Me!
        </button>
    )
}

