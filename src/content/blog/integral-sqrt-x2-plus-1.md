---
title: 一题多解:求 ∫√(x²+1) dx
description: 用分部积分、三角换元、双曲换元和欧拉换元四种方法求 ∫√(x²+1) dx,并对照我的微积分笔记。
publishDate: 2026-11-11
category: 微积分
tags: [数学, 例题, 积分]
---

求

$$
I=\int\sqrt{x^2+1}\,dx
$$

答案是

$$
I=\frac{x}{2}\sqrt{x^2+1}+\frac{1}{2}\ln\left(x+\sqrt{x^2+1}\right)+C
$$

因为 $x+\sqrt{x^2+1}>0$,对数里的绝对值可以去掉。

下面四种方法都能得到这个结果。用到的公式如果我的[微积分笔记](/blog/calculus-handwritten-notes/)里有,会标出来。

## 方法一:分部积分,再解出 $I$

笔记里分部积分法写的是

$$
\int u\,dv=uv-\int v\,du
$$

还有一个模板:

$u=$  $dv=$

$du=$  $v=$

令 $u=\sqrt{x^2+1}$,$dv=dx$

$du=\dfrac{x}{\sqrt{x^2+1}}\,dx$  $v=x$

$$
I=x\sqrt{x^2+1}-\int\frac{x^2}{\sqrt{x^2+1}}\,dx
$$

把分子写成 $x^2=(x^2+1)-1$(笔记里积分策略第 4 步的"将被积函数变形"):

$$
\int\frac{x^2}{\sqrt{x^2+1}}\,dx=\int\sqrt{x^2+1}\,dx-\int\frac{dx}{\sqrt{x^2+1}}=I-\int\frac{dx}{\sqrt{x^2+1}}
$$

所以

$$
I=x\sqrt{x^2+1}-I+\int\frac{dx}{\sqrt{x^2+1}}
$$

最后这个积分在笔记的补充积分里:

$$
\int\frac{dx}{\sqrt{x^2\pm a^2}}=\ln\left\lvert x+\sqrt{x^2\pm a^2}\right\rvert+C
$$

取 $a=1$,移项:

$$
2I=x\sqrt{x^2+1}+\ln\left(x+\sqrt{x^2+1}\right)
$$

$$
I=\frac{x}{2}\sqrt{x^2+1}+\frac{1}{2}\ln\left(x+\sqrt{x^2+1}\right)+C
$$

右边又出现了 $I$,这时不要接着积,把它移到左边解出来就行。

## 方法二:三角换元 $x=\tan t$

笔记的积分策略里写:"如果出现 $\sqrt{x^2\pm a^2}$ 等使用上述补充积分换元"。这里直接用三角换元。

令 $x=\tan t$,$-\dfrac{\pi}{2}<t<\dfrac{\pi}{2}$

则 $dx=\sec^2t\,dt$,$\sqrt{x^2+1}=\sqrt{\tan^2t+1}=\sec t$(这个区间里 $\sec t>0$)

$$
I=\int\sec t\cdot\sec^2t\,dt=\int\sec^3t\,dt
$$

用分部积分。令 $u=\sec t$,$dv=\sec^2t\,dt$

$du=\sec t\tan t\,dt$  $v=\tan t$

这里用到笔记里的 $\dfrac{d}{dx}(\sec x)=\sec x\tan x$ 和 $\displaystyle\int\sec^2x\,dx=\tan x+C$。

$$
\int\sec^3t\,dt=\sec t\tan t-\int\sec t\tan^2t\,dt
$$

$\tan^2t=\sec^2t-1$,所以

$$
\int\sec^3t\,dt=\sec t\tan t-\int\sec^3t\,dt+\int\sec t\,dt
$$

又出现了原来的积分,和方法一一样移项。$\displaystyle\int\sec t\,dt=\ln\lvert\sec t+\tan t\rvert+C$ 笔记里没有,要单独记。

$$
\int\sec^3t\,dt=\frac{1}{2}\left(\sec t\tan t+\ln\lvert\sec t+\tan t\rvert\right)+C
$$

换回 $x$:$\tan t=x$,$\sec t=\sqrt{x^2+1}$

$$
I=\frac{x}{2}\sqrt{x^2+1}+\frac{1}{2}\ln\left(x+\sqrt{x^2+1}\right)+C
$$

## 方法三:双曲换元 $x=\sinh t$

双曲函数笔记里没有,先列要用的三条:

$$
\cosh^2t-\sinh^2t=1\qquad \frac{d}{dt}\sinh t=\cosh t\qquad \cosh^2t=\frac{1+\cosh 2t}{2}
$$

