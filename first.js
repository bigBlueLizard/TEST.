let boxes = document.querySelectorAll(".box");
let flag = true;
let winner = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

for (let box of boxes) {
    box.addEventListener("click", () => {
        if (box.innerText === "") {  // Prevent overwriting
            if (flag === true) {
                box.innerText = "X";
                box.style.color = "red";
                flag = false;
            } else {
                box.innerText = "O";
                box.style.color ="green";
                flag = true;
            }
            checkwinner();
        }
    });
}

function checkwinner() {
    for (let i of winner) {
        let a = i[0];
        let b = i[1];
        let c = i[2];
        if (boxes[a].innerText !== "" && boxes[a].innerText === boxes[b].innerText && boxes[b].innerText === boxes[c].innerText) {
            alert("Winner: " + boxes[a].innerText);
            disableButtons();
            break;
        }
    }
}

function disableButtons() {
    for (let box of boxes) {
        box.style.pointerEvents = "none"; // Disable clicks by preventing pointer events
    }
}

let rstbtn = document.querySelector("#rst");
rstbtn.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = "";
        box.style.pointerEvents = "auto"; // Re-enable clicks
    }
    flag = true; // Reset the flag for a new game
});
