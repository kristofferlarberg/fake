const waveArr = [
  [-80, 0],
  [-80, 10],
  [-70, 20],
  [-60, 30],
  [-50, 30],
  [-40, 30],
  [-30, 30],
  [-20, 20],
  [-10, 0],
  [-10, 10],
];

const invertedWaveArr = [
  [-80, 30],
  [-80, 40],
  [-70, 20],
  [-60, 10],
  [-50, 10],
  [-40, 10],
  [-30, 10],
  [-20, 20],
  [-10, 30],
  [-10, 40],
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
    x += 80;
    createWave(x, y, arr)
  }
}

function createPattern() {
  let y = -30;
  for (let i = 0; i < height; i += 80) {
    for (let i = 0; i < 5; i++) {
      y += 30;
      repeatWave(y, invertedWaveArr)
      repeatWave(y, waveArr)
    }
    repeatWave(y + 30, waveArr)
    y += 70;
    repeatWave(y, invertedWaveArr)
  }
}

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('container');
  background(0);
  fill(200);
}


function draw() {
  noStroke();

  createPattern()

  noLoop();
}

//   square(80, 110, 10);
//   square(80, 100, 10);
//   square(80, 100, 10);
//   square(90, 90, 10);
//   square(90, 120, 10);
//   square(100, 130, 10);
//   square(100, 80, 10);
//   square(110, 130, 10);
//   square(110, 80, 10);
//   square(120, 80, 10);
//   square(120, 130, 10);
//   square(130, 120, 10);
//   square(130, 90, 10);
//   square(140, 100, 10);
//   square(140, 110, 10);
//   square(150, 110, 10);
//   square(150, 100, 10);
//   square(160, 120, 10);
//   square(160, 90, 10);
//   square(170, 130, 10);
//   square(170, 80, 10);
//   square(180, 80, 10);
//   square(180, 130, 10);
//   square(190, 80, 10);
//   square(190, 130, 10);
//   square(200, 90, 10);
//   square(200, 120, 10);
//   square(210, 100, 10);
//   square(210, 110, 10);