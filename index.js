let check1 = document.querySelector("#word1")
let btnn = document.querySelector(".btn")
let check2 = document.querySelector("word2")
check1.style.color = "red"
check1.style.fontSize = "20px"

btnn.addEventListener("click", ()=>{
    check1.classList.toggle("uselater")
})




