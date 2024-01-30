import { Container } from "./components/Container";
import { Welcome } from "./components/Welcome";



export function App(){
    return (
        <>
            <Container title={<h1>My title</h1>}>
                <Welcome/>
            </Container>
        </>
        
    )
    
}