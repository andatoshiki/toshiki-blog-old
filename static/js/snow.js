(function($){
    $.fn.snow = function(options){
    var $flake = $('<div id="snowbox" />').css({'position': 'absolute','z-index':'9999', 'top': '-50px'}).html('&#10052;'),
    documentHeight  = $(document).height(),
    documentWidth   = $(document).width(),
    defaults = {
        minSize     : 10,
        maxSize     : 20,
        newOn       : 1000,
        flakeColor  : "#AFDAEF" /* Edit the snowflake's color here, change to #FFFFFF for white flakes  */
    },
    options = $.extend({}, defaults, options);
    var interval= setInterval( function(){
    var startPositionLeft = Math.random() * documentWidth - 100,
    startOpacity = 0.5 + Math.random(),
    sizeFlake = options.minSize + Math.random() * options.maxSize,
    endPositionTop = documentHeight - 200,
    endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
    durationFall = documentHeight * 10 + Math.random() * 5000;
    $flake.clone().appendTo('body').css({
        left: startPositionLeft,
        opacity: startOpacity,
        'font-size': sizeFlake,
        color: options.flakeColor
    }).animate({
        top: endPositionTop,
        left: endPositionLeft,
        opacity: 0.2
    },durationFall,'linear',function(){
        $(this).remove()
    });
    }, options.newOn);
    };
})(jQuery);
$(function(){
    $.fn.snow({ 
        minSize: 5, /* customize the smallest snowflake size */
        maxSize: 50,/* customize the largest snowflake size */
        newOn: 300  /* customize the snowflake's proximity，the lesser the number the more proximal */
    });
});
/*style 2*/
/* Control snowfall */
function snowFall(snow) {
    /* 可配置属性 */
    snow = snow || {};
    this.maxFlake = snow.maxFlake || 200;   /* Largest number of snowflakes */
    this.flakeSize = snow.flakeSize || 10;  /* Snowflake shape */
    this.fallSpeed = snow.fallSpeed || 1;   /* Falling speed */
}
/* 兼容写法 */
requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback) { setTimeout(callback, 1000 / 60); };

cancelAnimationFrame = window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.msCancelAnimationFrame ||
    window.oCancelAnimationFrame;
/* Start snowfall */
snowFall.prototype.start = function(){
    /* Create canvas */
    snowCanvas.apply(this);
    /* Create snowflake figure */
    createFlakes.apply(this);
    /* Draw snowflake */
    drawSnow.apply(this)
}
/* 创建画布 */
function snowCanvas() {
    /* Add DOM node */
    var snowcanvas = document.createElement("canvas");
    snowcanvas.id = "snowfall";
    snowcanvas.width = window.innerWidth;
    snowcanvas.height = document.body.clientHeight;
    snowcanvas.setAttribute("style", "position:absolute; top: 0; left: 0; z-index: 1; pointer-events: none;");
    document.getElementsByTagName("body")[0].appendChild(snowcanvas);
    this.canvas = snowcanvas;
    this.ctx = snowcanvas.getContext("2d");
    /* Process window size responsive issue */
    window.onresize = function() {
        snowcanvas.width = window.innerWidth;
        /* snowcanvas.height = window.innerHeight */
    }
}
/* 雪运动对象 */
function flakeMove(canvasWidth, canvasHeight, flakeSize, fallSpeed) {
    this.x = Math.floor(Math.random() * canvasWidth);   /* x coordinate */
    this.y = Math.floor(Math.random() * canvasHeight);  /* y coordinate */
    this.size = Math.random() * flakeSize + 2;          /* shape */
    this.maxSize = flakeSize;                           /* largest size */
    this.speed = Math.random() * 1 + fallSpeed;         /* Falling speed 1 */
    this.fallSpeed = fallSpeed;                         /* Falling speed 2 */
    this.velY = this.speed;                             /* y direction speed */
    this.velX = 0;                                      /* x direction speed */
    this.stepSize = Math.random() / 30;                 /* step size */
    this.step = 0                                       /* step number */
}
flakeMove.prototype.update = function() {
    var x = this.x,
        y = this.y;
    /* Horizontal oscillation (cosine) */
    this.velX *= 0.98;
    if (this.velY <= this.speed) {
        this.velY = this.speed
    }
    this.velX += Math.cos(this.step += .05) * this.stepSize;

    this.y += this.velY;
    this.x += this.velX;
    /* Deal with snowflakes out of border */
    if (this.x >= canvas.width || this.x <= 0 || this.y >= canvas.height || this.y <= 0) {
        this.reset(canvas.width, canvas.height)
    }
};
/* Out of border-Keep falling from the top margin */
flakeMove.prototype.reset = function(width, height) {
    this.x = Math.floor(Math.random() * width);
    this.y = 0;
    this.size = Math.random() * this.maxSize + 2;
    this.speed = Math.random() * 1 + this.fallSpeed;
    this.velY = this.speed;
    this.velX = 0;
};
// Render snowflake-Random shapes（Edit the color here！！！）
flakeMove.prototype.render = function(ctx) {
    var snowFlake = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
    snowFlake.addColorStop(0, "rgba(255, 255, 255, 0.9)");  /* Snowflake color here, default color is white */
    snowFlake.addColorStop(.5, "rgba(255, 255, 255, 0.5)"); /* https://coolors.co/ for suggested color palette */
    snowFlake.addColorStop(1, "rgba(255, 255, 255, 0)");    /* R, G, B color code */
    ctx.save();
    ctx.fillStyle = snowFlake;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
};
/* Create snowflake-Customize snowflake shapes */
function createFlakes() {
    var maxFlake = this.maxFlake,
        flakes = this.flakes = [],
        canvas = this.canvas;
    for (var i = 0; i < maxFlake; i++) {
        flakes.push(new flakeMove(canvas.width, canvas.height, this.flakeSize, this.fallSpeed))
    }
}
/* Draw snow */
function drawSnow() {
    var maxFlake = this.maxFlake,
        flakes = this.flakes;
    ctx = this.ctx, canvas = this.canvas, that = this;
    /* Clear snowflakes */
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var e = 0; e < maxFlake; e++) {
        flakes[e].update();
        flakes[e].render(ctx);
    }
    /* Draw frame by frame */
    this.loop = requestAnimationFrame(function() {
        drawSnow.apply(that);
    });
}
/* Invoke and control method */
var snow = new snowFall({maxFlake:60});
snow.start();