console.log("Hello World");
window.alert("bro");

var element = document.getElementById("p1");
if (element !== null) {
    element.innerHTML = "hello";
} else {
    console.error("Element with ID 'p1' not found.");
}