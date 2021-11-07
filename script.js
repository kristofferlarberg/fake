const waveArr = [
  [-80, 30],
  [-70, 30],
  [-60, 20],
  [-50, 0],
  [-50, 10],
  [-40, 0],
  [-40, 10],
  [-30, 20],
  [-20, 30],
  [-10, 30],
];

const invertedWaveArr = [
  [-80, 0],
  [-70, 0],
  [-60, 10],
  [-50, 20],
  [-50, 30],
  [-40, 20],
  [-40, 30],
  [-30, 10],
  [-20, 0],
  [-10, 0],
];

const topWaveArr = [
  [-80, 20],
  [-70, 20],
  [-60, 30],
  [-50, 40],
  [-50, 50],
  [-50, 0],
  [-40, 10],
  [-40, 40],
  [-40, 50],
  [-30, 30],
  [-20, 20],
  [-10, 20],
];

function createWave(offsetX, offsetY, arr) {
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i][0] + offsetX;
    let y = arr[i][1] + offsetY;
    rect(x, y, 10)
  }
}

function repeatWave(offsetY, arr) {
  let x = 0;
  let y = offsetY;
  for (let i = 0; i < width; i += 80) {
    for (let i = 0; i < 3; i++) {
      x += 80;
      createWave(x, y, arr)
    }
    x += 90;
    createWave(x, y, invertedWaveArr)
    x += 10;
  }
}

let y1 = -35;
let y2 = -30;

function createPattern() {
  for (let i = 0; i < height; i += 40) {
    for (let i = 0; i < 5; i++) {
      y1 += 35;
      y2 += 35;
      repeatWave(y1, waveArr)
      repeatWave(y2, invertedWaveArr)
    }
    y1 += 35;
    y2 += 35;
    repeatWave(y1, waveArr)
    y1 += 45;
    y2 += 45;
    repeatWave(y2, topWaveArr)
    y1 += 20;
    y2 += 20;
  }
}

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('container');
  background(0);
  fill(190);
}


function draw() {
  noStroke();

  createPattern()

  noLoop();
}