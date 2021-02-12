// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

/*
1. get back ground color
2. event handler  + event 
3. condition 

*/

const purple = "#d8d8ff";
const blue = "#d8ecff";
const orange = "#E9B011";

function resizeHandler() {
  const currentSize = window.innerWidth;
  console.log(currentSize);
  console.log(document.body.style.backgroundColor);

  if (currentSize >= 1000 && currentSize >= 650) {
    document.body.style.backgroundColor = orange;
  } else if (currentSize > 650 && currentSize < 1000) {
    document.body.style.backgroundColor = purple;
  } else {
    document.body.style.backgroundColor = blue;
  }
}

function init() {
  window.addEventListener("resize", resizeHandler);
}

init();
