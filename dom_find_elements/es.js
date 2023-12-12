const html = document.documentElement
const form = html.querySelector('form')

const firstName = form.querySelector('#firstName')
const lastName = form.querySelector('#lastName')
const age = form.querySelector('#age')

let obj = { firstName : `${firstName.value}`, lastName : `${lastName.value}`, age : `${age.value}`}
let person = JSON.stringify(obj)

console.log(obj);

form.setAttribute('data-person',`${person}`)