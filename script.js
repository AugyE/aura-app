let hp = 10000;
let crystals = 0;
let loginCount = 0;
let friendCount = 0;

function updateDashboard() {
    document.getElementById("hp").innerText = hp;
    document.getElementById("crystals").innerText = crystals;
    document.getElementById("status").innerText = hp > 5000 ? "Radiant 🌟" : "Flickering ✨";
}

function showMessage(text) {
    document.getElementById("message").innerText = text;
    setTimeout(() => {
        document.getElementById("message").innerText = "";
    }, 2000);
}

function dailyLogin() {
    if (loginCount < 1) {
        hp += 25;
        crystals += 2;
        loginCount++;
        updateDashboard();
        showMessage("Logged in! +25 HP, +2 Crystals");
    } else {
        showMessage("Already logged in today!");
    }
}

function addFriend() {
    if (friendCount < 10) {
        hp += 100;
        crystals += 5;
        friendCount++;
        updateDashboard();
        showMessage("Friend added! +100 HP, +5 Crystals");
    } else {
        showMessage("Max friends added today!");
    }
}

function makePost() {
    hp += 50;
    updateDashboard();
    showMessage("Posted! +50 HP");
}

function updateMood() {
    hp += 20;
    updateDashboard();
    showMessage("Mood set! +20 HP");
}

function updateProfilePic() {
    const file = document.getElementById("pic-upload").files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profile-pic").src = e.target.result;
        };
        reader.readAsDataURL(file);
        showMessage("Profile picture updated!");
    }
}

function saveProfile() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    if (username && email) {
        showMessage(`Profile saved: ${username} (${email})`);
    }
}

// Initial setup
updateDashboard();