---
title: Centers of Gravity Using Multiple Integrals
date: 2021-09-05T02:14:49+08:00
lastmod: 2021-09-05T02:14:49+08:00
author: 安田俊樹
cover: https://cdn.jsdelivr.net/gh/AShao0425/CDN/🖼%Images94309224_p0.jpg
avatar: /avatar/Avatar3.jpg
images:
  - https://cdn.jsdelivr.net/gh/AShao0425/CDN/🖼%Images94309224_p0.jpg
categories:
  - Calculus
tags:
  - Tutorial
  - Mathematics
  - Gravity
mathjax: true
---
*In this section we will show how double and triple integrals can be used to find the mass and center of gravity of inhomogeneous laminas and three-dimensional solids.*
<!--more-->

## Density and Mass of an Inhomogeneous Lamina
An idealized flat object that is thin enough to be viewed as a two-dimensional plane region is called a ***lamina*** (Figure 1.1). A lamina is called ***homogeneous*** if its composition is uniform throughout and ***inhomogeneous*** otherwise. The ***density*** of a homogeneous lamina was defined to be its mass per unit area. Thus, the density $\delta$ of a homogeneous lamina of mass $M$ and area $A$ is given by $\delta=M/A$

{{< img src="/post1/img1.png" title="Figure 1.1" caption="Figure 1.1" width="70%">}}

For an inhomogeneous lamina the composition may vary from point to point, and hence an appropriate definition of “density” must reflect this. To motivate such a definition, suppose that the lamina is placed in an $xy$-plane. The density at a point $(x,y)$ can be specified suppose that lamina is placed in an $xy$-plane. The density at a point $(x,y)$ can be specified by a function $\delta (x,y)$, called the ***density function***, which can be interpreted as follows: Construct a small rectangle centered at $(x,y)$ and let $\Delta M$ and $\Delta A$ by the mass and area of the portion of the lamina enclosed by this rectangle (Figure 1.2). If the ratio $\Delta M / \Delta A$ approaches a limiting value as the dimensions (and hence the area) of the rectangle approach zero, then this limit is considered to be the density of the lamina at $(x,y)$. Symbolically,
$$
\delta(x, y)=\lim _{\Delta A \rightarrow 0} \frac{\Delta M}{\Delta A}
$$
From this relationship we obtain the approximation
$$
\Delta M \approx \delta(x, y) \Delta A
$$
which relates the mass and area of a small rectangular portion of the lamina centered at $(x, y)$. It is assumed that as the dimensions of the rectangle tend to zero, the error in this approximation also tends to zero. 

{{< img src="/post1/img2.png" title="Figure 1.2" caption="Figure 1.2" width="70%">}}

The following result shows how to find the mass of a lamina from its density function.

{{<notice note>}}
If a lamina with a continuous density function $\delta(x, y)$ occupies a region $R$ in the $xy$-plane, then its total mass $M$ is given by
$$
M=\iint_{R} \delta(x, y) d A
$$
{{< /notice >}}

{{< img src="/post1/imga.png" title="Figure 1.3" caption="Figure 1.3" width="70%">}}

This formula can be motivated by a familiar limiting process that can be outlined as follows: Imagine the lamina to be subdivided into rectangular pieces using lines parallel to the coordinate axes and excluding from consideration any nonrectangular parts at the boundary (Figure 1.3). Assume that there are $n$ such rectangular pieces, and suppose that the $k$th piece has area $\Delta A_k$. If we let $\left(x_{k}^{*}, y_{k}^{*}\right)$ denote the center of the kth piece, the mass $\Delta_k$ of this piece can be approximated by
$$
\Delta M_{k} \approx \delta\left(x_{k}^{*}, y_{k}^{*}\right) \Delta A_{k}
$$
If now increase $n$ in such a way that the dimensions of the rectangles tend to zero, then it is plausible that the errors in our approximations will approach zero, so
$$
M=\lim _{n \rightarrow+\infty} \sum_{k=1}^{n} \delta\left(x_{k}^{*}, y_{k}^{*}\right) \Delta A_{k}=\iint_{R} \delta(x, y) d A
$$

