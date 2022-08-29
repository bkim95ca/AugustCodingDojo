function cartAlert() {
    alert("Your Cart is empty!");
}

function switchImg(imgElement) {
    imgElement.src= "./images/assets/succulents-2.jpg";
}

function switchBack(imgElement) {
    imgElement.src="./images/assets/succulents-1.jpg"
}

function removeCookieBox(id) {
    //grab from the html an element with the id of "cookie-box" and put it in a variable
    let elementToRemove = document.querySelector("#"+id);
    elementToRemove.remove();
}

