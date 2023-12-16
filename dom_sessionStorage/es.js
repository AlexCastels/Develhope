const email = document.querySelector('.email')
const name = document.querySelector('.firstname')
const surname = document.querySelector('.lastname')
const title = document.querySelector('.title-name')
const p = document.querySelector('.printedform')
const btn = document.querySelector('.btn')
const restore = document.querySelector('.restore')
const storageEmail = sessionStorage.getItem('email' , `${email.value}`)
const storageName = sessionStorage.getItem('name' , `${name.value}`)
const storageSurname = sessionStorage.getItem('surname' , `${surname.value}`)
const span = document.querySelector('.title-name')

span.textContent = storageName

console.log(storageEmail);
console.log(storageName);
console.log(storageSurname)



function save(){
    if(email.value && name.value && surname.value){
    sessionStorage.setItem('email' , `${email.value}`)
    sessionStorage.setItem('name' , `${name.value}`)
    sessionStorage.setItem('surname' , `${surname.value}`)
    p.textContent = 'Gli elementi sono stati salvati correttamente'
    } else {
        p.textContent = 'ATTENZIONE: Inserire dati'
    }
}

btn.addEventListener('click', save)

restore.addEventListener('click', () =>{
    if(storageEmail || storageName || storageSurname){
        email.value = storageEmail
        name.value = storageName
        surname.value = storageSurname
        p.textContent = 'Elementi caricati con successo'
    // } else if(storageEmail === email.value || storageName === name.value || storageSurname === surname.value){
    //     p.textContent = 'Elementi già caricati'
    } else {
        p.textContent = 'Nessun dato nel server'
    }
})


