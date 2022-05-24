const list = document.getElementsByTagName("list");
const notOrange =document.getElementsByClassName('not-orange')

console.log(list);

for(let i=0; i <list.length; i++){
    list[1].getElementsByClassName.color = "orange";
}

for (let i=0; i <notOrange.length; i++) {
    notOrange[i].style.color = "red";
}