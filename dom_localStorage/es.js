const btn = document.querySelector('.btn')
const email = document.querySelector('.email')
const name = document.querySelector('.firstname')
const surname = document.querySelector('.lastname')
const restore = document.querySelector('.restore')
const title = document.querySelector('.title-name')
title.textContent = localStorage.getItem('name')

// console.log(email);
// console.log(name);
// console.log(surname);

function save(){
    localStorage.setItem('email' , `${email.value}`)
    localStorage.setItem('name' , `${name.value}`)
    localStorage.setItem('surname' , `${surname.value}`)
}

btn.addEventListener('click' , save)

restore.addEventListener('click' , () => {
    email.value = localStorage.getItem('email')
    name.value = localStorage.getItem('name')
    surname.value = localStorage.getItem('surname')
})


