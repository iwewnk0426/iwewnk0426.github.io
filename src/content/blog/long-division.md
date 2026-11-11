---
title: 多项式长除法:怎么做,什么时候用
description: 把假分式拆成多项式加真分式的长除法,分步骤写清楚,附微积分笔记里的两道例题。
publishDate: 2026-11-11
category: 数学
---

我在[微积分笔记](/blog/calculus-handwritten-notes/)的部分分式法里写过一句:假分式要先用长除法。这篇把长除法单独拿出来讲。

## 它解决什么问题

有理函数 $f(x)=\dfrac{P(x)}{Q(x)}$,如果 $\deg(P)\ge\deg(Q)$,就是假分式。长除法把它拆成

$$
\frac{P(x)}{Q(x)}=S(x)+\frac{R(x)}{Q(x)},\qquad \deg(R)<\deg(Q)
$$

$S(x)$ 是商,$R(x)$ 是余式。这和 $\dfrac{17}{5}=3+\dfrac{2}{5}$ 是一回事。

积分时这样拆的好处是:$S(x)$ 是多项式,可以直接积;$\dfrac{R(x)}{Q(x)}$ 是真分式,可以接着做部分分式。如果本来就是真分式,就不用长除法。

## 步骤

1. 被除式和除式都按降幂排好。缺的次数补 $0$,比如 $x^3+x$ 写成 $x^3+0x^2+x+0$。
2. 用被除式的首项除以除式的首项,得到商的一项。
3. 用这一项乘整个除式,写在下面,再相减。
4. 把相减的结果当成新的被除式,回到第 2 步。
5. 结果的次数比除式低时停下,这时剩下的就是余式 $R(x)$。

做完验算一下:$Q(x)\cdot S(x)+R(x)$ 应该等于 $P(x)$。

下面的竖式里,下划线那一行是商的一项乘除式的结果,下划线下面是相减后剩下的部分。

## 例 1:$\dfrac{x^3+x}{x-1}$

被除式补成 $x^3+0x^2+x+0$。

$$
\begin{array}{rrrrr}
 & & x^2 & +x & +2 \\
x-1\,\big) & \overline{x^3} & \overline{+0x^2} & \overline{+x} & \overline{+0} \\
 & \underline{x^3} & \underline{-x^2} & & \\
 & & x^2 & +x & \\
 & & \underline{x^2} & \underline{-x} & \\
 & & & 2x & +0 \\
 & & & \underline{2x} & \underline{-2} \\
 & & & & 2
\end{array}
$$

逐步来看:

- $x^3\div x=x^2$。$x^2(x-1)=x^3-x^2$,相减得 $x^2+x$。
- $x^2\div x=x$。$x(x-1)=x^2-x$,相减得 $2x+0$。
- $2x\div x=2$。$2(x-1)=2x-2$,相减得 $2$。

$2$ 的次数比 $x-1$ 低,停。商 $x^2+x+2$,余式 $2$:

$$
\frac{x^3+x}{x-1}=x^2+x+2+\frac{2}{x-1}
$$

验算:$(x-1)(x^2+x+2)+2=x^3+x$。

这道题拆完就能直接积分,笔记里写的是"有时只需要这样处理就可以了":

$$
\int\frac{x^3+x}{x-1}\,dx=\frac{x^3}{3}+\frac{x^2}{2}+2x+2\ln\lvert x-1\rvert+C
$$

## 例 2:$\dfrac{x^4-2x^2+4x+1}{x^3-x^2-x+1}$

被除式补成 $x^4+0x^3-2x^2+4x+1$。

$$
\begin{array}{rrrrrr}
 & & & & x & +1 \\
x^3-x^2-x+1\,\big) & \overline{x^4} & \overline{+0x^3} & \overline{-2x^2} & \overline{+4x} & \overline{+1} \\
 & \underline{x^4} & \underline{-x^3} & \underline{-x^2} & \underline{+x} & \\
 & & x^3 & -x^2 & +3x & +1 \\
 & & \underline{x^3} & \underline{-x^2} & \underline{-x} & \underline{+1} \\
 & & & & 4x &
\end{array}
$$

- $x^4\div x^3=x$。$x(x^3-x^2-x+1)=x^4-x^3-x^2+x$,相减得 $x^3-x^2+3x+1$。
- $x^3\div x^3=1$。$1\cdot(x^3-x^2-x+1)=x^3-x^2-x+1$,相减得 $4x$。

$4x$ 是一次,除式是三次,停。

$$
\frac{x^4-2x^2+4x+1}{x^3-x^2-x+1}=x+1+\frac{4x}{x^3-x^2-x+1}
$$

验算:$(x^3-x^2-x+1)(x+1)+4x=x^4-2x^2+4x+1$。

这道题拆完还没结束。$x+1$ 可以直接积,$\dfrac{4x}{x^3-x^2-x+1}$ 还要因式分解分母,再做部分分式,过程见笔记里的情况 II。

## 容易错的地方

- 缺项不补 $0$,上下对不齐,减错位。
- 相减时只改了第一项的符号。减的是整个多项式,每一项都要变号。
- 余式次数还不低于除式就停了。
