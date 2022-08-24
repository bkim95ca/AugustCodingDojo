function removeBtn(button) {
    let connection = document.querySelector("#"+button);
    connection.remove();
    let spanElement = document.querySelector("#"+button+"req-number");
    let currentCount = spanElement.innerText;
    console.log(spanElement)
    currentCount--;
    spanElement.innerText = currentCount;
}

function addConnection(elementID) {
    let spanElement = document.querySelector("#"+elementID);
    console.log(spanElement.innerText);
    let currentCount = spanElement.innerText;
    currentCount++;
    spanElement.innerText = currentCount;
}