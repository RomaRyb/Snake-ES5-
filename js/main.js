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

    /*Block constructor */
    var Block = function (col, row) {
        this.col = col;
        this.row = row;
    };

    Block.prototype.drawSquare = function (color) {
        var x = this.col * blockSize;
        var y = this.row * blockSize;
        ctx.fillStyle() = color;
        ctx.fillRect(x, y, blockSize,blockSize);
    };

    Block.prototype.circle = function (color) {
        var centerX = this.col * blockSize + blockSize / 2;
        var centerY = this.row * blockSize + blockSize / 2;
        ctx.fillStyle() = color;
        circle(centerX, centerY, blockSize / 2, true);
    };

    /* compare cells  , create method equal */
    Block.prototype.equal = function(otherBlock) {
        return this.col === otherBlock.col && this.row === otherBlock.row;
    };

    /*Snake constructor*/
    var Snake = function () {
        this.segments = [
            new Block(7, 5),
            new Block(6, 5),
            new Block(5, 5)
        ];
        this.direction = "right";
        this.nextDirection = "right";
    };
    /*Snake draw */
    Snake.prototype.draw = function () {
        for (var i = 0; i < this.segments; i++) {
            this.segments[i].drawSquare("red");
        }
    };

    /*Snake move,  add move method*/
    Snake.prototype.move = function () { 
        var head = this.segments[0];
        var newHead;

        this.direction = this.nextDirection;

        if (this.direction === "right") {
            newHead = new Block(head.col + 1, head.row);
        } else if (this.direction === "down") {
            newHead = new Block(head.col, head.row + 1);
        } else if (this.direction === "left") {
            newHead = new Block(head.col - 1, head.row);
        } else if (this.direction === "up") {
            newHead = new Block(head.col, head.row - 1);
        }

        if (this.checkCollision(newHead)) {
            gameOver();
            return;
        }

        this.segments.unshift(newHead);

        if (newHead.equal(applePosition)){ 
            score++;
            apple.move();
        } else {
            this.segments.pop();
        }
    };







    setInterval (function() {
        ctx.clearRect(0, 0, width, height);
            drawBorder();
            drawScore();
            score++;
    }, 100);
