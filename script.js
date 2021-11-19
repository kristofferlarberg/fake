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
    if (frameCount % 6 === 0) drawRow(topArr, 100);

    if (frameCount % 1 === 0) drawRow(arrOne, 140);
    if (frameCount % 2 === 0) drawRow(arrTwo, 145);
    if (frameCount % 3 === 0) drawRow(arrOne, 180);
    if (frameCount % 4 === 0) drawRow(arrTwo, 185);
    if (frameCount % 5 === 0) drawRow(bottomArr, 210);
    if (frameCount % 6 === 0) drawRow(topArr, 240);

    if (frameCount % 1 === 0) drawRow(arrOne, 280);
    if (frameCount % 2 === 0) drawRow(arrTwo, 285);
    if (frameCount % 3 === 0) drawRow(arrOne, 320);
    if (frameCount % 4 === 0) drawRow(arrTwo, 325);
    if (frameCount % 5 === 0) drawRow(bottomArr, 350);
    if (frameCount % 6 === 0) drawRow(topArr, 380);

    if (frameCount % 1 === 0) drawRow(arrOne, 420);
    if (frameCount % 2 === 0) drawRow(arrTwo, 425);
    if (frameCount % 3 === 0) drawRow(arrOne, 460);
    if (frameCount % 4 === 0) drawRow(arrTwo, 465);
    if (frameCount % 5 === 0) drawRow(bottomArr, 490);
    if (frameCount % 6 === 0) drawRow(topArr, 520);

    if (frameCount % 1 === 0) drawRow(arrOne, 560);
    if (frameCount % 2 === 0) drawRow(arrTwo, 565);
    if (frameCount % 3 === 0) drawRow(arrOne, 600);
    if (frameCount % 4 === 0) drawRow(arrTwo, 605);
    if (frameCount % 5 === 0) drawRow(bottomArr, 630);
    if (frameCount % 6 === 0) drawRow(topArr, 660);

    if (frameCount % 1 === 0) drawRow(arrOne, 700);
    if (frameCount % 2 === 0) drawRow(arrTwo, 705);
    if (frameCount % 3 === 0) drawRow(arrOne, 740);
    if (frameCount % 4 === 0) drawRow(arrTwo, 745);
    if (frameCount % 5 === 0) drawRow(bottomArr, 770);
    if (frameCount % 6 === 0) drawRow(topArr, 800);

    if (frameCount % 1 === 0) drawRow(arrOne, 840);
    if (frameCount % 2 === 0) drawRow(arrTwo, 845);
    if (frameCount % 3 === 0) drawRow(arrOne, 880);
    if (frameCount % 4 === 0) drawRow(arrTwo, 885);
    if (frameCount % 5 === 0) drawRow(bottomArr, 910);
    if (frameCount % 6 === 0) drawRow(topArr, 940);

    if (frameCount % 1 === 0) drawRow(arrOne, 980);
    if (frameCount % 2 === 0) drawRow(arrTwo, 985);
    if (frameCount % 3 === 0) drawRow(arrOne, 1020);
    if (frameCount % 4 === 0) drawRow(arrTwo, 1025);
    if (frameCount % 5 === 0) drawRow(bottomArr, 1050);
    if (frameCount % 6 === 0) drawRow(topArr, 1080);
  }

  if (state === 200) {
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
