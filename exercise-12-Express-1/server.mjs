import express from 'express'
import morgan from 'morgan'
//utilizzando ES6 bisogna installare ed importare il pacchetto 'dotenv' per permettere la lettura di file .env
import dotenv from 'dotenv'
dotenv.config()

const app = express()

//permette al server di leggere file .json ricevuti dal client
app.use(express.json())
//abilità il server all'uso di morgan
app.use(morgan('dev'))

let planets = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    }
]

//middleware per leggere in console il metodo ad ogni richiesta ricevuta
app.use('/' , (req , res , next) => { 
    console.log(req.method)
    next()
})

//imposto un path di prova per verificare che il server effettivamente funzioni
app.get('/prova' , (req , res) => {
    res.status(200).json({msg : 'Tutto ok'})
})

//quando l'endpoint viene navigato, mando i dati dei pianeti in formato json al client
app.get('/planet' , (req , res) => {
    res.status(200).json(planets)
})

app.listen(process.env.PORT , ()=>{
    console.log('Server running on http://localhost:3000');
    // console.log(process.env.PORT);
})

