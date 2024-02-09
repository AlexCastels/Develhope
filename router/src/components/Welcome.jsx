import { Link, useParams } from "react-router-dom";

export function Welcome(){

    const {name} = useParams()

    return (
        <div className="welcome">
            <h2>Hello, {name}!</h2>
        </div>

    )
}