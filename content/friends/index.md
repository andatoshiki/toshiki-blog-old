---
nolastmode: true
---
## Friends
<meting-js
  name="Drive"
  artist="Oh Wonder"
  url="/music/Drive.m4a"
  cover="http://p1.music.126.net/54eYIX5UK0WG6M5ycVY_gw==/7985752954147323.jpg?param=130y130"
  lrc="/music/lyrics/Drive.lrc">
</meting-js>

<style>
/**
Globe Elements
**/
.globe__placeholder {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
  -webkit-border-radius: 6px;
     -moz-border-radius: 6px;
          border-radius: 6px;
  overflow: visible;
  position: relative;
  float: center;
  padding: 0;
  margin: 0;
  margin-bottom: 16px;
  height: 200px; /* Unscaled is 200px. If 'globe__container' is scaled, multiply this value by scale() property, e.g. 200px * 0.5 = 100px */
  width:  200px; /* Unscaled is 200px. If 'globe__container' is scaled, multiply this value by scale() property, e.g. 200px * 0.5 = 100px */
}

.globe__container {
  overflow: visible;
  position: relative;  
  display: block;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
}

.globe__container,
.globe {
  width: 200px;
  height: 200px;  
}
.globe {
  overflow: visible;
  position: relative;  
  display: block;
  margin: 0;
  padding: 0;
  top: 0; left: 0;
}

.globe__worldmap,
.globe__worldmap__front,
.globe__worldmap__back,
.globe__sphere,
.globe__outer_shadow,
.globe__reflections__bottom,
.globe__inner_shadow,
.globe__reflections__top,
.globe__outer_shadow {
  position: absolute; display: block; margin: 0; right: auto; bottom: auto;  
}

.globe__sphere,
.globe__outer_shadow,
.globe__reflections__bottom,
.globe__inner_shadow,
.globe__reflections__top {
  left: 0; top: 0; width: 200px; height: 200px;
  background-position: 0 0; background-repeat: no-repeat;
}
.globe__outer_shadow {
  left: 0; top: 186px; width: 200px; height: 30px;
  background-position: 0 0; background-repeat: no-repeat;
}

/* Circle mask for animated SVG files */
.globe__worldmap {
  left: 0; top: 0; width: 200px; height: 200px; overflow: hidden;
  -webkit-border-radius: 50%;
   -khtml-border-radius: 50%;
     -moz-border-radius: 50%;
          border-radius: 50%;
-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
/*
  overflow: visible;
*/
}

