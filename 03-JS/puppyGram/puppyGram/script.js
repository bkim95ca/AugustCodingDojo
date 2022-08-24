function petDog() {
    alert("You just pet this puppy. That's a good boy/girl!");
}

function toggleLogin(btn) {
    console.log("You just clicked this button.", btn);
    //btn represents the bbutton that was clicked
    //to change its text -> modify the btn.innerText
    //if the buttons inner text currently says Login, then change it to logout
    //otherwise change it to login

    if(btn.innerText === "Login") {
        btn.innerText = "Logout";
    }
    else {
        btn.innerText = "Login";
    }
}

function removeButton(btn) {
    btn.remove();
}

function playVideo(videoElement) {
    // console.log("annnnnd action!", videoElement);
    videoElement.play();
}

function pauseVideo(videoElement) {
    videoElement.pause();
}

function switchImg(imgElement) {
    imgElement.src= "./resources/anothaPuppy.jpeg";
}


function removeCookieBox(id) {
    //grab from the html an element with the id of "cookie-box" and put it in a variable
    let elementToRemove = document.querySelector("#"+id);
    elementToRemove.remove();
}


function increaseLikes(elementID) {
    //grab an element with that elementID
    let spanElement = document.querySelector("#"+elementID);
    console.log(spanElement.innerText);

    //store the number that is in the span element into a variable
    let currentCount = spanElement.innerText;
    
    //increment the count
    currentCount++;


    //update the spanElement inner text to be the current count after increment the current count
    spanElement.innerText = currentCount;

    // document.querySelector("#"+elementID).innerText = parseInt(document.querySelector("#"+elementID).innerText)+1;
}

function searchPuppy() {
    // console.log("searching for a puppy named clifford!");
    let element = document.querySelector("#name-search");
    alert("you searched for " + element.value);
}

function chooseLocation(location) {

    alert("You are searching for a pet in this location: " + location.value);
}