---
title: (Website) The best way of integrating MathJax Js in to Hugo for LaTeX math typing
date: 2021-09-05T06:59:49+08:00
lastmod: 2021-09-05T06:59:49+08:00
author: 安田俊樹
cover: /post3/cover1.png
avatar: /avatar/Avatar3.jpg
images:
  - /post3/cover1.png
categories:
  - Website
tags:
  - Js
  - MathJax
  - Hugo
  - LaTeX
mathjax: true
---
*Using MathJax on Hugo has always been a huge problem from framework to inline math, this article will give you the clearest solution for integrating MathJax Js into Hugo based blog sites*
<!--more-->

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1464768125&auto=0&height=66"></iframe>

## Introduction
MathJax is a cross-browser JavaScript library that displays mathematical notation in web browsers, using MathML, $\LaTeX$ and ASCIIMathML markup according to [Wikipedia](https://en.wikipedia.org/wiki/MathJax) and yet it's **open source** so whcih means it's free! 😎

Integrating Mathjax to static sites is easy by simply adding new `html` lines into `header.html` or `footer.html` in your `partials` directory to make Mathjax enabled and supported in every webpage of your blog site. BUT the issue is, while typing $\LaTeX$ math in markdown for generating html for webpages, you typically use two `$` dollar symbol and put formulas and equations inside it, in some other versions of Mathjax, they might also force you to use `\\(` and `\\)` for inline math expressions, these symbols are not correct syntax in $\LaTeX$, yet those are commonly used symbols in writing so which might leads to false-positives identification form MathJax. For example "I want to use 10$ to buy an apple on TaoBao with a 5$ discount coupon", the text between the dollar signs are not math, you want a plain sentence, whereas MathJax mistakenly recongnize that as inline math under the default configuration of the javascript library.

The second issue is some hugo themes have neither [Mathjax](https://mathjax.org) nor [Katex](https://katex.org) built-in for math support, under this situation you have to modify on your own, but some themes might disabled you from using Mathjax, in this situation you will have to create new  `css` stylesheets and `html` configuration file to anable it manually, this will be mentioned herinafter. Normally, javescript library of Mathjax is larger then Katex, but Mathjax has a relatively larger library then Katex does, so conclusively js of Mathjax loads sloer then Katex by 50 times or more, slow loading could also leads to $\LaTeX$ crashes that expressions will not be rendered from time to time. Main issues and disadvantages are listed below:
- Different versions
- False-positives
- Syntax error
- Existence of built-in Mathjax Js library
- Slow loading on webpages
- Adaptation failure
> MathJax v3 is a complete rewrite of MathJax from the ground up, and so its internal structure is quite different from that of version 2. That means MathJax v3 is not a drop-in replacement for MathJax v2, and upgrading to version 3 takes some adjustment to your web pages[^1].
But Don't worry, I'll show you how to solve these probles now!

## Procedures
In our case, we will be using Mathjax v.3, the latest version of Mathjax to complete integration.
- Create a new `html` file in your theme directory, the root path should be this `themes/your-theme/layouts/partials/mathjax_support.html`, open the file and paste the following code to it and save.
  ```html
  <script>
  MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$','$$'], ['\\[', '\\]']],
      processEscapes: true,
      processEnvironments: true
    },
    options: {
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
    }
  };

  window.addEventListener('load', (event) => {
      document.querySelectorAll("mjx-container").forEach(function(x){
        x.parentElement.classList += 'has-jax'})
    });

  </script>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script type="text/javascript" id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
  ```
- Next, open the file in `themes/your-theme/layouts/partials/header.html` or `themes/your-theme/layouts/partials/footer.html`, these two `html` files includes the elements on every single webpage of your site. Find `</footer>` tag (or `</header>` depends on which file you choose to insert the code, in my case I used `footer.heml`), then copy and paste the code just a line above the `</footer>` tag.
  ```html
  {{ if .Params.mathjax }}
    {{ partial "mathjax_support.html" . }}
  {{ end }}
  ```
- Create a `custom.css` file under `static/css` if you don't have the `css` folder create one, then create the `css` file. Css file are used for describing the presentation a `html` page. Finally paste the following code to the `custom.css` file and save the document. You are able to configures the parameters in the `css` file based on your webpage, the code works fine with mine.
  ```css
  code.has-jax {
    -webkit-font-smoothing: antialiased;
    background: inherit !important;
    border: none !important;
    font-size: 100%;
  }
  ```
- Add `mathjax: true` to your archetype file, or just before writing, put `mathjax: true` in your configuration Mathjax in that specific blog page, if you want disable it, just simple switch `true` to `false`
- Until now you are good to go! Let's check out some math typetesting with MathJax.

## Math Typetestting
### Repeating fractions
$$
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} \equiv 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }
$$
$\LaTeX$ code:
```
$$
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} \equiv 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }
$$
```
### Summation notation
$$
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$
$\LaTeX$ code: 
```
$$
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$
```
### Product notation
$$
1+\frac{q^{2}}{(1-q)}+\frac{q^{6}}{(1-q)\left(1-q^{2}\right)}+\cdots=\prod_{j=0}^{\infty} \frac{1}{\left(1-q^{5 j+2}\right)\left(1-q^{5 j+3}\right)}, \text { for }|q|<1
$$
$\LaTeX$ Code:
```
$$
1+\frac{q^{2}}{(1-q)}+\frac{q^{6}}{(1-q)\left(1-q^{2}\right)}+\cdots=\prod_{j=0}^{\infty} \frac{1}{\left(1-q^{5 j+2}\right)\left(1-q^{5 j+3}\right)}, \text { for }|q|<1
$$
```
Paste the codes above to your markdown file and save, then refresh your webpage if these complex equations shows up, which means you are good to go!😊 **Wish you have a good day! 😁**

> [^1]: [MathJax docs – Upgrading from v2 to v](http://docs.mathjax.org/en/latest/upgrading/v2.html#version-2-compatibility-example)

<script>
  toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')
</script>