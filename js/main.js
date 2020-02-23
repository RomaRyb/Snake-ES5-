var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    /*determine the height and width of the canvas element */
    var width = canvas.width;
    var height = canvas.height;
    
    //we compute the width and height in the cells
    var blockSize = 10;
    var widthInBlocks = width / blockSize;
    var heightInBlocks = height / blockSize;

    // we set up an account
    var score = 0;

    /*we draw a frame*/
        var drawBorder = function () {
        ctx.fillStyle = "Grey";
        ctx.fillRect(0, 0, width, blockSize);
        ctx.fillRect(0, height - blockSize, width, blockSize);
        ctx.fillRect(0, 0, blockSize, height)
        ctx.fillRect(width - blockSize, 0, blockSize, height);
    };

    /*display the game score in the upper left corner*/
    var drawScore = function () {
        ctx.font = "20px Courier";
        ctx.fillStyle = "Black";
        ctx.textAlign = "left";
        ctx.textBaseLine = "top";
        ctx.fillText("Your Score: " + score, blockSize, blockSize);
    };