---
title: Test Demo
date: 2021-09-01T13:00:49+08:00
lastmod: 2021-09-01T13:00:49+08:00
author: 安田俊樹
avatar: /avatar/Avatar3.jpg
categories:
tags:
mathjax: true
---
For testing new features
<!--more-->


<meting-js
name="光るなら"
artist="Goose house"
url="/music/光るなら.m4a"
cover="/music/cover/1.jpg"
lrc="/music/lyrics/光るなら.lrc">
</meting-js>

---

<div id="root"></div>

<script>
/* jshint esversion: 6 */
function plot() {
    functionPlot({
        target: "#root",
        width: $('#root').width(),
        height: $('#root').width() / 1.77,
        yAxis: {
            domain: [-5, 5]
        },
        tip: {
            renderer: function () {}
        },
        grid: true,
        data: [{
                fn: "x^2",
                derivative: {
                    fn: "2 * x",
                    updateOnMouseMove: true
                }
            },{
                fn: "sin(x)",
            },{
                fn: "x - 1/6 * x^3",
            }
        ]
    });
}

$(document).ready(function () {
    plot();
});

$(window).resize(function () {
    plot();
});
</script>

---

{{< friend name="g1eny0ung" url="https://g1eny0ung.site/" logo="https://g1eny0ung.site/me/yy.jpg" word="Creator of Hugo theme Dream" >}}

---

