// Use a method with a callback

// Create a script that uses the Node.js core fs.writeFile() (callback API) method to write a text file. 
//The documentation for this method is on the Node.js File system page:

//  https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback

import fs from 'node:fs'

const contenuto = 'il mio testo'

fs.writeFile('FileProva.txt' , contenuto , (err) => {
    if(err){
        console.log('Attenzione errore');
        return
    }
    
    console.log('File creato con successo');
})