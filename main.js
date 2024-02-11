function preload()
{
}
function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 640, 480);
    circle(30, 30, 50);
    circle(600, 30, 50);
    circle(30, 440, 50);
    circle(600, 440, 50);
    rect(30, 20, 575, 40);
    rect(30, 420, 575, 40);
    rect(20, 20, 40, 420);
    rect(575, 20, 40, 420);
}

function take_snapshot()
{
save('student_name.png')
}