.globe__worldmap__front,
.globe__worldmap__back {
  left: 0; top: 0; width: 1000px; height: 200px; overflow: visible;
  background-image: url(//repo.bfw.wiki/bfwrepo/svg/worldmap_2x.svg);
  background-repeat: no-repeat;
}



/**
Globe elements visibility options
**/
.globe__sphere { background-image: url(http://www.cakecounter.com/globe/white-blue/globe_images/sphere.svg); display: none;}

.globe__outer_shadow { background-image: url(http://www.cakecounter.com/globe/white-blue/globe_images/outer_shadow.svg);}
.globe__reflections__top { background-image: url(http://www.cakecounter.com/globe/white-blue/globe_images/reflections.svg); display: none;}
.globe__reflections__bottom { background-image: url(http://www.cakecounter.com/globe/white-blue/globe_images/reflections.svg); display: none;}
.globe__inner_shadow { background-image: url(http://www.cakecounter.com/globe/white-blue/globe_images/inner_shadow.svg);}
.globe__worldmap__front { background-position: 0px 0px;
animation: textureSpinreverse 8s linear infinite;
}
.globe__worldmap__back { background-position: 0px -220px;
    animation: textureSpin 8s linear infinite;
}

body { background-color: #fff;}
.container h2 {
  padding: 0;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  font-size: 32px;
  line-height: 1.2;
}
.container h2 span {
  font-size: 65%;
}
.container h3 {
  padding: 0;
  margin: 0;
  font-size: 18px;
  font-weight: normal;
  padding-bottom: 1em;
}
.container p {
  color: #a6aeb5;
}

.container {
  margin: 0 auto;
  width: 100%;
  padding-left: 300px;
  padding-right: 10%;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
/*outline: 1px solid green;*/
}
.container .btn { text-align: right; clear: both; padding: 1em; padding-top: 1.5em; border-top: 1px solid rgba(0,0,0,0.1); }
.container button { width: 100px; height: 40px; border: none; border-bottom: 1px solid #ccc; background-color: #efefef; border-radius: 4px; }

.controls {
  background-color: #F8F8F8;
  font: normal 14px/1 Arial, Tahoma;
  width: 266px;
  position: absolute;
  top: 0;
  left: 0;
/*
*/
  z-index: 100; 

  height: 100%;
  overflow: auto;
-webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0, 0.1);
   -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0, 0.1);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0, 0.1);
}
.controls div {
  padding: 10px 20px;
  clear: both;
}
.controls div#stage-bg-color {
  padding-top: 20px;
  padding-bottom: 6px;
}
a {
  color: #ccc;
  text-decoration: none;
}
a:hover {
  color: #000;
  text-decoration: none;
}
a.on {
  color: #51B7FF;
  text-decoration: none;
  pointer-events: none; /* IE 11+, Safari 4+, Firefox 3.6+, Chrome */
}

div.opacity {
  padding-bottom: 0;
}
div.opacity div {
  padding-left: 15px;
  margin-right: 10px;
  position: relative;
  font-size: 12px;
}
input.range {
  width: 80px;
  float: right;

  padding: 0;
  margin: 0;
}
input.text {
  width: 35px;
  border: none;
  background-color: #fff;
  color: #ccc;
  display: none;
}
input.color {
  font-size: 12px;
  margin-top: 0px;
  width: 50px;
  border: 1px solid rgba(204,204,204,0.5);
  padding: 6px;
  -webkit-border-radius: 4px;
     -moz-border-radius: 4px;
          border-radius: 4px;
}
button#play {
  width: 50px;
}
.info {
  color: #a6aeb5;
  font-size: 90%;
  line-height: 1.3;
}
.info ul {
  padding-left: 15px;
}
.info ul li {
  padding-bottom: .5em;
}
a.button {
  border: 1px solid #51B7FF;
  color: #51B7FF;
  padding: 12px;
-webkit-border-radius: 5px;
   -moz-border-radius: 5px;
        border-radius: 5px;
}
a.button:hover {
  border: 1px solid #609DE5;
  color: #444;
}

#Stage code {
  position: absolute;
  top: 366px;
  right: 0px;
  left: 0;
  text-align: center;
  z-index: 99;
  font-family: Arial, "MS Trebuchet";
  font-size: 13px;
  color: #333;
}
#Stage code.white {
  color: rgba(255,255,255,0.95);
}

.controls .nav-container {
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
}

.controls #nav {
  width: 206px;
  display: inline-block;
  margin-right: 5px;
}
.controls .nav-fwd-bck {
  font-size: 13px;
  display: inline-block;
  padding: 0;
}
.nav-fwd-bck a {
  padding: 5px 0px;
  border: none;
}
.nav-fwd-bck a:hover {
  border: none;
}

#big-nav {
  position: absolute;
  z-index: 999;
  font-size: 36px;
  font-weight: bold;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  top: 410px;
  left: 8px;
  width: 265px;
  text-align: left;
}
#big-nav a {
  display: inline-block;
  border: none;
  color: #51B7FF;
}
#big-nav a:hover {
  border: none;
  color: #a6aeb5 !important;
}

div.reflections {
  font-size: 12px;
  padding-bottom: 20px;
}
.reflections strong {
  font-weight: normal;
  padding-left: 15px;
  padding-right: 5px;
}
.reflections a {
  padding-left:  1px;
  padding-right: 1px;
}

.disabled {
  color: #ccc;
}

.info a {
  color: #727272;
  border-bottom: 1px dashed #51B7FF;
}
.info a:hover {
  color: #444;
  border-bottom: 1px dashed #51B7FF;
}

.title p {
  font-family: Arial, "MS Trebuchet";
  font-size: 20px;
  margin: 5px 0;
  padding: 0;
}
.title p.sub {
  padding-top: 0.65em;
  font-size: 12px;
}

.buy {
  margin-top: 10px;
  margin-bottom: 10px;
}
.buy a{
  font-size: 13px;
  font-weight: bold;
  color: #708090;
  border-color: #708090;
  border-color: rgba(112,128,144,0.85);
  border-width: 2px;
  text-align: center;
-webkit-transition: .25s all ease;
   -moz-transition: .25s all ease;
     -o-transition: .25s all ease;
        transition: .25s all ease;
display: inline-block;
width: 180px;
}
.buy a:hover{
  border-width: 2px;
  color: #fff;
  border-color: #51B7FF;
  background-color: #51B7FF;
}

.examples a {
  border-color: #fff;
  display: inline-block;
  margin-bottom: 3px;
}
.examples a:hover {
  color: #51B7FF;
}

.reflections .t {
  padding: 2px 5px;
  display: inline-block;
}


#Stage {
    -webkit-transition: background-color 0.2s ease 0.0s;
       -moz-transition: background-color 0.2s ease 0.0s;
        -ms-transition: background-color 0.2s ease 0.0s;
         -o-transition: background-color 0.2s ease 0.0s;
            transition: background-color 0.2s ease 0.0s;
}

.ani_bgc {
    -webkit-transition: background-color 0.25s ease 0.0s;
       -moz-transition: background-color 0.25s ease 0.0s;
        -ms-transition: background-color 0.25s ease 0.0s;
         -o-transition: background-color 0.25s ease 0.0s;
            transition: background-color 0.25s ease 0.0s;
}
.ani_opacity {
-webkit-transition: 0.25s opacity;
   -moz-transition: 0.25s opacity;
     -o-transition: 0.25s opacity;
        transition: 0.25s opacity;
}


/*
@media screen and (max-width: 1920px){}
@media screen and (max-width: 1680px){}
*/
@media screen and (max-width: 1400px){
  #Stage, .title {
/*  left: 250px !important;*/
  }
}
/*
@media screen and (max-width: 1200px){}
@media screen and (max-width: 1024px){}
*/


