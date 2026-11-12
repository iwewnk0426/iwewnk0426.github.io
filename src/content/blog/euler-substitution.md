---
title: 欧拉换元:把根式积分变成有理函数积分
description: 欧拉换元的三种形式,各自什么时候用、怎么解出 x 和 dx,附三道完整例题。
publishDate: 2026-11-11
category: 微积分
tags: [数学, 方法, 例题, 积分]
---

在[一题多解:求 ∫√(x²+1) dx](/blog/integral-sqrt-x2-plus-1/) 里,方法四用了欧拉换元 $\sqrt{x^2+1}=t-x$,换完根号就没了。这篇把欧拉换元单独讲清楚。

## 它能做什么

被积函数如果只含 $x$ 和 $\sqrt{ax^2+bx+c}$,并且两者之间只有加减乘除,记作

$$
\int R\left(x,\sqrt{ax^2+bx+c}\right)dx
$$

欧拉换元就是选一个新变量 $t$,让 $x$、$dx$ 和 $\sqrt{ax^2+bx+c}$ 都能写成 $t$ 的有理式。代进去以后,整个积分变成有理函数的积分,接下来可以用长除法和部分分式法处理(见[微积分笔记](/blog/calculus-handwritten-notes/)里的有理函数积分和[多项式长除法](/blog/long-division/))。

关键在于:设好之后两边平方,$x^2$ 项要么消掉,要么能约掉一个因子 $x$ 或 $(x-\alpha)$,剩下关于 $x$ 的一次方程。一次方程解出来的 $x$ 必然是 $t$ 的有理式。

一共有三种形式。

## 第一种:a > 0

设

$$
\sqrt{ax^2+bx+c}=t-\sqrt{a}\,x
$$

两边平方:

$$
ax^2+bx+c=t^2-2\sqrt{a}\,tx+ax^2
$$

$ax^2$ 两边消掉,剩下 $x$ 的一次方程:

$$
x=\frac{t^2-c}{b+2\sqrt{a}\,t}
$$

$x$ 是 $t$ 的有理式,所以 $dx$ 也是;根式等于 $t-\sqrt{a}\,x$,也是 $t$ 的有理式。

设成 $\sqrt{ax^2+bx+c}=t+\sqrt{a}\,x$ 也可以,做法一样。

## 第二种:c > 0

设

$$
\sqrt{ax^2+bx+c}=xt+\sqrt{c}
$$

两边平方:

$$
ax^2+bx+c=x^2t^2+2\sqrt{c}\,xt+c
$$

$c$ 两边消掉,每一项都含 $x$,两边除以 $x$:

$$
ax+b=xt^2+2\sqrt{c}\,t
$$

$$
x=\frac{2\sqrt{c}\,t-b}{a-t^2}
$$

设成 $\sqrt{ax^2+bx+c}=xt-\sqrt{c}$ 也可以。

## 第三种:有实根

如果 $ax^2+bx+c$ 有实根 $\alpha$、$\beta$,也就是 $ax^2+bx+c=a(x-\alpha)(x-\beta)$,设

$$
\sqrt{ax^2+bx+c}=t(x-\alpha)
$$

两边平方:

$$
a(x-\alpha)(x-\beta)=t^2(x-\alpha)^2
$$

两边除以 $x-\alpha$:

$$
a(x-\beta)=t^2(x-\alpha)
$$

$$
x=\frac{a\beta-\alpha t^2}{a-t^2}
$$

## 怎么选

- $a>0$:用第一种。
- $c>0$:可以用第二种。被积函数里有单独的 $x$ 做分母时,第二种往往更顺,例 2 就是这样。
- 二次式有实根:用第三种。

$a<0$ 且没有实根时,$ax^2+bx+c$ 处处小于 $0$,根号没有意义。所以第一种和第三种合起来已经覆盖了所有情况,第二种是备用。

## 例 1:用第一种推出补充积分

笔记的积分策略里有一条补充积分:

$$
\int\frac{dx}{\sqrt{x^2\pm a^2}}=\ln\left\lvert x+\sqrt{x^2\pm a^2}\right\rvert+C
$$

用欧拉换元可以直接推出来。这里 $x^2$ 的系数是 $1>0$,用第一种。

设

$$
\sqrt{x^2\pm a^2}=t-x
$$

平方:

$$
x^2\pm a^2=t^2-2tx+x^2
$$

$$
x=\frac{t^2\mp a^2}{2t}
$$

求 $dx$:

$$
dx=\frac{2t\cdot 2t-2(t^2\mp a^2)}{4t^2}\,dt=\frac{t^2\pm a^2}{2t^2}\,dt
$$

根式:

$$
\sqrt{x^2\pm a^2}=t-x=t-\frac{t^2\mp a^2}{2t}=\frac{t^2\pm a^2}{2t}
$$

两个式子一除:

$$
\frac{dx}{\sqrt{x^2\pm a^2}}=\frac{t^2\pm a^2}{2t^2}\cdot\frac{2t}{t^2\pm a^2}\,dt=\frac{dt}{t}
$$

所以

$$
\int\frac{dx}{\sqrt{x^2\pm a^2}}=\int\frac{dt}{t}=\ln\lvert t\rvert+C
$$

换回 $x$:$t=x+\sqrt{x^2\pm a^2}$

$$
\int\frac{dx}{\sqrt{x^2\pm a^2}}=\ln\left\lvert x+\sqrt{x^2\pm a^2}\right\rvert+C
$$

和笔记里的一样。

## 例 2:用第二种

求

$$
\int\frac{dx}{x\sqrt{x^2+x+1}}
$$