### Example 1
**A triangular lamina with vertices $(0,0)$,$(0,1)$, and $(1,0)$ has desntiy function $\delta (x,y)=xy$. Find it's total mass**

#### Solution
Referrig to figure 1.4, the mass $M$ of the lamina is

{{< img src="/post1/img3.png" title="Figure 1.4" caption="Figure 1.4" width="70%">}}

$$
M =\iint_{R} \delta(x, y) d A=\iint_{R} x y d A=\int_{0}^{1} \int_{0}^{-x+1} x y d y d x
$$

$$
=\int_{0}^{1}\left[\frac{1}{2} x y^{2}\right]_{y=0}^{-x+1} d x=\int_{0}^{1}\left[\frac{1}{2} x^{3}-x^{2}+\frac{1}{2} x\right] d x=\frac{1}{24} \text { (unit of mass) }
$$

## Center of Gravity of an Inhomogeneous Lamina
Recall that the ***center of gravity*** of a lamina occupying region $R$ in the horizontal $xy$-plane is the point  $(\bar{x}, \bar{y})$ such that the effect of gravity on the lamina is “equivalent” to that of a single force acting at  $(\bar{x}, \bar{y})$. If  $(\bar{x}, \bar{y})$ is in $R$, then the lamina will balance horizontally on a point of support placed at $(\bar{x}, \bar{y})$. We now turn to this problem for an inhomogeneous lamina.

> **Problem** Suppose that a lamina with a continuous density function $\Delta (x,y)$ occupies a region R in a horizontal $xy$-plane. Find the coordinates $(\bar{x}, \bar{y})$ of the center of gravity

{{< img src="/post1/imgb.png" title="Figure 1.5" caption="Figure 1.5" width="70%">}}

To motivate the solution of Problem 1.2, consider what happens if we try to place the lamina in Figure 1.5 on a knife-edge running along the line $y=\bar{y}$. Since the lamina behaves as if its entire mass is concentrated at $(\bar{x}, \bar{y})$, the lamina will be in perfect balance. Similarly, the lamina will be in perfect balance if the knife-edge runs along the line $x=\bar{x}$. To find these lines of balance we begin by reviewing some results from rotations.

Recall that if a point-mass $m$ is located at the point $(x,y)$, then the moment of $m$ about $x=a$ measures the tendency of the mass to produce a rotation about the line $x=a$, and the moment of $m$ about $y=c$ measures the tendency of the mass to produce a rotation about the line $y=c$. The moments are given by the following formulas:
$$
\\left[\begin{array}{c} \\\
\\text { moment of } m \\\\
\\text { about the } \\\\
\\text { line } x=a \\\\
\\end{array}\right]=m(x-a) \\\
\\quad \text { and } \\\\
\\quad\left[\begin{array}{c} \\\
\\text { moment of } m \\\\
\\text { about the } \\\\
\\text { line } y=c \\\\
\\end{array}\right]=m(y-c) \\\
$$

If a number of point-masses are distributed throughout the $x y$-plane, the sum of their moments about $x=a$ is a measure of the tendency of the masses to produce a rotation of the plane (viewed as a weightless sheet) about the line $x=a$. If the sum of these moments is zero, the collective masses will produce no net rotational effect about the line. (Intuitively, this means that the plane would balance on a knife-edge along the line $x=a$. Similarly, if the sum of the moments of the masses about $y=c$ is zero, the plane would balance on a knife-edge along the line $y=c$.)

