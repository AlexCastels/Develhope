import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css"
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json())

//Es4: Passare il fetcher con SWRConfig in modo globale

createRoot(document.getElementById('root')).render(
    <SWRConfig value={{fetcher}}>
        <App/>
    </SWRConfig>
)

