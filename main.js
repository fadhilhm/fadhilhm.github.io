// change image of ICT
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/ICTTTT.png") {
        myImage.setAttribute("src", "images/ciken joki.jpg");
    } else {
        myImage.setAttribute("src", "images/ICTTTT.png");
    }
});

// username
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername() {
    const myName = prompt("Please enter your name.");
    if(!myName) {
        setUsername();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Selamat datang di Ekskul ICT!, ${myName}`;
    }
} 

if (!localStorage.getItem("name")) {
    setUsername();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Selamat datang di Ekskul ICT!, ${storedName}`;
}


myButton.addEventListener("click", () => {
    setUsername();
})