这里 $c=1>0$,用第二种。设

$$
\sqrt{x^2+x+1}=xt+1
$$

也就是 $t=\dfrac{\sqrt{x^2+x+1}-1}{x}$。

平方:

$$
x^2+x+1=x^2t^2+2xt+1
$$

消掉 $1$,两边除以 $x$:

$$
x+1=xt^2+2t
$$

$$
x=\frac{2t-1}{1-t^2}
$$

根式:

$$
\sqrt{x^2+x+1}=xt+1=\frac{(2t-1)t+(1-t^2)}{1-t^2}=\frac{t^2-t+1}{1-t^2}
$$

求 $dx$:

$$
dx=\frac{2(1-t^2)-(2t-1)(-2t)}{(1-t^2)^2}\,dt=\frac{2(t^2-t+1)}{(1-t^2)^2}\,dt
$$

代入:

$$
\frac{dx}{x\sqrt{x^2+x+1}}=\frac{2(t^2-t+1)}{(1-t^2)^2}\cdot\frac{1-t^2}{2t-1}\cdot\frac{1-t^2}{t^2-t+1}\,dt=\frac{2}{2t-1}\,dt
$$

$(1-t^2)^2$ 和 $t^2-t+1$ 全部约掉。

$$
\int\frac{2}{2t-1}\,dt=\ln\lvert 2t-1\rvert+C
$$

换回 $x$:

$$
2t-1=\frac{2\sqrt{x^2+x+1}-2}{x}-1=\frac{2\sqrt{x^2+x+1}-x-2}{x}
$$

$$
\int\frac{dx}{x\sqrt{x^2+x+1}}=\ln\left\lvert\frac{2\sqrt{x^2+x+1}-x-2}{x}\right\rvert+C
$$

这题 $a=1>0$,第一种也能用,但分母里的 $x$ 会留下来,要多做一步部分分式。第二种设出来的 $x$ 刚好和分母配合,约得最干净。

## 例 3:用第三种

求

$$
\int\frac{dx}{\sqrt{x^2-3x+2}}
$$

$x^2-3x+2=(x-1)(x-2)$,有实根 $1$ 和 $2$,用第三种。取 $\alpha=1$,设

$$
\sqrt{x^2-3x+2}=t(x-1)
$$

平方:

$$
(x-1)(x-2)=t^2(x-1)^2
$$

两边除以 $x-1$:

$$
x-2=t^2(x-1)
$$

$$
x=\frac{2-t^2}{1-t^2}=1+\frac{1}{1-t^2}
$$

所以 $x-1=\dfrac{1}{1-t^2}$,根式:

$$
\sqrt{x^2-3x+2}=t(x-1)=\frac{t}{1-t^2}
$$

求 $dx$:

$$
dx=\frac{2t}{(1-t^2)^2}\,dt
$$

代入:

$$
\frac{dx}{\sqrt{x^2-3x+2}}=\frac{2t}{(1-t^2)^2}\cdot\frac{1-t^2}{t}\,dt=\frac{2}{1-t^2}\,dt
$$

这一步可以用笔记里的公式

$$
\int\frac{dx}{x^2-a^2}=\frac{1}{2a}\ln\left\lvert\frac{x-a}{x+a}\right\rvert+C
$$

取 $a=1$:

$$
\int\frac{2}{1-t^2}\,dt=-2\int\frac{dt}{t^2-1}=-\ln\left\lvert\frac{t-1}{t+1}\right\rvert+C=\ln\left\lvert\frac{1+t}{1-t}\right\rvert+C
$$

换回 $x$。$t=\dfrac{\sqrt{x^2-3x+2}}{x-1}$,记 $s=\sqrt{x^2-3x+2}$:

$$
\frac{1+t}{1-t}=\frac{x-1+s}{x-1-s}
$$

分子分母同乘 $x-1+s$。分母变成 $(x-1)^2-s^2=(x-1)^2-(x-1)(x-2)=x-1$;分子 $(x-1+s)^2=(x-1)(2x-3+2s)$。所以

$$
\frac{1+t}{1-t}=2x-3+2s
$$

$$
\int\frac{dx}{\sqrt{x^2-3x+2}}=\ln\left\lvert 2x-3+2\sqrt{x^2-3x+2}\right\rvert+C
$$

## 什么时候三角换元更快

欧拉换元的好处是机械:三种情况选一种,一定能变成有理函数。代价是代数多,换回 $x$ 也麻烦。

根式是 $\sqrt{a^2-x^2}$、$\sqrt{x^2+a^2}$、$\sqrt{x^2-a^2}$ 这种纯平方形式,而且被积函数简单时,三角换元通常更快,比如 $\int\sqrt{a^2-x^2}\,dx$ 用 $x=a\sin t$ 几步就完。根式里有一次项,或者根式和 $x$ 的其他因式混在一起,配方后三角换元也难做时,再用欧拉换元。

## 验算

三道例题的结果对 $x$ 求导,都能化回原来的被积函数:

$$
\frac{d}{dx}\ln\left\lvert x+\sqrt{x^2\pm a^2}\right\rvert=\frac{1}{\sqrt{x^2\pm a^2}}
$$

$$
\frac{d}{dx}\ln\left\lvert\frac{2\sqrt{x^2+x+1}-x-2}{x}\right\rvert=\frac{1}{x\sqrt{x^2+x+1}}
$$

$$
\frac{d}{dx}\ln\left\lvert 2x-3+2\sqrt{x^2-3x+2}\right\rvert=\frac{1}{\sqrt{x^2-3x+2}}
$$
