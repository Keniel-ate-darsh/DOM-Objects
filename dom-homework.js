let div = document.getElementById("myDiv");

let header = document.createElement("h1");
div.appendChild(header).textContent = "Welcome to DOM Homework";

let paragraph =  document.createElement("p");

div.appendChild(paragraph).textContent = "This is you first DOM homework assignment"

let unorderedList = document.createElement("ul");
div.appendChild(unorderedList)

let listItem = document.createElement("li");
listItem.textContent = "Yo"
unorderedList.appendChild(listItem)

let listItem1 = document.createElement("li");
listItem1.textContent = "Hello"
unorderedList.appendChild(listItem1)

let listItem2 = document.createElement("li");
listItem2.textContent = "Hey"
unorderedList.appendChild(listItem2)

let style = document.createElement("style");
style.textContent = `
    .highlight {
        background-color: green;
    }
`
document.head.appendChild(style);

let button = document.createElement("button");
button.textContent = "Add New List Item";
div.appendChild(button);

newListItemCount = 0;

button.addEventListener("click", function() {
    newListItemCount++;
    let newListItem = document.createElement("li");
    newListItem.textContent = "New Item " + newListItemCount;
    newListItem.style.color = randomColor();
    unorderedList.appendChild(newListItem);
});

div.addEventListener("click", function() {
    div.style.backgroundColor = randomColor();
});
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
