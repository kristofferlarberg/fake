function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("container");
  background(123, 104, 238);
}

let arrOne = [
  [80, 30],
  [70, 30],
  [60, 20],
  [50, 0],
  [50, 10],
  [40, 0],
  [40, 10],
  [30, 20],
  [20, 30],
  [10, 30],
];

let arrTwo = [
  [80, 0],
  [70, 0],
  [60, 10],
  [50, 20],
  [50, 30],
  [40, 20],
  [40, 30],
  [30, 10],
  [20, 0],
  [10, 0],
];

const bottomArr = [
  [80, 30],
  [70, 30],
  [60, 20],
  [50, 0],
  [50, 10],
  [40, 0],
  [40, 10],
  [30, 20],
  [20, 30],
  [10, 30],
];

const topArr = [
  [80, 0],
  [70, 0],
  [60, 10],
  [50, 20],
  [50, 30],
  [40, 20],
  [40, 30],
  [30, 10],
  [20, 0],
  [10, 0],
];

let fade = 0;
let state = 0;

function draw() {
  frameRate(30);
  noStroke();

  state++;

  if (fade < 11) {
    if (frameCount % 1 === 0) drawRow(arrOne, 0);
    if (frameCount % 2 === 0) drawRow(arrTwo, 5);
    if (frameCount % 3 === 0) drawRow(arrOne, 40);
    if (frameCount % 4 === 0) drawRow(arrTwo, 45);
    if (frameCount % 5 === 0) drawRow(bottomArr, 70);
    if (frameCount % 6 === 0) drawRow(topArr, 130);

    if (frameCount % 1 === 0) drawRow(arrOne, 150);
    if (frameCount % 2 === 0) drawRow(arrTwo, 155);
    if (frameCount % 3 === 0) drawRow(arrOne, 190);
    if (frameCount % 4 === 0) drawRow(arrTwo, 195);
    if (frameCount % 5 === 0) drawRow(bottomArr, 220);
    if (frameCount % 6 === 0) drawRow(topArr, 280);

    if (frameCount % 1 === 0) drawRow(arrOne, 300);
    if (frameCount % 2 === 0) drawRow(arrTwo, 305);
    if (frameCount % 3 === 0) drawRow(arrOne, 340);
    if (frameCount % 4 === 0) drawRow(arrTwo, 345);
    if (frameCount % 5 === 0) drawRow(bottomArr, 370);
    if (frameCount % 6 === 0) drawRow(topArr, 430);

    if (frameCount % 1 === 0) drawRow(arrOne, 450);
    if (frameCount % 2 === 0) drawRow(arrTwo, 455);
    if (frameCount % 3 === 0) drawRow(arrOne, 490);
    if (frameCount % 4 === 0) drawRow(arrTwo, 495);
    if (frameCount % 5 === 0) drawRow(bottomArr, 520);
    if (frameCount % 6 === 0) drawRow(topArr, 580);

    if (frameCount % 1 === 0) drawRow(arrOne, 600);
    if (frameCount % 2 === 0) drawRow(arrTwo, 605);
    if (frameCount % 3 === 0) drawRow(arrOne, 640);
    if (frameCount % 4 === 0) drawRow(arrTwo, 645);
    if (frameCount % 5 === 0) drawRow(bottomArr, 670);
    if (frameCount % 6 === 0) drawRow(topArr, 730);
  }

  if (state === 500) {
    state = 0;
    background(123, 104, 238);
  }
}

function drawSquare(x, y) {
  fade += 0.1;
  if (frameCount % 1 === 0) fill(0, 0, 255, fade);
  if (frameCount % 2 === 0) fill(138, 43, 226, fade);
  rect(x, y, 10);

  if (fade > 10) {
    fade = 0;
  }
}

function drawRow(arr, offsetY) {
  for (let i = 0; i < width; i += 80) {
    for (let j = 0; j < arr.length; j++) {
      let x = arr[j][0] + i;
      let y = arr[j][1];
      y += offsetY;
      drawSquare(x, y);
    }
  }
}