We are now ready to solve Problem 1.2. We imagine the lamina to be subdivided into rectangular pieces using lines parallel to the coordinate axes and excluding from consideration any nonrectangular pieces at the boundary (Figure 1.3). We assume that there are $n$ such rectangular pieces and that the $k$ th piece has area $\Delta A_{k}$ and mass $\Delta M_{k} .$ We will let $\left(x_{k}^{*}, y_{k}^{*}\right)$ be the center of the $k$ th piece, and we will assume that the entire mass of the $k$ th piece is concentrated at its center. The mass of the $k$ th piece can be approximated by

Since the lamina balances on the lines $x=\bar{x}$ and $y=\bar{y}$, the sum of the moments of the rectangular pieces about those lines should be close to zero; that is,
$$
\sum_{k=1}^{n}\left(x_{k}^{*}-\bar{x}\right) \Delta M_{k}=\sum_{k=1}^{n}\left(x_{k}^{*}-\bar{x}\right) \delta\left(x_{k}^{*}, y_{k}^{*}\right) \Delta A_{k} \approx 0 \\
$$
$$
\sum_{k=1}^{n}\left(y_{k}^{*}-\bar{y}\right) \Delta M_{k}=\sum_{k=1}^{n}\left(y_{k}^{*}-\bar{y}\right) \delta\left(x_{k}^{*}, y_{k}^{*}\right) \Delta A_{k} \approx 0 \\
$$

If we now increase $n$ in such a way that the dimensions of the rectangles tend to zero, then it is plausible that the errors in our approximations will approach zero, so that

$$
\begin{equation} \\\\
\lim _{n \rightarrow+\infty} \sum_{k=1}^{n}\left(x_{k}^{*}-\bar{x}\right) \delta\left(x_{k}^{*}, y_{k}^{*}\right) \Delta A_{k}=0
\end{equation} \\\\
$$

$$
\\lim _{n \rightarrow+\infty}
\sum_{k=1}^{n}\left(y_{k}^{*}-\bar{y}\right)
\delta\left(x_{k}^{*}, y_{k}^{*}\right)
\Delta A_{k}=0 \\
$$

from which we obtain
$$
\iint_{R}(x-\bar{x}) \delta(x, y) d A=\iint_{R} x \delta(x, y) d A-\bar{x} \iint_{R} \delta(x, y) d A=0 \\
$$
$$
\iint_{R}(y-\bar{y}) \delta(x, y) d A=\iint_{R} y \delta(x, y) d A-\bar{y} \iint_{R} \delta(x, y) d A=0
$$

{{< notice note >}}

Solving respectively for $\bar{x}$ and $\bar{y}$ gives formulas for the center of gravity of a lamina:

$$
\text { Center of Gravity }(\bar{x}, \bar{y}) \text { of a Lamina } \\
$$
$$
\iint_{R} \quad \int_{R} x \delta(x, y) d A \quad \quad \bar{y}=\frac{\iint y \delta(x, y) d A}{\iint_{R} \delta(x, y) d A}
$$

{{< /notice >}}

In both formulas the denominator is the mass $M$ of the lamina. The numerator in the formula for $\bar{x}$ is denoted by $M_{y}$ and is called the first moment of the lamina about the $y$-axis; the numerator of the formula for $\bar{y}$ is denoted by $M_{x}$ and is called the first moment of the lamina about the $x$-axis. Thus, Formulas can be expressed as

{{< notice note >}}
$$
\text { Alternative Formulas for Center of Gravity }(\bar{x}, \bar{y}) \text { of a Lamina }
$$
$$
\bar{x}=\frac{M_{y}}{M}=\frac{1}{\text { mass of } R} \iint_{R} x \delta(x, y) d A \\
\bar{y}=\frac{M_{x}}{M}=\frac{1}{\text { mass of } R} \iint_{R} y \delta(x, y) d A
$$
{{< /notice >}}

### Example 2
**Find the center of gravity of the triangular lamina with vertices $(0,0)$, $(0,1)$, and $(1,0)$ and density function $\delta(x, y)=x y$.**

