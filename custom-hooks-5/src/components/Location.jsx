
import { useCurrentlocation } from "../hooks/useCurrentLocation";

export function Location(){
    
    const [handlePos , latitude , longitude] = useCurrentlocation()
    
    return (
        <>
            <button onClick={handlePos}>Show position</button>
            {latitude && <p>Longitude is: {longitude}</p>}
            {longitude && <p>Latitude is: {latitude}</p>}
        </>
    )
}