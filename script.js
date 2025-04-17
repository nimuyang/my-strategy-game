const board = document.getElementById("board");
let currentPlayer = 1;

for (let y = 0; y < 6; y++) {
  for (let x = 0; x < 6; x++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.onclick = () => {
      if (!cell.classList.contains("player1") && !cell.classList.contains("player2")) {
        cell.classList.add(currentPlayer === 1 ? "player1" : "player2");
        currentPlayer = currentPlayer === 1 ? 2 : 1;
      }
    };
    board.appendChild(cell);
  }
}