#### Solution
In Example 1 we found the mass of the lamina to be
$$
M=\iint_{R} \delta(x, y) d A=\iint_{R} x y d A=\frac{1}{24}
$$
The moment of the lamina about the $y$-axis is
$$
M_{y} =\iint_{R} x \delta(x, y) d A=\iint_{R} x^{2} y d A=\int_{0}^{1} \int_{0}^{-x+1} x^{2} y d y d x \\
$$
$$
=\int_{0}^{1}\left[\frac{1}{2} x^{2} y^{2}\right]_{y=0}^{-x+1} d x=\int_{0}^{1}\left(\frac{1}{2} x^{4}-x^{3}+\frac{1}{2} x^{2}\right) d x=\frac{1}{60}
$$
and the moment about the $x$-axis is
$$
M_{x} =\iint_{R} y \delta(x, y) d A=\iint_{R} x y^{2} d A=\int_{0}^{1} \int_{0}^{-x+1} x y^{2} d y d x \\
$$
$$
=\int_{0}^{1}\left[\frac{1}{3} x y^{3}\right]_{y=0}^{-x+1} d x=\int_{0}^{1}\left(-\frac{1}{3} x^{4}+x^{3}-x^{2}+\frac{1}{3} x\right) d x=\frac{1}{60}
$$
From above
$$
\bar{x}=\frac{M_{y}}{M}=\frac{1 / 60}{1 / 24}=\frac{2}{5}, \quad \bar{y}=\frac{M_{x}}{M}=\frac{1 / 60}{1 / 24}=\frac{2}{5}
$$
so the center of gravity is $\left(\frac{2}{5}, \frac{2}{5}\right)$

Recall that the center of gravity of a homogeneous lamina is called the ***centroid of the lamina*** or sometimes the ***centroid of the region $R$***. Because the density function $\delta$ is constant for a homogeneous lamina, the factor $\delta$ may be moved through the integral signs in $(9)$ and (10) and canceled. Thus, the centroid $(\bar{x}, \bar{y})$ is a geometric property of the region $R$ and is given by the following formulas:

{{< notice note >}}
$$
\quad \text { Centroid of a Region } R \\
$$
$$
\bar{x}=\frac{\iint_{R} x d A}{\iint_{R} d A}=\frac{1}{\operatorname{area} \text { of } R} \iint_{R} x d A \\
$$
$$
\bar{y}=\frac{\iint_{R} y d A}{\iint_{R} d A}=\frac{1}{\operatorname{area} \text { of } R} \iint_{R} y d A
$$
{{< /notice >}}

### Example 3
**Find the centroid of the semicircular region in Figure 1.7**

{{< img src="/post1/img1.png" title="Figure 1.7" caption="Figure 1.7" width="70%">}}

#### Solution
By symmetry, $\bar{x}=0$ since the $y$-axis is obviously a line of balance.
$$
\bar{y} =\frac{1}{\text { area of } R} \iint_{R} y d A=\frac{1}{\frac{1}{2} \pi a^{2}} \iint_{R} y d A \\
$$
$$
\begin{array}{l}
\text { Evaluating in } \\
\text { polarcoordinates }
\end{array} \\
$$
$$
=\frac{1}{\frac{1}{2} \pi a^{2}} \int_{0}^{\pi} \int_{0}^{a}(r \sin \theta) r d r d \theta \quad
$$
$$
=\frac{1}{\frac{1}{2} \pi a^{2}} \int_{0}^{\pi}\left[\frac{1}{3} r^{3} \sin \theta\right]_{r=0}^{a} d \theta \\
$$
$$
=\frac{1}{\frac{1}{2} \pi a^{2}}\left(\frac{1}{3} a^{3}\right) \int_{0}^{\pi} \sin \theta d \theta=\frac{1}{\frac{1}{2} \pi a^{2}}\left(\frac{2}{3} a^{3}\right)=\frac{4 a}{3 \pi}
$$
so the centroid is $\left(0, \dfrac{4 a}{3 \pi}\right)$

