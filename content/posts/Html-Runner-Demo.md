---
title: HTML Runner Demo
date: 2021-09-01T06:59:49+08:00
lastmod: 2021-09-01T06:59:49+08:00
author: 安田俊樹
avatar: /avatar/Avatar3.jpg
categories:
  - Tutorial
tags:
  - Js
  - Html
mathjax: true
---
Html Runner Demo
<!--more-->

1
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">

<i class="fa fa-spinner faa-spin animated"></i>


<head>
  <meta charset="utf-8">
  <title>在线运行HTML代码器（一）</title>
  <script>
    window.onload = function(){
      var btrun = document.getElementById("btrun");
      var cdarea = document.getElementById("cdarea");
      btrun.onclick = function(){
        if(cdarea.value != "将HTML代码粘在此处，点击运行即可。"){
          var newwin = window.open('', "_blank", '');
          newwin.document.open('text/html', 'replace');
          newwin.opener = null;
          newwin.document.write(cdarea.value);
          newwin.document.close();
        } else {
          alert("请将需要运行的HTML填写到输入框后再运行！");
        }
      }
    }
    function codeClear()
    {
      document.getElementById('cdarea').value = "";
      document.getElementById('cdarea').focus();
    }
  </script>
</head>

<body>
  <textarea id="cdarea" style="background: #f9f9f9; color: #b4b4b4;" rows="8" cols="40" onfocus="if(this.value=='将HTML代码粘在此处，点击运行即可。') {this.value=''; this.style.color='#000000'; this.style.fontFamily='Courier New'; this.style.fontSize='14px'}" onblur="if(this.value=='') {this.value='将HTML代码粘在此处，点击运行即可。'; this.style.color='#ACA899';}">将HTML代码粘在此处，点击运行即可。</textarea>
  <br />
  <input id="btclear" type="button" value="清除" class="button" onclick="codeClear();" />
  <input id="btrun" type="button" class="button" value="运行" />
</body>

```acii

          _____                    _____                    _____            _____                   _______                   _____                    _____          
         /\    \                  /\    \                  /\    \          /\    \                 /::\    \                 /\    \                  /\    \         
        /::\____\                /::\    \                /::\____\        /::\    \               /::::\    \               /::\____\                /::\    \        
       /:::/    /               /::::\    \              /:::/    /       /::::\    \             /::::::\    \             /::::|   |               /::::\    \       
      /:::/   _/___            /::::::\    \            /:::/    /       /::::::\    \           /::::::::\    \           /:::::|   |              /::::::\    \      
     /:::/   /\    \          /:::/\:::\    \          /:::/    /       /:::/\:::\    \         /:::/~~\:::\    \         /::::::|   |             /:::/\:::\    \     
    /:::/   /::\____\        /:::/__\:::\    \        /:::/    /       /:::/  \:::\    \       /:::/    \:::\    \       /:::/|::|   |            /:::/__\:::\    \    
   /:::/   /:::/    /       /::::\   \:::\    \      /:::/    /       /:::/    \:::\    \     /:::/    / \:::\    \     /:::/ |::|   |           /::::\   \:::\    \   
  /:::/   /:::/   _/___    /::::::\   \:::\    \    /:::/    /       /:::/    / \:::\    \   /:::/____/   \:::\____\   /:::/  |::|___|______    /::::::\   \:::\    \  
 /:::/___/:::/   /\    \  /:::/\:::\   \:::\    \  /:::/    /       /:::/    /   \:::\    \ |:::|    |     |:::|    | /:::/   |::::::::\    \  /:::/\:::\   \:::\    \ 
|:::|   /:::/   /::\____\/:::/__\:::\   \:::\____\/:::/____/       /:::/____/     \:::\____\|:::|____|     |:::|    |/:::/    |:::::::::\____\/:::/__\:::\   \:::\____\
|:::|__/:::/   /:::/    /\:::\   \:::\   \::/    /\:::\    \       \:::\    \      \::/    / \:::\    \   /:::/    / \::/    / ~~~~~/:::/    /\:::\   \:::\   \::/    /
 \:::\/:::/   /:::/    /  \:::\   \:::\   \/____/  \:::\    \       \:::\    \      \/____/   \:::\    \ /:::/    /   \/____/      /:::/    /  \:::\   \:::\   \/____/ 
  \::::::/   /:::/    /    \:::\   \:::\    \       \:::\    \       \:::\    \                \:::\    /:::/    /                /:::/    /    \:::\   \:::\    \     
   \::::/___/:::/    /      \:::\   \:::\____\       \:::\    \       \:::\    \                \:::\__/:::/    /                /:::/    /      \:::\   \:::\____\    
    \:::\__/:::/    /        \:::\   \::/    /        \:::\    \       \:::\    \                \::::::::/    /                /:::/    /        \:::\   \::/    /    
     \::::::::/    /          \:::\   \/____/          \:::\    \       \:::\    \                \::::::/    /                /:::/    /          \:::\   \/____/     
      \::::::/    /            \:::\    \               \:::\    \       \:::\    \                \::::/    /                /:::/    /            \:::\    \         
       \::::/    /              \:::\____\               \:::\____\       \:::\____\                \::/____/                /:::/    /              \:::\____\        
        \::/____/                \::/    /                \::/    /        \::/    /                 ~~                      \::/    /                \::/    /        
         ~~                       \/____/                  \/____/          \/____/                                           \/____/                  \/____/         
                                                                                                                                                                       

```