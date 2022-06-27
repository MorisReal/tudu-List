const app = document.querySelector(".app");
const comment = document.querySelector(".text");
const urlImg = document.querySelector(".input-img");
const button = document.querySelector("button");
let deleteButton;

button.onclick = () => {
    if (comment.value != "") {
        let div = document.createElement("div");
        div.innerHTML += 
        `<p>
        <img src="${urlImg.value}" width="100px">
        ${comment.value}
        <button class="d" style="width:30px; background:red;">x</button>
        </p>`; 
        app.append(div); 
        deleteButton = document.querySelectorAll(".d");
    }

    for(let i=0; i <deleteButton.length; i++) {
        deleteButton[i].onclick = () => {
            deleteButton[i].parentElement.style.display = "none";
        }
    }
}