令 $x=\sinh t$

则 $dx=\cosh t\,dt$,$\sqrt{x^2+1}=\sqrt{\sinh^2t+1}=\cosh t$

$$
I=\int\cosh^2t\,dt=\int\frac{1+\cosh 2t}{2}\,dt=\frac{t}{2}+\frac{\sinh 2t}{4}+C
$$

$\sinh 2t=2\sinh t\cosh t$,所以

$$
I=\frac{t}{2}+\frac{1}{2}\sinh t\cosh t+C
$$

换回 $x$:$\sinh t=x$,$\cosh t=\sqrt{x^2+1}$,$t=\sinh^{-1}x=\ln\left(x+\sqrt{x^2+1}\right)$

$$
I=\frac{x}{2}\sqrt{x^2+1}+\frac{1}{2}\ln\left(x+\sqrt{x^2+1}\right)+C
$$

## 方法四:欧拉换元 $\sqrt{x^2+1}=t-x$

令 $\sqrt{x^2+1}=t-x$,也就是 $t=x+\sqrt{x^2+1}$,$t>0$

两边平方

$$
x^2+1=t^2-2tx+x^2
$$

$x^2$ 消掉了,解出

$$
x=\frac{t^2-1}{2t}
$$

$$
dx=\frac{t^2+1}{2t^2}\,dt
$$

$$
\sqrt{x^2+1}=t-x=t-\frac{t^2-1}{2t}=\frac{t^2+1}{2t}
$$

代入:

$$
I=\int\frac{t^2+1}{2t}\cdot\frac{t^2+1}{2t^2}\,dt=\int\frac{(t^2+1)^2}{4t^3}\,dt
$$

根号没了,变成了有理函数的积分。展开分子再逐项除:

$$
I=\frac{1}{4}\int\left(t+\frac{2}{t}+\frac{1}{t^3}\right)dt
$$

用笔记里的 $\displaystyle\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\ (n\ne-1)$ 和 $\displaystyle\int\frac{1}{x}\,dx=\ln\lvert x\rvert+C$:

$$
I=\frac{t^2}{8}+\frac{1}{2}\ln t-\frac{1}{8t^2}+C
$$

换回 $x$。由 $t-\dfrac{1}{t}=2x$,$t+\dfrac{1}{t}=2\sqrt{x^2+1}$:

$$
\frac{t^2}{8}-\frac{1}{8t^2}=\frac{1}{8}\left(t-\frac{1}{t}\right)\left(t+\frac{1}{t}\right)=\frac{1}{8}\cdot 2x\cdot 2\sqrt{x^2+1}=\frac{x}{2}\sqrt{x^2+1}
$$

所以

$$
I=\frac{x}{2}\sqrt{x^2+1}+\frac{1}{2}\ln\left(x+\sqrt{x^2+1}\right)+C
$$

## 验算

对答案求导:

$$
\frac{d}{dx}\left[\frac{x}{2}\sqrt{x^2+1}\right]=\frac{1}{2}\sqrt{x^2+1}+\frac{x^2}{2\sqrt{x^2+1}}
$$

$$
\frac{d}{dx}\left[\frac{1}{2}\ln\left(x+\sqrt{x^2+1}\right)\right]=\frac{1}{2\sqrt{x^2+1}}
$$

相加:

$$
\frac{1}{2}\sqrt{x^2+1}+\frac{x^2+1}{2\sqrt{x^2+1}}=\frac{1}{2}\sqrt{x^2+1}+\frac{1}{2}\sqrt{x^2+1}=\sqrt{x^2+1}
$$

## 四种方法怎么选

| 方法 | 需要记住的东西 | 什么时候顺手 |
| --- | --- | --- |
| 分部积分 + 解出 $I$ | $\int\frac{dx}{\sqrt{x^2+1}}$(笔记的补充积分里有) | 最短。记得这条补充积分就先用它 |
| 三角换元 | $\int\sec t\,dt$ 和 $\int\sec^3t\,dt$ | 最常见的思路,$\sqrt{a^2-x^2}$、$\sqrt{x^2-a^2}$ 也能照着换 |
| 双曲换元 | 双曲函数的恒等式和导数 | 换完只剩 $\cosh^2t$,积分最简单,难在换回 $x$ |
| 欧拉换元 | 不用额外公式 | 机械,一定能化成有理函数,代价是代数多 |

方法一和方法二里都出现了"积分又绕回自己"的情况。遇到这种情况,把它当方程解,不用硬算。
