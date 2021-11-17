function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("container");
  background(0);
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

function draw() {
  noStroke();

  if (fade < 15) {
    setTimeout(() => {
      drawRow(arrOne, 0);
    }, 0);

    setTimeout(() => {
      drawRow(arrTwo, 5);
    }, 0);

    setTimeout(() => {
      drawRow(arrOne, 40);
    }, 0);

    setTimeout(() => {
      drawRow(arrTwo, 45);
    }, 0);

    setTimeout(() => {
      drawRow(bottomArr, 70);
    }, 0);

    setTimeout(() => {
      drawRow(topArr, 130);
    }, 0);

    setTimeout(() => {
      drawRow(arrOne, 150);
    }, 0);

    setTimeout(() => {
      drawRow(arrTwo, 155);
    }, 0);

    setTimeout(() => {
      drawRow(arrOne, 190);
    }, 0);

    setTimeout(() => {
      drawRow(arrTwo, 195);
    }, 0);

    setTimeout(() => {
      drawRow(bottomArr, 220);
    }, 0);

    setTimeout(() => {
      drawRow(topArr, 280);
      // noLoop();
    }, 0);
  }
}

function drawSquare(x, y) {
  fade += 0.1;

  fill(255, 255, 255, fade);
  rect(x, y, 10);

  if (fade > 10) {
    fade = 0;
  }
}

function drawRow(arr, offsetY) {
  for (let i = 0; i < width; i += 80) {
    for (let j = 0; j < 10; j++) {
      let x = arr[j][0] + i;
      let y = arr[j][1];
      y += offsetY;
      drawSquare(x, y);
    }
  }
}

function drawLines(arr, offsetY) {
  for (let i = 0; i < height; i += 40) {
    drawRow(arr, offsetY);
  }
}