@keyframes textureSpin {
  from {
    transform: translateX(0);
  }
  to {
        transform: translateX(-47.5%);
  }
}


@keyframes textureSpinreverse {
  from {
        transform: translateX(-47.5%);
  }
  to {
    transform: translateX(0);
  }
}




@media screen and (max-width: 768px)
{
  .container{padding-left: 140px;}
}

@media screen and (max-width: 425px)
{
  .container{padding-left: 70px;}
}

@media screen and (max-width: 320px)
{
  .container{padding-left: 0px;}
}
</style>

<script id="picviewer-page-script">(function(messageID){
                var frameID=Math.random();
                var frames={
                    top:window.top,
                };

                window.addEventListener('message',function(e){
                    var data=e.data;
                    if( !data || !data.messageID || data.messageID != messageID )return;//通信ID认证
                    var source=e.source;
                    if(source===window){//来自contentscript,发送出去,或者干嘛。
                        if(data.to){
                            data.from=frameID;
                            frames[data.to].postMessage(data,'*');
                        }else{
                            switch(data.command){
                                case 'getIframeObject':{
                                    var frameWindow=frames[data.windowId];
                                    var iframes=document.getElementsByTagName('iframe');
                                    var iframe;
                                    var targetIframe;
                                    for(var i=iframes.length-1 ; i>=0 ; i--){
                                        iframe=iframes[i];
                                        if(iframe.contentWindow===frameWindow){
                                            targetIframe=iframe;
                                            break;
                                        };
                                    };
                                    var cusEvent=document.createEvent('CustomEvent');
                                    cusEvent.initCustomEvent('pv-getIframeObject',false,false,targetIframe);
                                    document.dispatchEvent(cusEvent);
                                }break;
                            };
                        };

                    }else{//来自别的窗口的，contentscript可以直接接收，这里保存下来自的窗口的引用
                        frames[data.from]=source;
                    };
                },true)
            })("pv-0.5106795670312598")</script><style type="text/css">                    #pv-float-bar-container {                    position: absolute;                    z-index:9999999998;                    padding: 5px;                    margin: 0;                    border: none;                    opacity: 0.6;                    line-height: 0;                    -webkit-transition: opacity 0.2s ease-in-out;                    transition: opacity 0.2s ease-in-out;                    display:none;                    }                    #pv-float-bar-container:hover {                    opacity: 1;                    }                    #pv-float-bar-container .pv-float-bar-button {                    vertical-align:middle;                    cursor: pointer;                    width: 18px;                    height: 18px;                    padding: 0;                    margin:0;                    border: none;                    display: inline-block;                    position: relative;                    box-shadow: 1px 0 3px 0px rgba(0,0,0,0.9);                    background: transparent center no-repeat;                    background-size:100% 100%;                    background-origin: content-box;                    -webkit-transition: margin-right 0.15s ease-in-out ,  width 0.15s ease-in-out ,  height 0.15s ease-in-out ;                    transition: margin-right 0.15s ease-in-out ,  width 0.15s ease-in-out ,  height 0.15s ease-in-out ;                    }                    #pv-float-bar-container .pv-float-bar-button:not(:last-child){                    margin-right: -14px;                    }                    #pv-float-bar-container .pv-float-bar-button:first-child {                    z-index: 4;                    }                    #pv-float-bar-container .pv-float-bar-button:nth-child(2) {                    z-index: 3;                    }                    #pv-float-bar-container .pv-float-bar-button:nth-child(3) {                    z-index: 2;                    }                    #pv-float-bar-container .pv-float-bar-button:last-child {                    z-index: 1;                    }                    #pv-float-bar-container:hover > .pv-float-bar-button {                    width: 24px;                    height: 24px;                    }                    #pv-float-bar-container:hover > .pv-float-bar-button:not(:last-child) {                    margin-right: 4px;                    }                    #pv-float-bar-container .pv-float-bar-button-actual {                    background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFQkE5RjA0RDk2MzhFMjExQTU0REJGNDRCQTFCOUNERSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOEE0N0FDMTNENjgxMUUyOUQ4REU1MDlFRDYwNTkzOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOEE0N0FDMDNENjgxMUUyOUQ4REU1MDlFRDYwNTkzOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVCQTlGMDREOTYzOEUyMTFBNTREQkY0NEJBMUI5Q0RFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVCQTlGMDREOTYzOEUyMTFBNTREQkY0NEJBMUI5Q0RFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+nuhUUAAAAVFJREFUeNq01bGqglAYB/BuiQ0hDU26aTgYtES74As4iG/gQziIbyAStgu2NhQtvUGk6Au4OTg4qCjk5ulc4l6sa/eCx/sfDpzjxw/9OB9+AAAGvaQXCCLDQU/5N2i1Wl0uF1EUkXq0WCyKogiCoAvShE6nE9wahoHabEEQ4JrnOWqPqqqCK8dxqPdot9vBbVmWs9kMqUcMw2RZBk8cx0GCHt91PB7TNNV1HQn6M9PpFBUaj8f7/R7We55HUVR3yLIs8JXr9ToajbpA6/W6rmvQiKIoXaDz+QyeE0URhmHt0Hw+930/DMPlctlU4Ay+vM4jsiy3QARBQOJRkSQJTdPf0GazAW05HA4tkGmazSLXdXEc/xyi4TCO41bodrtNJpMniCRJePpSp2kafMTzPHgfSZKeIFVVfxbBGWZZdrvd/gLZtt3xZr8bEayvH8ldgAEAjySkPffpTOwAAAAASUVORK5CYII=");                    }                    #pv-float-bar-container .pv-float-bar-button-search {                    background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAqFBMVEUAAAD///8KCgq/v7/MzMwFBQXj4+OTk5P9/f2mpqakpKSVlZWMjIyJiYkuLi4qKiokJCQZGRn5+fny8vLd3d3c3NzS0tLOzs7Dw8O7u7u3t7d1dXVubm4ODg719fXn5+fa2trW1tbQ0NDJycnGxsaysrKbm5uPj496enp5eXk9PT03NzcjIyMWFhYRERH29vbq6uqsrKyenp6Ojo5kZGRCQkIzMzMmJib+wYUxAAAA/UlEQVQoz53R527CUAyGYb9JyCIkbMhi79Xd3v+d1ZymAqEiVXx/ju3nj3Us3Ikgf+Yf0MzTXtfeJDdgNTqYPHmna2gtgH4QDM5P8wKtGQw/alrtbOgdfqGmnXcei9YROFYFG6jrqEjTXEdv0PiBwwi7JtYSwFbJaMcGIkaxyDt0J1Do4h1WBrqEIvJCr7Rm2FqucA24vGq3ZCoyZ6ilx9hAnY6uXoAzh60u/0xoIGmTiVhDUCtFAvxPAxKZBU8NZ7A+iuRmeQOWA5FU2UK/rEC+XMj2ookDGCeXT0ym4C/qnt2GSXz97cfQx8QPWzeH2q8d1x14u6p96OZ38g2yyQ1gIwkXlgAAAABJRU5ErkJggg==");                    }                    #pv-float-bar-container .pv-float-bar-button-gallery {                    background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTEwMDAwRUIzOEEwMTFFMjhEOEM5NkVGODMwQkUyRjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTEwMDAwRUMzOEEwMTFFMjhEOEM5NkVGODMwQkUyRjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTAwMDBFOTM4QTAxMUUyOEQ4Qzk2RUY4MzBCRTJGOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTAwMDBFQTM4QTAxMUUyOEQ4Qzk2RUY4MzBCRTJGOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvbSbv8AAAD8SURBVHjarJVBDkQwFIZ10q0DWNq6hEOIu1iIOwh7V3AC1hZcwC1I2HnTmWbedMqUVv+ElPZ9/veirwQAHCuyAmIQaoYjhEhvqGJOKwlqliZfKX6bnnq+6IveKb/oi16s5amvh2NJKtA0TcMwWAC5rtu2rQUQk+d5eltkf+eDeZ4vhqscBUHQNE2WZXcdaYU/tMpRFAW81XXdX2SSJKeOtm2Dj+SEcMTFfOGivu/HcRRLBoLiOD4AIR59sZ+IB/i+z2fzPBdBdV2rQOhrWRZ8TNM0DEPYKYqiY5DkC7Wua1mWe1BVVQgir+t3rxu03W/PNushcmOzcpA8BRgAZvU/uPa6ZfkAAAAASUVORK5CYII=");                    }                    #pv-float-bar-container .pv-float-bar-button-current {                    background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkFGMjYxQkQzOEEwMTFFMkJBMzdENzI0QkVEMjM3NjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkFGMjYxQkUzOEEwMTFFMkJBMzdENzI0QkVEMjM3NjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQUYyNjFCQjM4QTAxMUUyQkEzN0Q3MjRCRUQyMzc2OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQUYyNjFCQzM4QTAxMUUyQkEzN0Q3MjRCRUQyMzc2OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkXfwy0AAADoSURBVHjaYvpPJcDCwMDAyMjIQBkAGsTEQCVANYNY0FxIkmbkMGHBI0cwXGjiNewGffr06dy5c1QwiJeXd//+/dSJNUlJSZLTEiYbyPj8+TNJGrG7SEtLa9++fXV1dZS6iAyNxEb/5MmTIZnz5MmTFLno379/8IxOgovOnj17+/Zt5CBDTvGhoaFEuQiYiCA2KyoqQsQnTpyIXPRs2LABi0Y0PjD5fPv2Da6npqbG3t4esxgLDg4mYFBFRQWyhu/fv0+ZMgXToPnz56NpZARhmP/JLkagRS0ZZQgNS0iqFrWkBg1WABBgAMViMFcYqRWbAAAAAElFTkSuQmCC");                    }                    #pv-float-bar-container .pv-float-bar-button-magnifier {                    background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFOUE5RjA0RDk2MzhFMjExQTU0REJGNDRCQTFCOUNERSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2OTVBMUFDOTM4QTMxMUUyQjU3OEY5MDVFQzA5NDg3NiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2OTVBMUFDODM4QTMxMUUyQjU3OEY5MDVFQzA5NDg3NiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU4REEyMTVBQTMzOEUyMTFBNTREQkY0NEJBMUI5Q0RFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU5QTlGMDREOTYzOEUyMTFBNTREQkY0NEJBMUI5Q0RFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+c9dtRgAAAdpJREFUeNqsVS3LwlAUdjIFgx9hCyJDRPEfKIqMBe2GMbCYzDMb/BN+NAWjRottRsMQ1gWLwWawqEFh78M72a53H4LshnF37nOenfOcc+4Y0zQjoaxQiEASpUw8z/d6veVyeTwen88nntjDAnswFwMyhmGsl2azqarq5XLRNG2/359Op3w+X6lUWq0Wx3GTyWS73fqmZacGFvi3221PKOw4BcaP6B0RIp/NZovFAuH4BS+KYrfbzeVy6XTayeg/GyciqDCfz7FpNBoBQgADpLtQjthQAZFTbqvVirIAA6TnN95EUBTqkge1Wi2TyVBoYIAMqhoqnUgkXq8XUtvtdogFZXo8HrfbDaBOp2OhWZaFMRaLORpTGqFfisUiqRE2m82G+iwwQAZp5BlzPB6nLG4FaI3cKhqG0e/3BUEgjZ41+QgPfbRer9F1AeXHKTDkrJCp0Z09GAz8WJDU4XAAXtd1NxFrQ605Go/HpVLJc9ZSqVS5XAamWq1+v0au16s1/efzGd1gT3+9XjeJpSiKb2okbzKZtBwKhYJlH41GJBHE+k6UzWbv97vtMxwOJUkyXUuW5S9E0Jt0QCtPp1M3Ea4KkujjYvvh5rVHhPU8+GFFIyEtNqwfyZ8AAwDsuJgtGILBsQAAAABJRU5ErkJggg==");                    }                    </style>
