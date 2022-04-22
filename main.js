
let container = document.querySelector("#container");

for (let i = 0; i < 25; i++) {
    let botton = document.createElement("div");
    botton.className = "botton";
    container.appendChild(botton);
    botton.addEventListener("click", ()=>{
        botton.className = "botton press";
    })
}

/*** */

const square = document.getElementById("dropzone");


square.addEventListener("drop", ()=> {
    console-log("sdasdas")
});


square.ondrop(() => {
    console.log("asdas")
})