---
title: (Website) Hugo Blog Mouse Clicking Animation
date: 2021-09-05T04:24:23+08:00
lastmod: 2021-09-05T04:24:23+08:00
author: 安田俊樹
avatar: /avatar/Avatar3.jpg
cover: /post2/cover2.png
images:
  - /post2/cover2.png
  - /post2/cover2.png
  - /post2/cover2.png
  - /post2/cover2.png
categories:
  - Website
tags:
  - Tutorial
  - Hugo
  - Code
  - Js
  - Website
  - Html
mathjax: false
---
*Have you ever seen a mouse clicking effect on certain websites? Read this article to get the most specific tutorial of mose clicking animation on hugo-based blog or hers.* 😏
<!--more-->

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=431259256&auto=0&height=66"></iframe>

## Introduction


## Procedures
You can always main basic blog page file in `_includes` or `_layout` folder in your site theme directory based on your static site framework, in my case, I use Hugo, and most of the main page file is located under `_default` folder.
- Open `baseof.html` document under `themes/<your-theme>/layout/_default/baseof.html`
  ![](/post2/file.png)
- Find either `<head>` tag or `<body>` tag, content in those two tags are the main content layout of your site.
- Scroll down and find `</body>` tag that corresponds to the `<body>` tag.
- Copy the code, and paste it either a line above the `</body>` tag or below it.

## Effect Choices
Following codes allows you to choose effects you want.
### Random colored heart effect
> Heart emojis pops out from your cursor when you click on webpages then fades away in about 0.7 seconds, you are able to change the size, time, colors to your actual need.

```html
<script>
		(function(window,document,undefined){
			var hearts = [];
			window.requestAnimationFrame = (function(){
				return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback){
					setTimeout(callback,1000/60);
				}
			})();
			init();
			function init(){
				css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
				attachEvent();
				gameloop();
			}
			function gameloop(){
				for(var i=0;i<hearts.length;i++){
					if(hearts[i].alpha <=0){
						document.body.removeChild(hearts[i].el);
						hearts.splice(i,1);
						continue;
					}
					hearts[i].y--;
					hearts[i].scale += 0.004;
					hearts[i].alpha -= 0.013;
					hearts[i].el.style.cssText = "left:"+hearts[i].x+"px;top:"+hearts[i].y+"px;opacity:"+hearts[i].alpha+";transform:scale("+hearts[i].scale+","+hearts[i].scale+") rotate(45deg);background:"+hearts[i].color;
				}
				requestAnimationFrame(gameloop);
			}
			function attachEvent(){
				var old = typeof window.οnclick==="function" && window.onclick;
				window.onclick = function(event){
					old && old();
					createHeart(event);
				}
			}
			function createHeart(event){
				var d = document.createElement("div");
				d.className = "heart";
				hearts.push({
					el : d,
					x : event.clientX - 5,
					y : event.clientY - 5,
					scale : 1,
					alpha : 1,
					color : randomColor()
				});
				document.body.appendChild(d);
			}
			function css(css){
				var style = document.createElement("style");
				style.type="text/css";
				try{
					style.appendChild(document.createTextNode(css));
				}catch(ex){
					style.styleSheet.cssText = css;
				}
				document.getElementsByTagName('head')[0].appendChild(style);
			}
			function randomColor(){
				return "rgb("+(~~(Math.random()*255))+","+(~~(Math.random()*255))+","+(~~(Math.random()*255))+")";
			}
		})(window,document);
</script>
```
### Core socialist values (社會主義核心價值觀) effect
> Core socialist values: 富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善 in Chiese pops out from your cursor. This effect introduces a jaquery javascript from a cdn of bootcss, it might not work when internet speed is down, you can also changes the string text inside of the core values between the quotation marks below.

```html
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript">
        /* 鼠标点击特效 - 7Core.CN */
        var a_idx = 0;jQuery(document).ready(function($) {$("body").click(function(e) {var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;var x = e.pageX,y = e.pageY;$i.css({"z-index": 100000000,"top": y - 20,"left": x,"position": "absolute","font-weight": "bold","color": "#ff6651"});$("body").append($i);$i.animate({"top": y - 180,"opacity": 0},1500,function() {$i.remove();});});});
</script>
```

or this (The one I'm using)

```html
<script type="text/javascript">
    /* 鼠标特效 */
    var a_idx = 0;
    jQuery(document).ready(function($) {
        $("body").click(function(e) {
            var a = new Array("😁","😜","😋","😀","😂","😉","😄","🤤","🤣","😝","😛","😏");
            var $i = $("<span></span>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
            y = e.pageY;
            $i.css({
                "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
            });
            $("body").append($i);
            $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function() {
                $i.remove();
            });
        });
    });
    </script>
```
> <strike>This is the effect I used on my blog site, emojis pops out. 😁</strike>

### Strings Encircles Effect??? (I don't know how to give a name for this... 💩)
> This effect creates segements scatters at the background of your webpage, it somehow connects to the top of your cursor when you move the mouse, works better with a **white** wepage backgroud, some people might think it's cool, but I stay neutral. 😏

```html
<script>
! function() {
    function o(w, v, i) {
        return w.getAttribute(v) || i
    }

    function j(i) {
        return document.getElementsByTagName(i)
    }

    function l() {
        var i = j("script"),
            w = i.length,
            v = i[w - 1];
        return {
            l: w,
            z: o(v, "zIndex", -1),
            o: o(v, "opacity", 0.5),
            c: o(v, "color", "0,0,0"),
            n: o(v, "count", 99)
        }
    }

    function k() {
        r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }

    function b() {
        e.clearRect(0, 0, r, n);
        var w = [f].concat(t);
        var x, v, A, B, z, y;
        t.forEach(function(i) {
            i.x += i.xa, i.y += i.ya, i.xa *= i.x > r || i.x < 0 ? -1 : 1, i.ya *= i.y > n || i.y < 0 ? -1 : 1, e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);
            for (v = 0; v < w.length; v++) {
                x = w[v];
                if (i !== x && null !== x.x && null !== x.y) {
                    B = i.x - x.x, z = i.y - x.y, y = B * B + z * z;
                    y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(), e.lineWidth = A / 2, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke())
                }
            }
            w.splice(w.indexOf(i), 1)
        }), m(b)
    }
    var u = document.createElement("canvas"),
        s = l(),
        c = "c_n" + s.l,
        e = u.getContext("2d"),
        r, n, m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(i) {
            window.setTimeout(i, 1000 / 45)
        },
        a = Math.random,
        f = {
            x: null,
            y: null,
            max: 20000
        };
    u.id = c;
    u.className = "hidden-xs hidden-sm my_canvas";
    u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o;
    j("body")[0].appendChild(u);
    k(), window.onresize = k;
    window.onmousemove = function(i) {
        i = i || window.event, f.x = i.clientX, f.y = i.clientY
    }, window.onmouseout = function() {
        f.x = null, f.y = null
    };
    for (var t = [], p = 0; s.n > p; p++) {
        var h = a() * r,
            g = a() * n,
            q = 2 * a() - 1,
            d = 2 * a() - 1;
        t.push({
            x: h,
            y: g,
            xa: q,
            ya: d,
            max: 6000
        })
    }
    setTimeout(function() {
        b()
    }, 100)
}();
</script>
```
Wish you have a good day! 😄