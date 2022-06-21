'use strict';

const circle = document.getElementById('circle');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const body = document.body;
const style = getComputedStyle(body);

let numX = 0;
let numY = 0;
let up = true;
let row = true;
let click = true;
let id;

const move = () => {
  id = requestAnimationFrame(move);

  console.log();

  if (numY > (+style.height.slice(0, -2) - 100)) {
    up = !up;
  }

  if (numY < 0) {
    up = !up;
  }

  if (numX > (+style.width.slice(0, -2) - 120)) {
    row = !row;
  }

  if (numX < 0) {
    row = !row;
  }

  if (row) {
    if (up) {
      circle.style.left = `${numX += 4}px`;
      circle.style.top = `${numY += 6}px`;
    } else {
      circle.style.left = `${numX += 4}px`;
      circle.style.top = `${numY -= 6}px`;
    }
  } else {
    if (up) {
      circle.style.left = `${numX -= 4}px`;
      circle.style.top = `${numY += 6}px`;
    } else {
      circle.style.left = `${numX -= 4}px`;
      circle.style.top = `${numY -= 6}px`;
    }
  }

};

start.addEventListener('click', () => {
  if (click) {
    id = requestAnimationFrame(move);
    click = !click;
  } else {
    cancelAnimationFrame(id);
    click = !click;
  }
});

reset.addEventListener('click', () => {
  cancelAnimationFrame(id);
  numX = 0;
  numY = 0;
  click = true;
  circle.style.left = `${numX}px`;
  circle.style.top = `${numY}px`;
});