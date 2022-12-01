---
title: Function-Plot
date: 2021-09-01T02:14:49+08:00
lastmod: 2021-09-01T02:14:49+08:00
author: 安田俊樹
avatar: /avatar/Avatar3.jpg
mathjax: true
---

# <i class="asterisk loading icon"></i> ff
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