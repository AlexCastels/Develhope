import express from 'express'
import morgan from 'morgan'
//utilizzando ES6 bisogna installare ed importare il pacchetto 'dotenv' per permettere la lettura di file .env
import dotenv from 'dotenv'
dotenv.config()
//utilizzato per validare gli elementi
import Joi from 'joi'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

//utilizzato per creare uno schema per validare un elemento
//in questa maniera verrà indicato il tipo di dato che dovrà essere inserito
//e se questo sarà obbligatorio o meno da inserire
const schema = Joi.object({
    id : Joi.number().integer().required() ,
    name : Joi.string().required()
})


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


//vengono mandati i dati dei pianeti in formato json
app.get('/api/planets' , (req , res) => {
    res.status(200).json(planets)
})

//viene mandato il singolo pianeta corrispondente all'id navigato come endpoint dell'url
app.get('/api/planets/:id' , (req , res) => {
    const {id} = req.params
    const planet = planets.find(p => p.id === Number(id))
    res.status(200).json(planet)    
})

//è possibile aggiungere un pianeta all'array locale
app.post('/api/planets' , (req , res) => {
    const {id , name} = req.body
    const newPlanet = {id , name}
    const validate = schema.validate(newPlanet)
    const planet = planets.find(p => p.id === Number(id))
    if(planet || validate.error){
        res.status(400).json({msg : 'Error during planet creation'})
    } else {
        planets = [...planets , newPlanet]
        res.status(201).json({msg : 'Planet added successfully'})
    }
})

//permettiamo la modifica di un el con stesso id nell'array, se ID dell'endpoint è uguale ad uno esistente
//ricopia l'obj e ne sostituisce il parametro 'name', altrimenti ritorna l'elemento non modificato
app.put('/api/planets/:id' , (req , res) => {
    const { id } = req.params
    const { name } = req.body
    planets = planets.map((p) => (p.id === Number(id) ? {...p , name} : p))
    res.status(200).json({ msg : "Planet updated"})
})

//cancelliamo il pianeta con lo stesso ID che selezioniamo nell'endpoint
//filtriamo l'array, ritornando un nuovo array contenente tutti gli elementi che non 
//corrispondono all'el con ID selezionato
app.delete('/api/planets/:id' , (req, res) => {
    const { id } = req.params
    planets = planets.filter((p) => (p.id !== Number(id)))
    res.status(200).json({ msg : 'Planet deleted!' })
})

app.listen(process.env.PORT , ()=>{
    console.log('Server running on http://localhost:3000');
})

