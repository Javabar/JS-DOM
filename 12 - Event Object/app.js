// document.addEventListener("click", (event)=>{
//     console.log(event)
//     console.log(event.target)
// })

const list = document.getElementById("list")

list.addEventListener("mouseover", (e)=>{
    e.target.textContent = e.target.textContent.toUpperCase;
});

list.addEventListener("mouseout", (e)=>{
    e.target.textContent = e.target.textContent.toLowerCase;
})