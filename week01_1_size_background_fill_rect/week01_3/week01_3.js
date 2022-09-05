
function setup() {
    initializeFields();
    createCanvas(500, 500);
}

function draw() {
    background(color(0x6F, 0xFA, 0xDF));
    fill(color(0x98, 0xFA, 0x6F));
    rect(100, 100, 100, 150);
    rect(mouseX, mouseY, 150, 100);
}

function initializeFields() {
}
