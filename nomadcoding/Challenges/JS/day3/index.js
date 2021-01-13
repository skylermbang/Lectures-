// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const msg = document.querySelector("h2");

const superEventHandler = {
  enter: function () {
    const randomColorNumber = Math.floor(Math.random() * 5);
    msg.style.color = colors[randomColorNumber];
    msg.innerText = "The pointer is here !";
    console.log("mouse is up");
  },
  leave: function () {
    const randomColorNumber = Math.floor(Math.random() * 5);
    msg.style.color = colors[randomColorNumber];
    msg.innerText = "The pointer is out !";
    console.log("mouse is gone ");
  },
  click: function () {
    const randomColorNumber = Math.floor(Math.random() * 5);
    msg.style.color = colors[randomColorNumber];
    msg.innerText = " Right click detected!";
    console.log("i see you clicked");
  },
  resize: function () {
    const randomColorNumber = Math.floor(Math.random() * 5);
    msg.style.color = colors[randomColorNumber];
    msg.innerText = " Resize detected ";
    console.log("resiezed");
  }
};

function init() {
  msg.addEventListener("mouseover", superEventHandler.enter);
  msg.addEventListener("mouseout", superEventHandler.leave);
  window.addEventListener("contextmenu", superEventHandler.click);
  window.addEventListener("resize", superEventHandler.resize);
}

init();