## Center of Gravity and Centroid of Solid
For a three-dimensional solid $G$, the formulas for moments, center of gravity, and centroid are similar to those for laminas. If $G$ is homogeneous, then its density is defined to be its mass per unit volume. Thus, if $G$ is a homogeneous solid of mass $M$ and volume $V$, then its density $\delta$ is given by $\delta=M / V $. If $G$ is inhomogeneous and is in an $x y z$-coordinate system, then its density at a general point $(x, y, z)$ is specified by a density function $\delta(x, y, z)$ whose value at a point can be viewed as a limit:
$$
\delta(x, y, z)=\lim _{\Delta V \rightarrow 0} \frac{\Delta M}{\Delta V}
$$

where $\Delta M$ and $\Delta V$ represent the mass and volume of a rectangular parallelepiped, centered at $(x, y, z)$, whose dimensions tend to zero (Figure 1.8)

{{< img src="/post1/img2.png" title="Figure 1.8" caption="Figure 1.8" width="70%">}}

Using the discussion of laminas as a model, you should be able to show that the mass $M$ of a solid with a continuous density function $\delta(x, y, z)$ is
{{< notice note >}}
$$
M=\text { mass of } G=\iiint_{G} \delta(x, y, z) d V
$$
{{< /notice >}}

The formulas for center of gravity and centroid are as follows:

{{< notice note >}}
Center of Gravity $(\bar{x}, \bar{y}, \bar{z})$ of a Solid $G$
$$
\bar{x} =\frac{1}{M} \iiint_{G} x \delta(x, y, z) d V \\
$$
$$
\bar{y} =\frac{1}{M} \iiint_{G} y \delta(x, y, z) d V \\
$$
$$
\bar{z} =\frac{1}{M} \iiint_{G} z \delta(x, y, z) d V
$$
{{< /notice >}}

{{< notice note >}}
Centroid $(\bar{x}, \bar{y}, \bar{z})$ of a Solid $G$
$$
\bar{x} =\frac{1}{V} \iiint_{G} x d V \\
$$
$$
\bar{y} =\frac{1}{V} \iiint_{G} y d V \\
$$
$$
\bar{z} =\frac{1}{V} \iiint_{G} z d V
$$
{{< /notice >}}

### Example 4
**Find the mass and the center of gravity of a cylindrical solid of height $h$ and radius $a$ (Figure $1.9$ ), assuming that the density at each point is proportional to the distance between the point and the base of the solid.**

{{< img src="/post1/img7.png" title="Figure 1.9" caption="Figure 1.9" width="70%">}}

#### Solution
Solution. Since the density is proportional to the distance $z$ from the base, the density function has the form $\delta(x, y, z)=k z$, where $k$ is some (unknown) positive constant of proportionality. From the mass of the solid is
$$
M=\iiint_{G} \delta(x, y, z) d V =\int_{-a}^{a} \int_{-\sqrt{a^{2}-x^{2}}}^{\sqrt{a^{2}-x^{2}}} \int_{0}^{h} k z d z d y d x \\
$$
$$
=k \int_{-a}^{a} \int_{-\sqrt{a^{2}-x^{2}}}^{\sqrt{a^{2}-x^{2}}} \frac{1}{2} h^{2} d y d x \\
$$
$$
=k h^{2} \int_{-a}^{a} \sqrt{a^{2}-x^{2}} d x \\
$$
$$
=\frac{1}{2} k h^{2} \pi a^{2} \\
$$
$$
\begin{array}{l}
\text { Interpret the integral as } \\
\text { the area of a semicircle. }
\end{array}
$$
Without additional information, the constant $k$ cannot be determined. However, as we will now see, the value of $k$ does not affect the center of gravity.
$$
\bar{z} =\frac{1}{M} \iiint_{G} z \delta(x, y, z) d V=\frac{1}{\frac{1}{2} k h^{2} \pi a^{2}} \iiint_{G} z \delta(x, y, z) d V \\
$$
$$
=\frac{1}{\frac{1}{2} k h^{2} \pi a^{2}} \int_{-a}^{a} \int_{-\sqrt{a^{2}-x^{2}}}^{\sqrt{a^{2}-x^{2}}} \int_{0}^{h} z(k z) d z d y d x \\
$$
$$
=\frac{k}{\frac{1}{2} k h^{2} \pi a^{2}} \int_{-a}^{a} \int_{-\sqrt{a^{2}-x^{2}}}^{\sqrt{a^{2}-x^{2}}} \frac{1}{3} h^{3} d y d x \\
$$
$$
=\frac{\frac{1}{3} k h^{3}}{\frac{1}{2} k h^{2} \pi a^{2}} \int_{-a}^{a} 2 \sqrt{a^{2}-x^{2}} d x \\
$$
$$
=\frac{\frac{1}{3} k h^{3} \pi a^{2}}{\frac{1}{2} k h^{2} \pi a^{2}}=\frac{2}{3} h
$$
Similar calculations using (16) will yield $\bar{x}=\bar{y}=0$. However, this is evident by inspection, since it follows from the symmetry of the solid and the form of its density function that the center of gravity is on the $z$-axis. Thus, the center of gravity is $\left(0,0, \frac{2}{3} h\right)$ 

