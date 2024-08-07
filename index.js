let countElement = document.getElementById("count-el")
let incrementButton = document.getElementById("increment-btn")
let saveButton = document.getElementById("save-btn")
let entries = document.getElementById("entries")

let count = 0
function increment(){
    count += 1
    countElement.textContent = count
}
function save(){
    entries.textContent += count + " - "
    countElement.textContent = 0
    count = 0
}