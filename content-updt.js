//example 1
let answer = prompt("What is your name?");
if (typeof(answr) === "string") {
    var h1 = document.createElement("h1")
    h1.innerText = answer;
    document.body.innerText = "";
    document.body.appendChild(h1);
}

//example 2
var h1 = document.createElement("h1")
h1.innerText = "Type into the input to make this text change"

var input = document.createElement("input")
input.setAttribute("type", "text",)

document.body.innerText = "";
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})