</head>
<body translate="no" marginwidth="0" marginheight="0">
<div class="container">

<div class="globe__placeholder">
<div class="globe__container">
<div class="globe">
<div class="globe__sphere"></div>
<div class="globe__outer_shadow"></div>
<div class="globe__reflections__bottom"></div>
<div class="globe__worldmap">
<div class="globe__worldmap__back"></div>
<div class="globe__worldmap__front"></div>
</div>
<div class="globe__inner_shadow"></div>
<div class="globe__reflections__top"></div>
</div>
</div>
</div>

</div>
</body>

# Brothers 🍻
{{< friend name="Tanuj Padaliya" url="https://callmetan7.github.io/" logo="/avatar/logo.png" word="Talented 13-year-old programmer" >}}

{{< friend name="愛のために --ck" url="http://wlopck.gitee.io/" logo="https://tva2.sinaimg.cn/crop.0.0.525.525.180/6b8c14f8jw8eop608nktzj20el0elaae.jpg?KID=imgbed,tva&Expires=1633249099&ssig=aOZfawr6dg" word="一个正在努力的大佬" >}}

{{< friend name="卓越笔记" url="https://xieboke.net/" logo="http://pic.xieboke.net/joyoblog.png" word="分享所学技能，记录点滴生活。" >}}

# Pros 🤝🏻
{{< friend name="g1eny0ung" url="https://g1eny0ung.site/" logo="https://g1eny0ung.site/me/yy.jpg" word="Creator of Hugo theme Dream" >}}