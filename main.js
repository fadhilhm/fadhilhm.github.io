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
