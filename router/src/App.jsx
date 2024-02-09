import { Link, Route, Router, Routes } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { Counter } from "./components/counter";
import { Title } from "./components/Title";
import { ShowGitHubUSer } from "./components/ShowGitHubUser";
import { GitHubUserList } from "./components/GitHubUserList";
import { ShowGitList } from "./components/ShowGitList";


export function App(){
    
    return (
        <div className="main">
            <Title/>
            <Routes>
                <Route path='/'/>
                <Route path='welcome/:name' element={<Welcome/>}/>
                <Route path='counter' element={<Counter/>}/>
                <Route path='userFetch' element={<ShowGitHubUSer username ='AlexCastels'/>}/>
                <>
                    <Route path='listUsers' element={<GitHubUserList/>}>
                        <Route index element={<p>Please select a user!</p>}/>
                        <Route path=":id" element={<ShowGitList/>}/>
                    </Route>    
                </>
                <Route path="*" element={<div><h2>Sorry page not Found!</h2><Link to='listUsers'>Go back</Link></div>}/>    
            </Routes>
        </div>
    )
}