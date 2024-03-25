import { db } from "./db.mjs"

//permette di accedere a tutti i dati della table del DB
export async function getAll(req , res){
    try {
        const data = await db.many("SELECT * FROM planets")
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ msg : 'Errore nel caricamento dei dati' })
    }
}

//selezioniamo solo un pianeta tramite :id
export async function getOne( req , res ){
    try {
        const { id } = req.params
        const onePlanet = await db.one("SELECT * FROM planets WHERE id=$1" , Number(id))
        res.status(200).json(onePlanet)
    } catch (error) {
        res.status(404).json({ msg : 'planet not found' })
    }
}

//cancella un pianeta con :id corrispondente
export async function deletePlanet(req , res){
    try {
        const { id } = req.params
        await db.none("DELETE FROM planets where id=$1" , Number(id))
        res.status(200).json({ msg : `Planet with id:${id} deleted` })    
    } catch (error) {
        res.status(400).json({ msg : 'Error'})
    }
}

//modificare 'name' ad un pianeta
export async function modifyPlanet(req , res){
    try {
        const { id } = req.params
        const { name } = req.body
        await db.none("UPDATE planets SET name=$2 WHERE id=$1" , [Number(id) , name])
        res.status(200).json({ msg : 'pianeta modificato' })
    } catch (error) {
        res.status(400).json({ msg : 'Error'})
    }
}

//creare un nuovo pianeta
export async function createPlanet(req , res){
    try {
        const { name } = req.body
        await db.none("INSERT INTO planets (name) VALUES ($1)" , name)
        res.status(201).json({ msg : 'Planet created' })
    } catch (error) {
        res.status(400).json({ msg : 'Error'})
    }
}

//è possibile ora aggiungere un file alla colonna 'file'
export async function uploadFile(req ,res){
    try {
        const { id } = req.params
        const fileName = req.file.path
        if(fileName){
            await db.none("UPDATE planets SET file=$2 WHERE id=$1" , [Number(id) , fileName])
            res.status(201).json({ msg : 'file added' })
        }
    } catch (error) {
        res.status(400).json({ msg : 'Error'})
    }
}