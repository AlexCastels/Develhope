const title = document.querySelector('.title')
const img = document.querySelector('img')
const input = document.querySelector('.code')
const par = document.querySelector('.par')
const btn = document.querySelector('.btn')
const errore = document.querySelector('.error')

async function getData(){
    try {
        const response = await fetch(`https://ringsdb.com/api/public/card/${input.value}`)//ricorda che tutta la funzione agisce in modo asyncrono, anche i dati che legge
        const cards = await response.json()
        title.textContent = cards.name
        img.setAttribute('src' , `https://ringsdb.com${cards.imagesrc}`)
        par.innerHTML = `${cards.flavor}`
        console.log(cards)
        errore.textContent = ''
    } catch (err) {
        errore.textContent = 'ATTENZIONE: CODICE CARTA INESISTENTE'
    }
}

//codici card disponibili sul sito ringsDB.com, inserire valori come 01001/01002/01003 ecc..
//alcune card ci mettono di più a caricare rispetto ad altre

btn.addEventListener('click' , getData)


