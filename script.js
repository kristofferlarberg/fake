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
let state = 0;

function draw() {
  //Lägg till vilkor för
  frameRate(15);
  noStroke();

  if (fade < 15) {
    setTimeout(() => {
      drawRow(arrOne, 0);
      state++;
      console.log(state);
    }, 0);

    setTimeout(() => {
      drawRow(arrTwo, 5);
    }, 2000);

    setTimeout(() => {
      drawRow(arrOne, 40);
    }, 4000);

    setTimeout(() => {
      drawRow(arrTwo, 45);
    }, 6000);

    setTimeout(() => {
      drawRow(bottomArr, 70);
    }, 8000);

    setTimeout(() => {
      drawRow(topArr, 130);
    }, 10000);

    setTimeout(() => {
      drawRow(arrOne, 150);
    }, 0);

    setTimeout(() => {
      drawRow(arrTwo, 155);
    }, 2000);

    setTimeout(() => {
      drawRow(arrOne, 190);
    }, 4000);

    setTimeout(() => {
      drawRow(arrTwo, 195);
    }, 6000);

    setTimeout(() => {
      drawRow(bottomArr, 220);
    }, 8000);

    setTimeout(() => {
      drawRow(topArr, 280);
    }, 10000);

    setTimeout(() => {
      drawRow(arrOne, 300);
    }, 0);

    setTimeout(() => {
      drawRow(arrTwo, 305);
    }, 2000);

    setTimeout(() => {
      drawRow(arrOne, 340);
    }, 4000);

    setTimeout(() => {
      drawRow(arrTwo, 345);
    }, 6000);

    setTimeout(() => {
      drawRow(bottomArr, 370);
    }, 8000);

    setTimeout(() => {
      drawRow(topArr, 430);
    }, 10000);

    setTimeout(() => {
      drawRow(arrOne, 450);
    }, 0);

    setTimeout(() => {
      drawRow(arrTwo, 455);
    }, 2000);

    setTimeout(() => {
      drawRow(arrOne, 490);
    }, 4000);

    setTimeout(() => {
      drawRow(arrTwo, 495);
    }, 6000);

    setTimeout(() => {
      drawRow(bottomArr, 520);
    }, 8000);

    setTimeout(() => {
      drawRow(topArr, 580);
    }, 10000);

    setTimeout(() => {
      drawRow(arrOne, 600);
    }, 0);

    setTimeout(() => {
      drawRow(arrTwo, 605);
    }, 2000);

    setTimeout(() => {
      drawRow(arrOne, 640);
    }, 4000);

    setTimeout(() => {
      drawRow(arrTwo, 645);
    }, 6000);

    setTimeout(() => {
      drawRow(bottomArr, 670);
    }, 8000);

    setTimeout(() => {
      drawRow(topArr, 730);
    }, 10000);

    setTimeout(() => {
      drawRow(arrOne, 750);
    }, 0);

    setTimeout(() => {
      drawRow(arrTwo, 755);
    }, 2000);

    setTimeout(() => {
      drawRow(arrOne, 790);
    }, 4000);

    setTimeout(() => {
      drawRow(arrTwo, 795);
    }, 6000);

    setTimeout(() => {
      drawRow(bottomArr, 820);
    }, 8000);

    setTimeout(() => {
      drawRow(topArr, 880);
    }, 10000);

    setTimeout(() => {
      drawRow(arrOne, 900);
    }, 0);

    setTimeout(() => {
      drawRow(arrTwo, 905);
    }, 2000);

    setTimeout(() => {
      drawRow(arrOne, 940);
    }, 4000);

    setTimeout(() => {
      drawRow(arrTwo, 945);
    }, 6000);

    setTimeout(() => {
      drawRow(bottomArr, 970);
    }, 8000);

    setTimeout(() => {
      drawRow(topArr, 1030);
    }, 10000);
  }

  // if (state === 300) {
  //   // clear();
  //   // state = 0;
  //   fade = 0;
  //   background(0);
  //   // noLoop();
  //   setup();
  // }
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
