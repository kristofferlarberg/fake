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

const endWaveArr = [
  [-100, 30],
  [-90, 30],
  [-90, 30],
  [-80, 20],
  [-70, 10],
  [-70, 0],
  [-70, -10],
  [-80, -20],
  [-90, -30],
  [-100, -30],


];

const topWaveArr = [
  [-80, 20],
  [-70, 20],
  [-60, 30],
  [-50, 40],
  [-50, 50],
  [-40, 40],
  [-40, 50],
  [-30, 30],
  [-20, 20],
  [-10, 20],


  [-50, 20],
  [-30, 0],
  [-40, 10],
];

function createWave(offsetX, offsetY, arr) {
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i][0] + offsetX;
    let y = arr[i][1] + offsetY;
    rect(x, y, 10)
  }
}

function repeatWave(offsetY, arr, amount, end) {
  let x = 0;
  let y = offsetY;
  for (let i = 0; i < amount; i++) {
    x += 80;
    createWave(x, y, arr)
  }
  x += 100;
  if (end) createWave(x, y , endWaveArr);
}

let y1 = -35;
let y2 = -30;

// Make possible to x repeat

function createPattern() {
  for (let i = 0; i < height; i += 40) {
    console.log(i)
    for (let i = 0; i < 3; i++) {
      y1 += 35;
      y2 += 35;
      repeatWave(y1, waveArr, 3, true)
      y1 += 10;
      y2 += 10;
      repeatWave(y2, invertedWaveArr, 3, false)
    }
    y1 += 35;
    y2 += 35;
    repeatWave(y1, waveArr, 3, false)
    y1 += 35;
    y2 += 35;

    repeatWave(y2, topWaveArr, 3, false)
    y1 += 10;
    y2 += 10;
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