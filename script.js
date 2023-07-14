const container = document.getElementById("container");
const colorPicker = document.getElementById("colorPicker");
const gridSizeInput = document.getElementById("gridSize");
const gridSizeButton = document.getElementById("gridSizeButton");

gridSizeButton.addEventListener("click", updateGrid);

function updateGrid() {
  const gridSize = parseInt(gridSizeInput.value);
  
  if (gridSize > 0 && gridSize <= 100) {
    // Clear the existing grid
    container.innerHTML = "";

    // Generate the new grid
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
      const div = document.createElement("div");
      div.className = "square";
      container.appendChild(div);
    }

    // Reset event listeners for the new grid
    resetEventListeners();
  }
}

function resetEventListeners() {
  const squares = document.getElementsByClassName("square");

  Array.from(squares).forEach(square => {
    square.addEventListener("mouseenter", () => {
      const randomColor = getRandomColor();
      square.style.backgroundColor = randomColor;
    });
  });
}

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
