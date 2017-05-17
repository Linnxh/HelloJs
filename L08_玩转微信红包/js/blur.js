/**
 * Created by LXH on 17/2/3.
 */

var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var image = new Image();
var raduis = 50;
var clippingRegion = {x: 100, y: 200, r: raduis};
image.src = "img/p3_bg.jpg";
image.onload = function (e) {
    initCanvas();
    $("#blurDiv").css("width", canvas.width + "px")
    $("#blurDiv").css("height", canvas.height + "px")
    $("#img").css("width", canvas.width + "px")
    $("#img").css("height", canvas.height + "px")
}

function initCanvas() {
    clearInterval(animation);
    clippingRegion = {
        x: Math.random() * (canvas.width - 2 * raduis) + raduis,
        y: Math.random() * (canvas.height - 2 * raduis) + raduis,
        r: raduis
    };
    draw(image, clippingRegion)
}

function draw(image, clippingRegion) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    setClippingRegin(clippingRegion);
    context.drawImage(image, 0, 0);
    context.restore();
}

function setClippingRegin(clippingRegion) {
    context.beginPath();
    context.arc(clippingRegion.x, clippingRegion.y, clippingRegion.r, 0, Math.PI * 2, false);
    context.clip();
}
var animation
function show() {

    animation = setInterval(function () {
        clippingRegion.r += 15;
        draw(image, clippingRegion);
        if (clippingRegion.r > 1000) {
            clearInterval(animation);
        }
    }, 30)
}
function reset() {
    initCanvas();
}