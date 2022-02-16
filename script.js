"use_strict";

console.log("js script loaded");
function manageSlantedZIndices() {
  let blocks = document.querySelectorAll(".wp-block-sprayloc-slanted-container");

  for (let i = blocks.length - 1; i >= 0; i--) {
    let block = blocks[i];
    // console.log(block);

    block.style.zIndex = blocks.length - i + 2;
  }
}

window.addEventListener("DOMContentLoaded", function () {
  manageSlantedZIndices();
});