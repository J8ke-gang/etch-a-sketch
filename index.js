//defult color
let color = "black";

//create div using js //putting grid squares in the container div
function populateContainer(size) {
  let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.classList.add("cell");
    container.style.backgroundColor = "#e0e0e0";
   
//hover effect
      square.addEventListener("mouseover", colorSquare);
      container.appendChild(square);
    }
  }  

  //16x16 grid of square divs
  populateContainer(16);

// error if conditions arent met
  function changeSize(input) {
    input >= 2 && input <= 100 ? populateContainer(input) : console.log("Input error! Please provide a number between 2 and 100.");
  };
//random colors
  function colorSquare(){
    color === "random" ? this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` : this.style.backgroundColor = color;
  }
// change colors black,gray,rainbow
  function changeColor(choice){
    color = choice;
  }
// reset background
  function resetContainer() {
    let container = document.querySelector(".container");
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "#e0e0e0"));
}
