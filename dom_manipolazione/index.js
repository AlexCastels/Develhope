const btn = document.querySelector('.addList')
const input = document.querySelector('input')
const ul = document.querySelector('ul')


function addProduct(){
    if(input.value != ''){
        const li = document.createElement('li')
        ul.appendChild(li)
        li.innerHTML = `${input.value} <input type="checkbox" name="check" id="check">`
        input.value = ''
    } else {
        console.warn('Attenzione : inserire dati')
    }

};

btn.addEventListener('click', addProduct)
