export function Welcome(props) {
    const newProps = {
        ...props ,
        name: 'matteo'
    }
    return (
        <div>
            <p>Welcome, <strong>{newProps.name}</strong>!</p>
            <p>Your age is {newProps.age}.</p>
        </div>
    )    
}