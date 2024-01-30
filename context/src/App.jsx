import { Clock } from "./components/Clock";
import { Container } from "./components/Container";
import { Welcome } from "./components/Welcome";
import { LanguageComponent } from "./components/LanguageComponent";
import { useState } from "react";


export function App(){
    const [language , setLanguage] = useState('en')

    function handleLanguage(language){
        setLanguage(language)
    }

    return (
        <div>
            <div className="main">
            <LanguageComponent.Provider value={language}>
                <Container title={<h1>My title</h1>}>
                    <Welcome/>
                </Container>
                <div>
                    <button onClick={()=> handleLanguage('it')}>IT</button>
                    <button onClick={()=> handleLanguage('en')}>EN</button>
                </div>
                <Clock/>
                
            </LanguageComponent.Provider>
            </div>
        </div>
        
    )
    
}