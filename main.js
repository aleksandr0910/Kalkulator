const result = document.getElementById("sluttverdi")
const keys = Array.from(document.querySelectorAll(".keys"))
const sfelt = document.getElementById("skrivefelt")
const resultButton = document.getElementById("resultButton")
const display = document.getElementById("displayresultat")
const clear = document.getElementById("clear")
console.log(keys)

keys.map(key =>{
    
    key.addEventListener('click', e =>{
        
        result.innerHTML += (e.target.value)
    })
})


resultButton.addEventListener("click", e =>{
    e.preventDefault()
    console.log("ape salat")
   display.innerText = eval(result.innerText)
})

clear.addEventListener('click', () => {
    location.reload()
})




