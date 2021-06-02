const mainText = "hi, my name is marcus!".split('');

for (let i = 0; i < mainText.length + 1; ++i) {
  setTimeout(() => {
    document.getElementById("monitor-text").innerHTML =
      mainText.slice(0, i).join('');
  }, 150 + i * 75);
}

let clicks = [];
let down = false;
let timeDown = -1;

function setup() {
  let canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.style("cursor", "none");
}

function draw() {
  background(color(0, 0, 0));
  circle(mouseX, mouseY, 5);
  for (let i = 0; i < clicks.length; ++i) {
    let click = clicks[i];
    if (click[2] > 1000) {
      clicks.splice(i, 1);
    }
    click[2] += 20;
    circle(click[0], click[1], click[2]);
  }
  if (down) {
    clicks.push([mouseX, mouseY, 0]);
  }
}

function mousePressed() {
  // clicks.push([mouseX, mouseY, 0]);
  down = true;
  timeDown = Date.now();
}

function mouseReleased() {
  down = false;
  timeDown = -1;
}

function keyPressed() {
  const col = () => 256 * Math.random();
  if (key === 'c') {
    fill(color(col(), col(), col()));
  }
  if (key === 'w') {
    fill(color(255, 255, 255));
  }
}