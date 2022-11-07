//Write your Javascript code here

document.getElementById("addButton").addEventListener("click", addfunction)
let elementInput = document.getElementById("newGoods");
counter = 0

function addfunction(){
    let inputText = elementInput.value;

    let list = document.getElementById("list");
    let newLi = document.createElement("li");
    let newText = document.createTextNode(inputText);
    
    let checkB = document.getElementById("checkBox")
    newLi.appendChild(newText);
    if(checkB.checked){
        newLi.setAttribute("class","healthy");
    }
    else{
        newLi.setAttribute("class","unhealthy");
    }

    
    newLi.setAttribute("id", counter)
    counter = counter + 1

    console.log(newLi)
    list.appendChild(newLi);
}

function loop(item,){
    let id = item.getAttribute("id")
    if (id >= counter){
        counter = counter + 1
    }
}