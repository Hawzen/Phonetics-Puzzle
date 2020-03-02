let lins = [];
let size = 10
let even = true
let t = 1
let rndmConst;
function setup() {
    createCanvas(screen.width, screen.height);
    colorMode(HSL)

    rndmConst = [random(30, 200), random(40, 365), random(0.0001, 0.02), random(40, 70), random(1, 10)];

    size = 75;
    lins = [];
    even = true;
    for (let y = -size; y < height * 1.1; y += size) {
        lin = [];
        even = !even;
        for (let x = -size; x < width * 1.1; x += size) {
            lin.push(createVector(x + random(0, size),
                y + random(30, size)));
        }
        lins.push(lin);
    }
}

function draw() {

    t += rndmConst[2];

    for (i = 0; i < lins.length - 2; i += 1) {
        for (j = 0; j < lins[0].length - 1; j += 1) {
            perlin = map(noise(j * i + t), 0, 1, rndmConst[0]/5, rndmConst[0]);
            hu = map(noise(j * i + t), 0, 1, rndmConst[1]/rndmConst[4], rndmConst[1]);
            c = color(hu, perlin, rndmConst[3]);
            fill(c);
            stroke(0);

            if (i % 2 == 0)
                triangle(lins[i][j].x, lins[i][j].y, lins[i + 1][j].x, lins[i + 1][j].y,
                    lins[i][j + 1].x, lins[i][j + 1].y);
            triangle(lins[i + 1][j + 1].x, lins[i + 1][j + 1].y, lins[i + 2][j + 1].x, lins[i + 2][j + 1].y,
                lins[i + 1][j].x, lins[i + 1][j].y);
            if (j < lins[1].length - 1 && i % 2 == 1)
                triangle(lins[i][j].x, lins[i][j].y, lins[i][j + 1].x, lins[i][j + 1].y,
                    lins[i - 1][j + 1].x, lins[i - 1][j + 1].y);
            triangle(lins[i + 1][j].x, lins[i + 1][j].y, lins[i + 1][j + 1].x, lins[i + 1][j + 1].y,
                lins[i][j].x, lins[i][j].y);
        }
    }
}