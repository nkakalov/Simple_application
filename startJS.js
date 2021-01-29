let select = document.querySelector('select')
let input = document.querySelector('#elem1')
let button = document.querySelector('button')
let option = document.querySelectorAll('select option')
input.value = select.value
select.addEventListener('change', () => changeCurrentValue())
button.addEventListener('click', () => getCurrentValue())

function changeCurrentValue() {
    Array.from(select.options).forEach((item) => {
        if (item.selected) {
            input.value = item.text
        }
    })
}

function getCurrentValue(){
    if (input.value === "") {
        input.style.border = "2px solid red "
        alert('empty field')
       return;
    }
    else {
        input.style.border = "2px solid grey "
        button.disabled = false
    }    
    
    
    Array.from(select.options).forEach((item) => {
        if (item.selected) {
            item.text = input.value
        }
    })
}