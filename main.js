let count = 0
let countEl = document.getElementById("count-el")

function increment(){
    count = count + 1
    countEl.textContent = count
}

let prvEntries = document.getElementById("prv-entries")
function save(){
prvEntries.textContent += count  + " - "
count = 0
countEl.innerText = 0

}