import { useState } from "react"

export function useCurrentlocation(){
    const [longitude , setLongitude] = useState('')
    const [latitude , setLatitude] = useState('')

    function handlePos(){
        
        function success(position) {
            setLongitude(position.coords.latitude)
            setLatitude(position.coords.longitude)
            console.log(longitude)
            console.log(latitude)
        }
    
        function error() {
            console.log("Sorry, no position available.");
        } 
    
        const options = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: false,
        }
        
        const pos = navigator.geolocation.watchPosition(success, error, options)
    }

    return [handlePos , latitude , longitude]
}