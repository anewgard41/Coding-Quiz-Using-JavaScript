
// Ranks scores in order from highest to lowest. Values retrieved from local storage object "highscores".

function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

// Then a list item is created in the ordered list using score value for initials and numerical score. After the creation of the liTag, it is appended. 

    highscores.forEach(function (score) {
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;
        var olE1 = document.getElementById("highscores");
        olE1.appendChild(liTag);
    });

}

// Clear highscores button with event listener added. Removes highscores object from local storage. 

function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clearHighscores)

printHighscores();