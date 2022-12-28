const textareaEL = document.getElementById("textarea")

const totalcounterEL = document.getElementById("total-counter")

const remainingcounterEL = document.getElementById("remaining-counter")

textareaEL.addEventListener("keyup", ()=>{
    Updatecounter()
})


function Updatecounter() {
    totalcounterEL.innerText = textareaEL.value.length
    remainingcounterEL.innerText = textareaEL.getAttribute("maxLength") -
    textareaEL.value.length
}