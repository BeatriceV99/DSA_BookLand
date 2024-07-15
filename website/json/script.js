// funzione per apertura popup del login e della registrazione
function openLoginPopup() {
    document.getElementById("loginPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("loginPopup").style.display = "none";
}

function showRegisterForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}

// funzione per apertura popup degli eventi
function showPopup(id) {
    document.getElementById(id).style.display = 'flex';
}

function hidePopup(id) {
    document.getElementById(id).style.display = 'none';
}