<i class="american sign language interpreting icon"></i>
<i class="assistive listening systems icon"></i>
<i class="audio description icon"></i>
<i class="blind icon"></i>
<i class="braille icon"></i>
<i class="closed captioning icon"></i>
<i class="closed captioning outline icon"></i>
<i class="deaf icon"></i>
<i class="low vision icon"></i>
<i class="phone volume icon"></i>
<i class="question circle icon"></i>
<i class="question circle outline icon"></i>
<i class="sign language icon"></i>
<i class="tty icon"></i>
<i class="universal access icon"></i>
<i class="wheelchair icon"></i>
<i class="angle double down icon"></i>
<i class="angle double left icon"></i>
<i class="angle double right icon"></i>
<i class="angle double up icon"></i>
<i class="angle down icon"></i>
<i class="angle left icon"></i>
<i class="angle right icon"></i>
<i class="angle up icon"></i>
<i class="arrow alternate circle down icon"></i>
<i class="arrow alternate circle down outline icon"></i>
<i class="arrow alternate circle left icon"></i>
<i class="arrow alternate circle left outline icon"></i>
<i class="arrow alternate circle right icon"></i>
<i class="arrow alternate circle right outline icon"></i>
<i class="arrow alternate circle up icon"></i>
<i class="arrow alternate circle up outline icon"></i>
<i class="arrow circle down icon"></i>
<i class="arrow circle left icon"></i>
<i class="arrow circle right icon"></i>
<i class="arrow circle up icon"></i>
<i class="arrow down icon"></i>
<i class="arrow left icon"></i>
<i class="arrow right icon"></i>
<i class="arrow up icon"></i>
<i class="arrows alternate icon"></i>
<i class="arrows alternate horizontal icon"></i>
<i class="arrows alternate vertical icon"></i>
<i class="caret down icon"></i>
<i class="caret left icon"></i>
<i class="caret right icon"></i>
<i class="caret square down icon"></i>
<i class="caret square down outline icon"></i>
<i class="caret square left icon"></i>
<i class="caret square left outline icon"></i>
<i class="caret square right icon"></i>
<i class="caret square right outline icon"></i>
<i class="caret square up icon"></i>
<i class="caret square up outline icon"></i>
<i class="caret up icon"></i>
<i class="cart arrow down icon"></i>
<i class="chart line icon"></i>
<i class="chevron circle down icon"></i>
<i class="chevron circle left icon"></i>
<i class="chevron circle right icon"></i>
<i class="chevron circle up icon"></i>
<i class="chevron down icon"></i>
<i class="chevron left icon"></i>
<i class="chevron right icon"></i>
<i class="chevron up icon"></i>
<i class="cloud download icon"></i>
<i class="cloud upload icon"></i>
<i class="download icon"></i>
<i class="exchange alternate icon"></i>
<i class="expand arrows alternate icon"></i>
<i class="external alternate icon"></i>
<i class="external square alternate icon"></i>
<i class="hand point down icon"></i>
<i class="hand point down outline icon"></i>
<i class="hand point left icon"></i>
<i class="hand point left outline icon"></i>
<i class="hand point right icon"></i>
<i class="hand point right outline icon"></i>
<i class="hand point up icon"></i>
<i class="hand point up outline icon"></i>
<i class="hand pointer icon"></i>
<i class="hand pointer outline icon"></i>
<i class="history icon"></i>
<i class="level down alternate icon"></i>
<i class="level up alternate icon"></i>
<i class="location arrow icon"></i>
<i class="long arrow alternate down icon"></i>
<i class="long arrow alternate left icon"></i>
<i class="long arrow alternate right icon"></i>
<i class="long arrow alternate up icon"></i>
<i class="mouse pointer icon"></i>
<i class="play icon"></i>
<i class="random icon"></i>
<i class="recycle icon"></i>
<i class="redo icon"></i>
<i class="redo alternate icon"></i>
<i class="reply icon"></i>
<i class="reply all icon"></i>
<i class="retweet icon"></i>
<i class="share icon"></i>
<i class="share square icon"></i>
<i class="share square outline icon"></i>
<i class="sign in alternate icon"></i>
<i class="sign out alternate icon"></i>
<i class="sort icon"></i>
<i class="sort alphabet down icon"></i>
<i class="sort alphabet up icon"></i>
<i class="sort amount down icon"></i>
<i class="sort amount up icon"></i>
<i class="sort down icon"></i>
<i class="sort numeric down icon"></i>
<i class="sort numeric up icon"></i>
<i class="sort up icon"></i>
<i class="sync icon"></i>
<i class="sync alternate icon"></i>
<i class="text height icon"></i>
<i class="text width icon"></i>
<i class="undo icon"></i>
<i class="undo alternate icon"></i>
<i class="upload icon"></i>
<i class="audio description icon"></i>
<i class="backward icon"></i>
<i class="circle icon"></i>
<i class="circle outline icon"></i>
<i class="closed captioning icon"></i>
<i class="closed captioning outline icon"></i>
<i class="compress icon"></i>
<i class="eject icon"></i>
<i class="expand icon"></i>
<i class="expand arrows alternate icon"></i>
<i class="fast backward icon"></i>
<i class="fast forward icon"></i>
<i class="file audio icon"></i>
<i class="file audio outline icon"></i>
<i class="file video icon"></i>
<i class="file video outline icon"></i>
<i class="film icon"></i>
<i class="forward icon"></i>
<i class="headphones icon"></i>
<i class="microphone icon"></i>
<i class="microphone slash icon"></i>
<i class="music icon"></i>
<i class="pause icon"></i>
<i class="pause circle icon"></i>
<i class="pause circle outline icon"></i>
<i class="phone volume icon"></i>
<i class="play icon"></i>
<i class="play circle icon"></i>
<i class="play circle outline icon"></i>
<i class="podcast icon"></i>
<i class="random icon"></i>
<i class="redo icon"></i>
<i class="redo alternate icon"></i>
<i class="rss icon"></i>
<i class="rss square icon"></i>
<i class="step backward icon"></i>
<i class="step forward icon"></i>
<i class="stop icon"></i>
<i class="stop circle icon"></i>
<i class="stop circle outline icon"></i>
<i class="sync icon"></i>
<i class="sync alternate icon"></i>
<i class="undo icon"></i>
<i class="undo alternate icon"></i>
<i class="video icon"></i>
<i class="volume down icon"></i>
<i class="volume off icon"></i>
<i class="volume up icon"></i>

<button class="button"> <i class="download icon"></i> Click Me</button>

<kbd>shit</kbd>

---

{{< quizdown >}}

---
primary_color: orange
secondary_color: lightgray
text_color: black
shuffle_questions: false
---

