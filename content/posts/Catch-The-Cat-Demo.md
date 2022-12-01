---
title: Catch the Cat Demo
date: 2021-09-05T02:14:49+08:00
lastmod: 2021-09-05T02:14:49+08:00
author: 安田俊樹
avatar: /avatar/Avatar3.jpg
categories:
  - Game
tags:
  - Game
mathjax: true
---
Catch the Cat Game Demo
<!--more-->
<head>
    <meta name="viewport" content="width=device-width  initial-scale=0.7, maximum-scale=1.0, user-scalable=0" charset="UTF-8">
    <title>Catch That Cat!</title>
    <script src="/js/CTC/phaser.min.js"></script>
    <script src="/js/CTC/catch-the-cat.js"></script>
    <style>
        #catch-the-cat {
            display: flex;
            justify-content: center;
        }
    </style>
</head>

<div id="catch-the-cat"></div>
<script>
    window.game = new CatchTheCatGame({
        w: 11,
        h: 11,
        r: 20,
        backgroundColor: 0xeeeeee,
        parent: 'catch-the-cat',
        statusBarAlign: 'center',
        credit: '俊樹'
    });
</script>