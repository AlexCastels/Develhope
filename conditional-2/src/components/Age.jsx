export function Age({name , age}){
    return (
        <div>
            {age >= 18 ? <p>Your age is {age}.</p> : <p>{name}, you are very young!</p>}
        </div>
    )
}




