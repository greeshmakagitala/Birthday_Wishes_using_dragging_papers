const papers = document.querySelectorAll(".paper");

let selectedPaper = null;
let initialX = 0;
let initialY = 0;

function dragStart(e) {
  selectedPaper = this;
  initialX = e.clientX - selectedPaper.offsetLeft;
  initialY = e.clientY - selectedPaper.offsetTop;
}

function drag(e) {
  if (selectedPaper) {
    e.preventDefault();

    const x = e.clientX - initialX;
    const y = e.clientY - initialY;

    selectedPaper.style.transform = `translate(${x}px, ${y}px)`;
  }
}

function dragEnd() {
  selectedPaper = null;
  initialX = 0;
  initialY = 0;
}

papers.forEach((paper) => {
  paper.addEventListener("mousedown", dragStart);
  paper.addEventListener("mousemove", drag);
  paper.addEventListener("mouseup", dragEnd);
});
