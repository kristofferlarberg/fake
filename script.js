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
  [-100, 8],
  [-90, 5],
  [-80, 26],
  [-70, 10],
];

const bottomWaveArr = [
  [-70, 30],
  [-60, 20],
  [-50, 0],
  [-50, 10],
  [-40, 0],
  [-40, 10],
  [-30, 20],
  [-20, 30],
];

const topWaveArr = [
  [-70, 20],
  [-60, 30],
  [-50, 40],
  [-50, 50],
  [-40, 40],
  [-40, 50],
  [-30, 30],
  [-20, 20],
];

function createWave(offsetX, offsetY, arr) {
  let fade = 0;
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i][0] + offsetX;
    let y = arr[i][1] + offsetY;
    for (let j = 0; j < 255; j += 1) {
      fill(0, 0, 255, fade)
      if (fade < 0) fadeAmount = 1;
      fade += j;
      console.log(fade)
      rect(x, y, 10)
    }
  }
}

function repeatWave(offsetX, offsetY, arr, amount, end) {
  let x = offsetX;
  for (let i = 0; i < amount; i++) {
    x += 80;
    createWave(x, offsetY, arr, fill)
  }
  x += 100;
  if (end) createWave(x, offsetY, endWaveArr, fill);
}

let y1 = -35;
let y2 = -30;


function createPattern(offsetX) {
  console.log("offsetX")
  console.log(offsetX)

  for (let i = 0; i < height; i += 40) {
    for (let i = 0; i < 3; i++) {
      y1 += 35;
      y2 += 35;
      repeatWave(offsetX, y1, waveArr, 3, true)
      y1 += 0;
      y2 += 0;
      repeatWave(offsetX, y2, invertedWaveArr, 3, false)
    }
    y1 += 25;
    y2 += 25;
    repeatWave(offsetX, y1, bottomWaveArr, 3, false)
    y1 += 5;
    y2 += 5;
    repeatWave(offsetX, y2, topWaveArr, 3, false)
    y1 += 10;
    y2 += 10;
  }
}

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('container');
  background(0);
  fade = 0
}

function draw() {
  noStroke();




  // createPattern(0)

  createWave(100, 100, waveArr);

  // let y1 = -35;
  // let y2 = -30;




  noLoop();
}