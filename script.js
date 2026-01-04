const popup = document.getElementById("pop-up");

if (sessionStorage.getItem("pop-upShown")) {
    popup.style.display = "none";
}

function closePopup() {
    popup.style.display = "none";
    sessionStorage.setItem("pop-upShown", "true");
}