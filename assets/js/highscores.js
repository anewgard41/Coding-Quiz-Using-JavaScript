function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function (score) {
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;
        var olE1 = document.getElementById("highscores");
        olE1.appendChild(liTag);
    });

}


function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clearHighscores)

printHighscores();