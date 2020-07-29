var canvas = document.getElementById('mainCanvas'),
    context = canvas.getContext('2d');

var mode = "robotics";

drawTextButton(0, 0, canvas.clientWidth / 4, canvas.clientHeight / 3, "blue", "30px Comic Sans MS", "orange", "robotics")
drawTextButton(canvas.clientWidth / 4, 0, canvas.clientWidth / 4, canvas.clientHeight / 3, "green", "30px Comic Sans MS", "red", "studying")
drawTextButton(canvas.clientWidth / 2, 0, canvas.clientWidth / 4, canvas.clientHeight / 3, "yellow", "30px Comic Sans MS", "purple", "relaxation")
drawTextButton(canvas.clientWidth / 4 * 3, 0, canvas.clientWidth / 4, canvas.clientHeight / 3, "red", "30px Comic Sans MS", "lightgreen", "sport")
drawTimer(canvas.clientWidth / 2, canvas.clientHeight / 2.3, "30px Comic Sans MS", "darkgray", mode, 10, 56, 54);


canvas.addEventListener('click', function (evt) {
    alert("working");
    var mousePos = getMousePos(canvas, evt);  // get the coordinates of the mouse
    alert("working");
    if (mousePos.x < canvas.clientWidth / 4) {
        mode = "robotics";
    } else if (mousePos.x < canvas.clientWidth / 2) {
        mode = "studying";
    } else if (mousePos.x < canvas.clientWidth / 4 * 3) {
        mode = "relaxation";
    } else if (mousePos.x < canvas.clientWidth) {
        mode = "sport";
    }

    drawTimer(canvas.clientWidth / 2, canvas.clientHeight / 2.3, "30px Comic Sans MS", "darkgray", mode, 10, 56, 54);
}
);


function drawTextButton(topX, topY, width, height, color, font, textColor, text) {
    context.fillStyle = color;
    context.fillRect(topX, topY, width, height);
    context.font = font;
    context.fillStyle = textColor;
    context.textAlign = "center";
    context.fillText(text, topX + width / 2, topY + height / 2);
}


function drawTimer(centerX, centerY, font, textColor, mode, hours, minutes, seconds) {
    var modeText = ""
    switch(mode) {
        case "robotics":
            modeText = "programming applications for robotics";
        case "studying":
            modeText = "studying for one of your subjects";
        case "relaxation":
            modeText = "having some time off";
        case "sport":
            modeText = "doing some sport!";
    }
    context.font = font;
    context.fillStyle = textColor;
    context.textAlign = "center";
    context.fillText("you are currently " +  modeText, centerX, centerY);
    context.fillText("for " + hours.toString() + "hours; " + minutes.toString() + "minutes; and " + seconds.toString() + "seconds. ", centerX, centerY + 30);

}