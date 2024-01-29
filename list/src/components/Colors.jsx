function Color({colore , id}){
    return <li key={id}>{colore}</li>
}

export function Colors({colorArr}){
    return (
        <ul>
            {colorArr.map((color)=> 
                <Color colore = {color.name} id ={color.id}/>
            )}        
        </ul>
    )
}


