function toggleLogin(btn) {
    if (btn.innerText === "Login") {
        btn.innerText = "Logout"
    }
    else {
        btn.innerText = "Login";
    }
}

function removeDefinition(btn) {
    btn.remove();
}

function clickAlert() {
    alert("Ninja was liked.")
}