## The sound of dog

---
shuffle_answers: false
---

What do dogs sound like?

> Some hint

- [ ] yes
- [ ] no
- [ ] `self.sound = "meow"`
- [x] wuff

## Put the [days](https://en.wikipedia.org/wiki/Day) in order!

> Monday is the *first* day of the week.

1. Monday
2. Tuesday
3. Wednesday
4. Friday
5. Saturday  
{{< /quizdown >}}

---
<p align="center" width="70%">
<div id="lightgallery">
    <a href="/post5/img2.png">
        <img src="/post5/img2.png">
    </a>
</div>

$$
\nabla_{x}^{2} f(x) \in \mathbb{R}^{n \times n}=\left[\begin{array}{cccc}
\frac{\partial^{2} f(x)}{\partial x_{2}^{2}} & \frac{\partial^{2} f(x)}{\partial x_{1} x_{2}} & \cdots & \frac{\partial^{2} f(x)}{\partial x_{2} \partial x_{n}} \\
\frac{\partial^{2} f(x)}{\partial x_{2} \partial x_{1}} & \frac{\partial^{2} f(x)}{\partial x_{2}^{2}} & \cdots & \frac{\partial^{2} f(x)}{\partial x_{2} \partial x_{n}} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial^{2} f(x)}{\partial x_{n} \partial x_{1}} & \frac{\partial^{2} f(x)}{\partial x_{n} \partial x_{2}} & \cdots & \frac{\partial^{2} f(x)}{\partial x_{n}^{2}}
\end{array}\right]
$$

$$
\\nabla_{x}^{2} f(x) \in \mathbb{R}^{n \times n}=\left[\begin{array}{cccc} \\\\
\\frac{\partial^{2} f(x)}{\partial x_{2}^{2}} & \frac{\partial^{2} f(x)}{\partial x_{1} x_{2}} & \cdots & \frac{\partial^{2} f(x)}{\partial x_{2} \partial x_{n}} \\\\
\\frac{\partial^{2} f(x)}{\partial x_{2} \partial x_{1}} & \frac{\partial^{2} f(x)}{\partial x_{2}^{2}} & \cdots & \frac{\partial^{2} f(x)}{\partial x_{2} \partial x_{n}} \\\\
\\vdots & \vdots & \ddots & \vdots \\\\
\\frac{\partial^{2} f(x)}{\partial x_{n} \partial x_{1}} & \frac{\partial^{2} f(x)}{\partial x_{n} \partial x_{2}} & \cdots & \\frac{\partial^{2} f(x)}{\partial x_{n}^{2}} \\\\
\\end{array}\right] \\\\
$$

<span class="heimu" title="你知道的太多了">
在你想要加黑幕的话之后加上
</span>

{{< notice warning >}}
This is a warning notice. Be warned!
{{< /notice >}}

{{< notice tip >}}
$$
\\begin{equation} |x| = \\\\
\\begin{cases} \\\\
-x & \mbox{if } x < 0,\\\\
        0 & \mbox{if } x = 0,\\\\
x & \mbox{if } x > 0. \\\\
    \end{cases} \\\\
\end{equation} \\\\
$$
{{< /notice >}}

{{<link "Sipnning-Earth-Demo">}}

