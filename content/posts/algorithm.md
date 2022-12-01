---
title: Random Variable and Expectation_
date: 2021-09-26T03:36:36+08:00
lastmod: 2021-09-26T03:36:36+08:00
author: 安田俊樹
cover: /post5/Pornhub.png
avatar: /avatar/Avatar3.jpg
images:
  - /post5/Pornhub.png
categories:
  - Tutorial
tags:
  - Pornhub
  - Js
  - Download
  - Chrome
  - Extension
  - Browsers
  - Violentmonkey
mathjax: true

---

# Discrete Random Variables and Expectations

Start off with an example, using the most normal element we would use in fundamental probability to explain combinations and outcomes in an event, two **die**. With this two dice we will have 36 possible outcomes. Let $(a, b)$ denote a possible outcome of rolling the two die, with the number on the top of the first die and b the number on the top of the second die. Note that each of $a$ and $b$ can be any of the integers from 1 through 6, here is the list of the all possible combinations.
$$
\begin{aligned} \\\\
&(1,1)(1,2)(1,3)(1,4)(1,5)(1,6) \\\\
&(2,1)(2,2)(2,3)(2,4)(2,5)(2,6) \\\\
&(3,1)(3,2)(3,3)(3,4)(3,5)(3,6) \\\\
&(4,1)(4,2)(4,3)(4,4)(4,5)(4,6) \\\\
&(5,1)(5,2)(5,3)(5,4)(5,5)(5,6) \\\\
&(6,1)(6,2)(6,3)(6,4)(6,5)(6,6) \\\\
\end{aligned}
$$
or $\{(1,1),(1,2), \ldots,(6,5),(6,6)\}$. We can also derive the 11 possible yet unequal probability of the sum. **Any such function from the sample space to the real numbers is called a random variable**.

## Random Variable

{{< notice info >}}

A random variable $X$ on a sample space $\Omega$ is a real-valued (measurable) function on $\Omega$; that is, $X: \Omega \rightarrow \mathbb{R}$. A discrete random variable A discrete random variable is a random variable that takes on only a finite or countably infinite number of values.

{{< /notice >}}

Since random variables are functions, they are usually denoted by a capital letter such as $X$ or $Y$, while real numbers are usually denoted by lowercase letters.

