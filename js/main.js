var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    /*determine the height and width of the canvas element */
    var width = canvas.width;
    var height = canvas.height;
    
    //we compute the width and height in the cells
    var blockSize = 10;

    var widthInBlocks = width / blockSize;
    var heightInBlocks = height / blockSize;

    // count setup
    var score = 0;

    /*draw a frame*/
        var drawBorder = function () {
        ctx.fillStyle = "gray";
        ctx.fillRect(0, 0, width, blockSize);
        ctx.fillRect(0, height - blockSize, width, blockSize);
        ctx.fillRect(0, 0, blockSize, height)
        ctx.fillRect(width - blockSize, 0, blockSize, height);
    };

    /*display game score in the upper left corner*/
    var drawScore = function () {
        ctx.font = "15px Courier";
        ctx.fillStyle = "gold";
        ctx.textAlign = "left";
        ctx.textBaseLine = "top";
        ctx.fillText("Your Score: " + score, blockSize, blockSize);
    };


    var gameOver = function() {
        //clearInterval(intervalId);
        ctx.fillStyle = "black";
        ctx.font = "60px Courier";
        ctx.textAlign = "center"
        ctx.textBaseline = "middle";    
        ctx.fillText = ("Game Over", width / 2, height / 2)
    };

    setInterval (function() {
        ctx.clearRect(0, 0, width, height);
            drawBorder();
            drawScore();
            score++;
    }, 100);