<div class="twopeople">
    <div class="container" style="height:200px;">
        <canvas class="illo" width="800" height="800" style="max-width: 200px; max-height: 200px; touch-action: none; width: 640px; height: 640px;"></canvas>
    </div>
    <script src="https://cdn.jsdelivr.net/gh/Justlovesmile/CDN/js/twopeople1.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/Justlovesmile/CDN/js/zdog.dist.js"></script>
    <script id="rendered-js" src="https://cdn.jsdelivr.net/gh/Justlovesmile/CDN/js/twopeople.js"></script>
    <style>
        .twopeople{
            margin: 0;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        canvas {
            display: block;
            margin: 0 auto;
            cursor: move;
        }
    </style>
</div>

<ul class="cbp_lvse"> 
    <li> <time class="cbp_lvsj"> <span>07-01</span>
    </time> 
    <div class="cbp_lvsekp"> 
    <p>测试风格</p> 
    </div> 
    </li>  
    </ul>

  <input type="checkbox" id="horns" name="horns">
  <label for="horns">Horns</label>


Look at me - I'm a yellow box!
<svg width="20" height="20">
<rect width="20" height="20" style="fill:#E9E612;stroke-width:3;stroke:rgb(0,0,0)" />
</svg>


| Animation | Preview | Fast | Slow |
|-----------|---------|------|------|
|`faa-wrench`|<i class="fa fa-wrench faa-wrench animated" style="font-size: 2em"></i>|<i class="fa fa-wrench faa-wrench animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-wrench faa-wrench animated faa-slow" style="font-size: 2em"></i>|
|`faa-ring`|<i class="fa fa-bell faa-ring animated" style="font-size: 2em"></i>|<i class="fa fa-bell faa-ring animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-bell faa-ring animated faa-slow" style="font-size: 2em"></i>|
|`faa-horizontal`|<i class="fa fa-envelope faa-horizontal animated" style="font-size:2em"></i>|<i class="fa fa-envelope faa-horizontal animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-envelope faa-horizontal animated faa-slow" style="font-size: 2em"></i>|
|`faa-horizontal faa-reverse`|<i class="fa fa-envelope faa-horizontal animated faa-reverse" style="font-size: 2em"></i>|<i class="fa fa-envelope faa-horizontal animated faa-reverse faa-fast" style="font-size: 2em"></i>|<i class="fa fa-envelope faa-horizontal animated faa-reverse faa-slow" style="font-size: 2em"></i>|
|`faa-vertical`|<i class="fa fa-thumbs-o-up faa-vertical animated" style="font-size: 2em"></i>|<i class="fa fa-thumbs-o-up faa-vertical animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-thumbs-o-up faa-vertical animated faa-slow" style="font-size: 2em"></i>|
|`faa-flash`|<i class="fa fa-warning faa-flash animated" style="font-size: 2em"></i>|<i class="fa fa-warning faa-flash animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-warning faa-flash animated faa-slow" style="font-size: 2em"></i>|
|`faa-bounce`|<i class="fa fa-thumbs-o-up faa-bounce animated" style="font-size: 2em"></i>|<i class="fa fa-thumbs-o-up faa-bounce animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-thumbs-o-up faa-bounce animated faa-slow" style="font-size: 2em"></i>|
|`faa-bounce faa-reverse`|<i class="fa fa-thumbs-o-down faa-bounce faa-reverse animated" style="font-size: 2em"></i>|<i class="fa fa-thumbs-o-down faa-bounce faa-reverse animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-thumbs-o-down faa-bounce faa-reverse animated faa-slow" style="font-size: 2em"></i>|
|`faa-spin`|<i class="fa fa-spinner faa-spin animated" style="font-size: 2em"></i>|<i class="fa fa-spinner faa-spin animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-spinner faa-spin animated faa-slow" style="font-size: 2em"></i>|
|`faa-spin faa-reverse`|<i class="fa fa-spinner faa-spin faa-reverse animated" style="font-size: 2em"></i>|<i class="fa fa-spinner faa-spin faa-reverse animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-spinner faa-spin faa-reverse animated faa-slow" style="font-size: 2em"></i>|
|`faa-float`|<i class="fa fa-plane faa-float animated" style="font-size: 2em"></i>|<i class="fa fa-plane faa-float animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-plane faa-float animated faa-slow" style="font-size: 2em"></i>|
|`faa-pulse`|<i class="fa fa-heart faa-pulse animated" style="font-size: 2em"></i>|<i class="fa fa-heart faa-pulse animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-heart faa-pulse animated faa-slow" style="font-size: 2em"></i>|
|`faa-shake`|<i class="fa fa-envelope faa-shake animated" style="font-size: 2em"></i>|<i class="fa fa-envelope faa-shake animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-envelope faa-shake animated faa-slow" style="font-size: 2em"></i>|
|`faa-tada`|<i class="fa fa-trophy faa-tada animated" style="font-size: 2em"></i>|<i class="fa fa-trophy faa-tada animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-trophy faa-tada animated faa-slow" style="font-size: 2em"></i>|
|`faa-passing`|<i class="fa fa-space-shuttle faa-passing animated" style="font-size: 2em"></i>|<i class="fa fa-space-shuttle faa-passing animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-space-shuttle faa-passing animated faa-slow" style="font-size: 2em"></i>|
|`faa-passing faa-reverse`|<i class="fa fa-space-shuttle faa-passing faa-reverse animated" style="font-size: 2em"></i>|<i class="fa fa-space-shuttle faa-passing faa-reverse animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-space-shuttle faa-passing faa-reverse animated faa-slow" style="font-size: 2em"></i>|
|`faa-burst`|<i class="fa fa-circle-o faa-burst animated" style="font-size: 2em"></i>|<i class="fa fa-circle-o faa-burst animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-circle-o faa-burst animated faa-slow" style="font-size: 2em"></i>|
|`faa-falling`|<i class="fa fa-star-o faa-falling animated" style="font-size: 2em"></i>|<i class="fa fa-star-o faa-falling animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-star-o faa-falling animated faa-slow" style="font-size: 2em"></i>|
|`faa-falling faa-reverse`|<i class="fa fa-star-o faa-falling faa-reverse animated" style="font-size: 2em"></i>|<i class="fa fa-star-o faa-falling faa-reverse animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-star-o faa-falling faa-reverse animated faa-slow" style="font-size: 2em"></i>|
|`faa-rising`|<i class="fa fa-star-o faa-rising animated" style="font-size: 2em"></i>|<i class="fa fa-star-o faa-rising animated faa-fast" style="font-size: 2em"></i>|<i class="fa fa-star-o faa-rising animated faa-slow" style="font-size: 2em"></i>|

{{< img src="avatar/logo.png" title="damn" caption="Ascendia - ProgPower 2016" width="70%">}}

<button class="kbc-button">K</button>
<a class="kbc-button">K</a>

$$
\begin{array}{r}
125 \\\\
4 \longdiv { 5 0 0 } \\
\frac{4}{10} \\
\frac{8}{20} \\
\frac{20}{0}
\end{array}
$$

{{< echarts height="500" >}}
{"title":{"text":"ECharts 入门示例"},"tooltip":{},"legend":{"data":["销量"]},"xAxis":{"data":["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},"yAxis":{},"series":[{"name":"销量","type":"bar","data": [5, 20, 36, 10, 10, 20]}]}
{{< /echarts >}}

<i class="myanmar flag"></i>

{{< music url="https://cdn.jsdelivr.net/gh/ashao0425/CDN/music/光るなら.m4a" >}}

<div id="dplayer">
<script>
    const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'https://cdn.jsdelivr.net/gh/AShao0425/CDN/📀%20Videos/vid.mp4',
    defaultQuality: 0,
    },
});
</script>
</div>

<meting-js
	server="netease"
	type="song"
	id="461347998">
</meting-js>

<script>
    toastr.options = { 
        // toastr配置
        "closeButton": true, //是否显示关闭按钮
        "debug": false, //是否使用debug模式
        "progressBar": true, //是否显示进度条，当为false时候不显示；当为true时候，显示进度条，当进度条缩短到0时候，消息通知弹窗消失
        "positionClass": "toast-top-center",//显示的动画位置
        "showDuration": "400", //显示的动画时间
        "hideDuration": "1000", //消失的动画时间
        "timeOut": "7000", //展现时间
        "extendedTimeOut": "1000", //加长展示时间
        "showEasing": "swing", //显示时的动画缓冲方式
        "hideEasing": "linear", //消失时的动画缓冲方式
        "showMethod": "fadeIn", //显示时的动画方式
        "hideMethod": "fadeOut" //消失时的动画方式
    }

    //调用方式
    toastr.error("错误");
    toastr.success("成功")
    toastr.warning("失败")
    toastr.info("你好")
</script>