let select = document.querySelector('select')
let input = document.querySelector('#elem1')
let button = document.querySelector('button')
let option = document.querySelectorAll('select option')
input.value = select.value
input.addEventListener('change', () => headRed())
select.addEventListener('change', () => changeCurrentValue())
button.addEventListener('click', () => getCurrentValue())



 const headRed = () => {
     if (input.value === "") {
         input.style.border = "2px solid red "
         alert('empty field')
        return;
     }
     else {
         input.style.border = "2px solid grey "
         button.disabled = false
     }
 }


function changeCurrentValue() {
    Array.from(select.options).forEach((item) => {
        if (item.selected) {
            input.value = item.text
        }
    })
}


function getCurrentValue(){
    Array.from(select.options).forEach((item) => {
        if (item.selected) {
            item.text = input.value
        }
    })
}