For a discrete random variable $X$ denoted above, and a real value $a$, the event "$X = a$" includes all the basic events of the sample space in which the random variable $X$ assumes the value $a$. That is, "$X=a$" represents the set $\{s \in \Omega \mid X(s)=a\}$. We denote the probability of that event by,
$$
\operatorname{Pr}(X=a)=\sum_{s \in \Omega: X(s)=a} \operatorname{Pr}(s)
$$
If $X$ is the random variable representing the sum of the two dice, then the event $X=4$ corresponds to the set of basic events $\{(1,3),(2,2),(3,1)\}$. Hence
$$
\operatorname{Pr}(X=4)=\frac{3}{36}=\color{#}\frac{1}{12}
$$
The definition of independence we developed for events extends to random variables.

{{< notice info >}}

Two random variables $X$ and $Y$ are independent if and only if
$$
\operatorname{Pr}((X=x) \cap(Y=y))=\operatorname{Pr}(X=x) \cdot \operatorname{Pr}(Y=y)
$$
for all values $x$ and $y$. Similarly, random variables. $X_{1}, X_{2}, \ldots, X_{k}$ are mutually independent if and only if, for any subset $I \subseteq[1, k]$ and any values $x_{i}, i \in I$,
$$
\operatorname{Pr}\left(\bigcap_{i \in I}\left(X_{i}=x_{i}\right)\right)=\prod_{i \in I} \operatorname{Pr}\left(X_{i}=x_{i}\right)
$$
{{< /notice >}}

A basic characteristic of a random variable is its *exception*, which is also often called the *mean*. The expectation of a random variable is a weighted average of the values it assumes, where each value is weighted by the probability that the variable assumes that value

{{< notice info >}}

The expectation of a discrete random variable $X$, denoted by $E[X]$,is given by
$$
\mathbf{E}[X]=\sum_{i} i \operatorname{Pr}(X=i)
$$
where the summation is over all values in the range of  $X$. The expectation is finite if $\sum_{i}|i| \operatorname{Pr}(X=i)$ converges; otherwise, the expectation is unbounded.

{{< /notice >}}

For example, the expectation of the random variable $X$ representing the sum of two dice is
$$
\mathbf{E}[X]=\frac{1}{36} \cdot 2+\frac{2}{36} \cdot 3+\frac{3}{36} \cdot 4+\cdots+\frac{1}{36} \cdot 12=7
$$
You may try using symmetry to give simpler argument for why $E[X]=7$. As an example of where the expectation of a discrete random variable is unbounded, consider a random variable $X$ that takes on the value $2^i$ with probability $1/2^i$ for $i=1,2 \cdots$ The expected value of $X$ is,
$$
\mathbf{E}[X]=\sum_{i=1}^{\infty} \frac{1}{2^{i}} 2^{i}=\sum_{i=1}^{\infty} 1=\infty
$$
Here we use the somewhat informal notation $E[X]=\infty$ to express that $E[X]$ is unbounded.

## Linearity of Expectations

A key property of expectation that significantly simplifies its computation is the linearity of expectations. By this property, the expectation of the sum of random variables is equal to the sum of their expectations. Formally, we have the following theorem.

{{< notice note >}}

**Linear of Expectations** : for any finite collection of discrete random variables $X_{1}, X_{2}, \ldots, X_{n}$ with finite expectations,
$$
\mathbf{E}\left[\sum_{i=1}^{n} X_{i}\right]=\sum_{i=1}^{n} \mathbf{E}\left[X_{i}\right]
$$
{{< /notice >}}

**Proof**:  prove the statement for two random variables $X$ and $Y$; the general case follows by induction. The summations that follow are understood to be over the ranges of the corresponding random variables:
$$
\begin{aligned} \\\\
\mathbf{E}[X+Y] &=\sum_{i} \sum_{j}(i+j) \operatorname{Pr}((X=i) \cap(Y=j)) \\\\
&=\sum_{i} \sum_{j} i \operatorname{Pr}((X=i) \cap(Y=j))+\sum_{i} \sum_{j} j \operatorname{Pr}((X=i) \cap(Y=j)) \\\\
&=\sum_{i} i \sum_{j} \operatorname{Pr}((X=i) \cap(Y=j))+\sum_{j} j \sum_{i} \operatorname{Pr}((X=i) \cap(Y=j)) \\\\
&=\sum_{i} i \operatorname{Pr}(X=i)+\sum_{j} j \operatorname{Pr}(Y=j) \\\\
&=\mathbf{E}[X]+\mathbf{E}[Y] \\\\
\end{aligned}
$$
The first equality follows from,

{{< notice info >}}

**Definition**:  probability function is any function $\operatorname{Pr}: \mathcal{F} \rightarrow \mathbf{R}$ that satisfy the following conditions:

- for any event $E, 0 \leq \operatorname{Pr}(E) \leq 1$

- $\operatorname{Pr}(\Omega)=1$; and

- for any finite or countably infinite sequence of pairwise mutually disjoint events $E_{1}, E_{2}, E_{3}, \ldots$
  $$
  \operatorname{Pr}\left(\bigcup_{i \geq 1} E_{i}\right)=\sum_{i \geq 1} \operatorname{Pr}\left(E_{i}\right)
  $$

{{< /notice >}}

In the penultimate equation we used the **Law of Total Probability** as follow,

{{< notice info >}}

**Law of Total Probability**: Let $E_{1}, E_{2}, \ldots, E_{n}$ be mutually disjoint events in the sample space $\Omega$, and let $\bigcup_{i=1}^{n} E_{i}=\Omega$. Then
$$
\operatorname{Pr}(B)=\sum_{i=1}^{n} \operatorname{Pr}\left(B \cap E_{i}\right)=\sum_{i=1}^{n} \operatorname{Pr}\left(B \mid E_{i}\right) \operatorname{Pr}\left(E_{i}\right)
$$
**Proof**： Since the events $E_{i}(i=1, \ldots, n)$ are disjoint and cover the entire sample space $\Omega$, it follows that,
$$
\operatorname{Pr}(B)=\sum_{i=1}^{n} \operatorname{Pr}\left(B \cap E_{i}\right)
$$
Further,
$$
\sum_{i=1}^{n} \operatorname{Pr}\left(B \cap E_{i}\right)=\sum_{i=1}^{n} \operatorname{Pr}\left(B \mid E_{i}\right) \operatorname{Pr}\left(E_{i}\right)
$$
by the definition of conditional probability.

Now, using this law and summing over all collections of values $\left(x_{2}, x_{3}, x_{4}, \ldots, x_{n}\right) \in \{0,1\}^{n-1}$ yields
$$
\begin{aligned} \\\\
\operatorname{Pr}(\mathbf{A B} \bar{r}=\mathbf{C} \bar{r}) &=\operatorname{Pr}\left((\mathbf{A B} \bar{r}=\mathbf{C} \bar{r}) \cap\left(\left(r_{2}, \ldots, r_{n}\right)=\left(x_{2}, \ldots, x_{n}\right)\right)\right) \\\\
&=\sum_{\left(x_{2}, \ldots, x_{n}\right) \in\{0,1\}^{n-1}} \\\\
& \leq \sum_{\left(x_{2}, \ldots, x_{n}\right) \in\{0,1\}^{n-1}} \operatorname{Pr}\left(\left(r_{1}=-\frac{\sum_{j=2}^{n} d_{1 j} r_{j}}{d_{11}}\right) \cap\left(\left(r_{2}, \ldots, r_{n}\right)=\left(x_{2}, \ldots, x_{n}\right)\right)\right) \\\\
&=\sum_{\left(x_{2}, \ldots, x_{n}\right) \in\{0,1\}^{n-1}} \operatorname{Pr}\left(r_{1}=-\frac{\sum_{j=2}^{n} d_{1 j} r_{j}}{d_{11}}\right) \cdot \operatorname{Pr}\left(\left(r_{2}, \ldots, r_{n}\right)=\left(x_{2}, \ldots, x_{n}\right)\right) \\\\
& \leq \sum_{\left(x_{2}, \ldots, x_{n}\right) \in\{0,1\}^{n-1}} \frac{1}{2} \operatorname{Pr}\left(\left(r_{2}, \ldots, r_{n}\right)=\left(x_{2}, \ldots, x_{n}\right)\right) \\\\
&=\frac{1}{2} \\\\
\end{aligned}
$$
Here we have used the independence of $r_1$ and $\left(r_{2}, \ldots, r_{n}\right)$ in the fourth line.

{{< /notice >}}

We now use this property to compute the expected sum of two standard dice. Let $X=X_1+X_2$, where $X_1$ represents the outcome of die $i$ for $i=1, 2$. Then,
$$
\mathbf{E}\left[X_{i}\right]=\frac{1}{6} \sum_{j=1}^{6} j=\frac{7}{2}
$$
Applying the linearity of expectations, we have,
$$
\mathbf{E}[X]=\mathbf{E}\left[X_{1}\right]+\mathbf{E}\left[X_{2}\right]=7
$$
It is worth emphasizing that linearity of expectations holds for any collection of random variables, even if they are not independent! For example, consider again the previous example and let the random variable $Y=X_{1}+X_{1}^{2}$. We have,
$$
\mathbf{E}[Y]=\mathbf{E}\left[X_{1}+X_{1}^{2}\right]=\mathbf{E}\left[X_{1}\right]+\mathbf{E}\left[X_{1}^{2}\right]
$$
even through $X_1$ and $X_1^2$ are clearly dependent. As' an exercise, you may verify this identity by considering the six possible outcomes for $X_1$.

Linearity of expectations also holds for countably infinite summations in certain cases. Specifically, it can be shown that,
$$
\mathbf{E}\left[\sum_{i=1}^{\infty} X_{i}\right]=\sum_{i=1}^{\infty} \mathbf{E}\left[X_{i}\right]
$$
whenever $\sum_{i=1}^{\infty} \mathbf{E}\left[\left|X_{i}\right|\right]$ converges.

{{< notice info >}}

**Lemma**: <a id="Lemma"></a>For any constant $c$ and discrete random variable $X$,
$$
\mathbf{E}[c X]=c \mathbf{E}[X]
$$
**Proof**: The lemma is obvious for $c=0$. For $c \neq 0$,
$$
\begin{aligned} \\\\
\mathbf{E}[c X] &=\sum_{j} j \operatorname{Pr}(c X=j) \\\\
&=c \sum_{j}(j / c) \operatorname{Pr}(X=j / c) \\\\
&=c \sum_{k} k \operatorname{Pr}(X=k) \\\\
&=c \mathbf{E}[X] \\\\
\end{aligned}
$$
{{< /notice >}}

## Jensen’s Inequality

Suppose that we choose the length X of a side of a square uniformly at random from
the range$ [1, 99]$. What is the expected value of the area? We can write this as $\mathbf{E}\left[X^{2}\right]$. It is tempting to think of this as being equal to $\mathbf{E}\left[X^{2}\right]$, but a simple calculation shows that this is not correct. In fact, $\mathbf{E}\left[X^{2}\right]=2500$ whereas $\mathbf{E}\left[X^{2}\right]=9950 / 3>2500$.

More generally, we can prove that $\mathbf{E}\left[X^{2}\right] \geq(\mathbf{E}[X])^{2}$. Consider $Y=(X-\mathbf{E}[X])^{2}$. The random variable $Y$ is nonnegative and hence its expectation must also be nonnegative. Therefore,
$$
\begin{aligned} \\\\ 0 \leq \mathbf{E}[Y] &=\mathbf{E}\left[(X-\mathbf{E}[X])^{2}\right] \\\\ &=\mathbf{E}\left[X^{2}-2 X \mathbf{E}[X]+(\mathbf{E}[X])^{2}\right] \\\\ &=\mathbf{E}\left[X^{2}\right]-2 \mathbf{E}[X \mathbf{E}[X]]+(\mathbf{E}[X])^{2} \\\\ &=\mathbf{E}\left[X^{2}\right]-(\mathbf{E}[X])^{2} \end{aligned}\\\\
$$
To obtain the penultimate line, we used the linearity of expectations. To obtain the last
line we used the [Lemma](#Lemma) to simplify  $\mathbf{E}[X \mathbf{E}[X]]=\mathbf{E}[X] \cdot \mathbf{E}[X]$.

{{< notice note >}}

**Definition**: A function $f$ : $\mathbf{R} \rightarrow \mathbf{R}$ is said to be convex if, for any $x_1, x_2$ and $0\leq\lambda \leq 1$.
$$
f\left(\lambda x_{1}+(1-\lambda) x_{2}\right) \leq \lambda f\left(x_{1}\right)+(1-\lambda) f\left(x_{2}\right) .
$$
Visually, a convex function f has the property that, if you connect two points on the graph of the function by a straight line, this line lies on or above the graph of the function.

{{< /notice >}}

{{< notice info >}}

**Lemma**: If $f$ is a twice differentiable function, then $f$ is convex if and only if $f^{\prime \prime}(x) \geq 0$

{{< /notice >}}

{{< notice info >}}

**Theorem | Jensen's Inequality**: If $f$ is a convex function, then,
$$
\mathbf{E}[f(X)] \geq f(\mathbf{E}[X])
$$
**Proof**: We prove the theorem assuming that f has a Taylor expansion. Let $\mu=\mathbf{E}[X]$. By Taylor’s theorem there is a value $c$ such that
$$
\begin{aligned} \\\\
f(x) &=f(\mu)+f^{\prime}(\mu)(x-\mu)+\frac{f^{\prime \prime}(c)(x-\mu)^{2}}{2} \\\\
& \geq f(\mu)+f^{\prime}(\mu)(x-\mu) \\\\
\end{aligned}
$$
since $f^{\prime \prime}(c)>0$ by convexity. Taking expectations of both sides and applying linearity of expectations yields the result:
$$
\begin{aligned} \\\\
\mathbf{E}[f(X)] & \geq \mathbf{E}\left[f(\mu)+f^{\prime}(\mu)(X-\mu)\right] \\\\
&=\mathbf{E}[f(\mu)]+f^{\prime}(\mu)(\mathbf{E}[X]-\mu) \\\\
&=f(\mu)=f(\mathbf{E}[X]) \\\\
\end{aligned}
$$
{{< /notice >}}