### Example 5
Find the centroid of the solid $G$ bounded below by the cone $z=\sqrt{x^{2}+y^{2}}$ and above by the snhere $x^{2}+y^{2}+z^{2}=16$ and above by the sphere $x^{2}+y^{2}+z^{2}=16$.

#### Solution

{{< img src="/post1/img8.png" title="Figure 2.0" caption="Figure 2.0" width="70%">}}

The solid $G$ is sketched in Figure 2.0. In Example 3, spherical coordinates were used to find that the volume of $G$ is
$$
V=\frac{64 \pi}{3}(2-\sqrt{2})
$$

By symmetry, the centroid $(\bar{x}, \bar{y}, \bar{z})$ is on the $z$-axis, so $\bar{x}=\bar{y}=0$. In spherical coordinates, the equation of the sphere $x^{2}+y^{2}+z^{2}=16$ is $\rho=4$ and the equation of the cone, $z=\sqrt{x^{2}+y^{2}}$ is $\phi=\pi / 4$, so we have
$$
\bar{z} =\frac{1}{V} \iiint_{G} z d V=\frac{1}{V} \int_{0}^{2 \pi} \int_{0}^{\pi / 4} \int_{0}^{4}(\rho \cos \phi) \rho^{2} \sin \phi d \rho d \phi d \theta \\
$$
$$
=\frac{1}{V} \int_{0}^{2 \pi} \int_{0}^{\pi / 4}\left[\frac{\rho^{4}}{4} \cos \phi \sin \phi\right]_{\rho=0}^{4} d \phi d \theta \\
$$
$$
=\frac{64}{V} \int_{0}^{2 \pi} \int_{0}^{\pi / 4} \sin \phi \cos \phi d \phi d \theta=\frac{64}{V} \int_{0}^{2 \pi}\left[\frac{1}{2} \sin ^{2} \phi\right]_{\phi=0}^{\pi / 4} d \theta \\
$$
$$
=\frac{16}{V} \int_{0}^{2 \pi} d \theta=\frac{32 \pi}{V}=\frac{3}{2(2-\sqrt{2})}
$$
The centroid of $G$ is
$$
(\bar{x}, \bar{y}, \bar{z})=\left(0,0, \frac{3}{2(2-\sqrt{2})}\right) \approx(0,0,2.561)
$$

## Citation
- Calculus Early: TRANSCENDENTALS, by Anton Bivon Davis, 10th ed., Addison-Wesley, 2000, pp. 1071–1077. 
- All the images appeared in the article are from the internet

**All finished! You achieved it! Wish you have a good one.😊**