---
title: 微积分概述和常用公式表
description: 微积分的核心概念,以及常用的导数、积分和级数公式表。
publishDate: 2026-11-01
category: 数学
---

## 微积分在讲什么

微积分研究"变化"。它有两个核心问题:一个量变得有多快,以及很多小变化加起来是多少。

前一个问题的答案是导数,后一个是积分。微积分基本定理把两者连在一起:求积分,本质上是求导数的逆运算。

## 极限

导数和积分都建立在极限上。$\lim_{x \to a} f(x) = L$,意思是 $x$ 越靠近 $a$,$f(x)$ 就越靠近 $L$。

两个常用的极限:

- $\lim_{x \to 0} \frac{\sin(x)}{x} = 1$
- $\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^{n} = e$

## 导数

函数在一点的导数,就是它在这一点的瞬时变化率,也是图像在这一点的切线斜率:

$$
f'(x) = \lim_{h \to 0} \frac{[f(x+h) - f(x)]}{h}
$$

## 积分

定积分表示曲线下方的面积,是把无数个细窄的长条加起来:

$$
\int_{a}^{b} f(x)\,dx
$$

不定积分是求"哪个函数的导数等于 $f$"。结果后面要加常数 $C$,因为常数的导数是 $0$。

## 微积分基本定理

如果 $F'(x) = f(x)$,那么

$$
\int_{a}^{b} f(x)\,dx = F(b) - F(a)
$$

## 常用公式表

### 一、代数与三角

**乘法与因式分解**

- $(a \pm b)^{2} = a^{2} \pm 2ab + b^{2}$
- $a^{2} - b^{2} = (a - b)(a + b)$
- $a^{3} \pm b^{3} = (a \pm b)(a^{2} \mp ab + b^{2})$
- 二项式定理:$(a + b)^{n} = a^{n} + n \cdot a^{n-1}b + \frac{n(n-1)}{2!} \cdot a^{n-2}b^{2} + \cdots + b^{n}$
- 一元二次方程 $ax^{2} + bx + c = 0$ 的解:$x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}$

**指数与对数**

- $a^{x+y} = a^{x} \cdot a^{y}$,$(a^{x})^{y} = a^{xy}$
- $\log_{a}(xy) = \log_{a} x + \log_{a} y$
- $\log_{a}\left(\frac{x}{y}\right) = \log_{a} x - \log_{a} y$
- $\log_{a}(x^{r}) = r \cdot \log_{a} x$
- $\log_{a} x = \frac{\ln x}{\ln a}$

**三角恒等式**

- $\sin^{2}x + \cos^{2}x = 1$
- $1 + \tan^{2}x = \sec^{2}x$,$1 + \cot^{2}x = \csc^{2}x$
- $\sin 2x = 2 \sin x \cos x$
- $\cos 2x = \cos^{2}x - \sin^{2}x = 2\cos^{2}x - 1 = 1 - 2\sin^{2}x$
- $\sin(x \pm y) = \sin x \cos y \pm \cos x \sin y$
- $\cos(x \pm y) = \cos x \cos y \mp \sin x \sin y$
- $\sin^{2}x = \frac{1 - \cos 2x}{2}$,$\cos^{2}x = \frac{1 + \cos 2x}{2}$

**常见角的值**

| 角 | $0$ | $\pi/6$ | $\pi/4$ | $\pi/3$ | $\pi/2$ |
| --- | --- | --- | --- | --- | --- |
| $\sin$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ |
| $\cos$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ |
| $\tan$ | $0$ | $\frac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | 无定义 |

### 二、极限

- $\lim_{x \to 0} \frac{\sin x}{x} = 1$
- $\lim_{x \to 0} \frac{1 - \cos x}{x} = 0$
- $\lim_{x \to 0} \frac{e^{x} - 1}{x} = 1$
- $\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1$
- $\lim_{x \to 0} (1 + x)^{1/x} = e$
- $\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^{x} = e$
- 洛必达法则:如果 $\frac{f}{g}$ 在极限处是 $\frac{0}{0}$ 或 $\frac{\infty}{\infty}$,则 $\lim \frac{f}{g} = \lim \frac{f'}{g'}$

### 三、导数

**基本函数**

| 函数 | 导数 |
| --- | --- |
| $C$ | $0$ |
| $x^{n}$ | $n \cdot x^{n-1}$ |
| $e^{x}$ | $e^{x}$ |
| $a^{x}$ | $a^{x} \cdot \ln a$ |
| $\ln x$ | $\frac{1}{x}$ |
| $\log_{a} x$ | $\frac{1}{x \cdot \ln a}$ |

**三角函数**

| 函数 | 导数 |
| --- | --- |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^{2}x$ |
| $\cot x$ | $-\csc^{2}x$ |
| $\sec x$ | $\sec x \cdot \tan x$ |
| $\csc x$ | $-\csc x \cdot \cot x$ |

**反三角函数**

| 函数 | 导数 |
| --- | --- |
| $\arcsin x$ | $\frac{1}{\sqrt{1-x^{2}}}$ |
| $\arccos x$ | $-\frac{1}{\sqrt{1-x^{2}}}$ |
| $\arctan x$ | $\frac{1}{1+x^{2}}$ |
| $\operatorname{arccot} x$ | $-\frac{1}{1+x^{2}}$ |

**双曲函数**

| 函数 | 导数 |
| --- | --- |
| $\sinh x$ | $\cosh x$ |
| $\cosh x$ | $\sinh x$ |
| $\tanh x$ | $\operatorname{sech}^{2}x$ |

**求导法则**

- 加法:$(f + g)' = f' + g'$
- 常数倍:$(cf)' = c \cdot f'$
- 乘法:$(fg)' = f'g + fg'$
- 除法:$\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^{2}}$
- 链式法则:$[f(g(x))]' = f'(g(x)) \cdot g'(x)$
- 反函数:$(f^{-1})'(y) = \frac{1}{f'(x)}$,其中 $y = f(x)$

### 四、积分

下面每一行结尾都省略了 $+ C$。

**基本函数**

| 函数 | 积分 |
| --- | --- |
| $x^{n}$ ($n \neq -1$) | $\frac{x^{n+1}}{n+1}$ |
| $\frac{1}{x}$ | $\ln\lvert x\rvert$ |
| $e^{x}$ | $e^{x}$ |
| $a^{x}$ | $\frac{a^{x}}{\ln a}$ |
| $\ln x$ | $x \ln x - x$ |

**三角函数**

| 函数 | 积分 |
| --- | --- |
| $\sin x$ | $-\cos x$ |
| $\cos x$ | $\sin x$ |
| $\tan x$ | $\ln\lvert \sec x\rvert$ |
| $\cot x$ | $\ln\lvert \sin x\rvert$ |
| $\sec x$ | $\ln\lvert \sec x + \tan x\rvert$ |
| $\csc x$ | $-\ln\lvert \csc x + \cot x\rvert$ |
| $\sec^{2}x$ | $\tan x$ |
| $\csc^{2}x$ | $-\cot x$ |
| $\sec x \tan x$ | $\sec x$ |
| $\csc x \cot x$ | $-\csc x$ |

**含根号与分式**

| 函数 | 积分 |
| --- | --- |
| $\frac{1}{x^{2} + a^{2}}$ | $\frac{1}{a} \cdot \arctan\left(\frac{x}{a}\right)$ |
| $\frac{1}{\sqrt{a^{2} - x^{2}}}$ | $\arcsin\left(\frac{x}{a}\right)$ |
| $\frac{1}{x^{2} - a^{2}}$ | $\frac{1}{2a} \cdot \ln\lvert\frac{x - a}{x + a}\rvert$ |
| $\frac{1}{\sqrt{x^{2} + a^{2}}}$ | $\ln\left(x + \sqrt{x^{2} + a^{2}}\right)$ |
| $\frac{1}{\sqrt{x^{2} - a^{2}}}$ | $\ln\lvert x + \sqrt{x^{2} - a^{2}}\rvert$ |

**双曲函数**

| 函数 | 积分 |
| --- | --- |
| $\sinh x$ | $\cosh x$ |
| $\cosh x$ | $\sinh x$ |

**积分方法**

- 换元法:$\int f(g(x)) \cdot g'(x)\,dx = \int f(u)\,du$,$u = g(x)$
- 分部积分:$\int u\,dv = uv - \int v\,du$
- 微积分基本定理:$\int_{a}^{b} f(x)\,dx = F(b) - F(a)$,$F' = f$

### 五、级数与泰勒展开

**常用级数**

- 等比级数:$1 + r + r^{2} + \cdots = \frac{1}{1 - r}$,$\lvert r\rvert \lt 1$
- 调和级数 $\sum \frac{1}{n}$ 发散,p 级数 $\sum \frac{1}{n^{p}}$ 在 $p \gt 1$ 时收敛

**麦克劳林展开**

| 函数 | 展开式 | 成立范围 |
| --- | --- | --- |
| $e^{x}$ | $1 + x + \frac{x^{2}}{2!} + \frac{x^{3}}{3!} + \cdots$ | 所有 $x$ |
| $\sin x$ | $x - \frac{x^{3}}{3!} + \frac{x^{5}}{5!} - \cdots$ | 所有 $x$ |
| $\cos x$ | $1 - \frac{x^{2}}{2!} + \frac{x^{4}}{4!} - \cdots$ | 所有 $x$ |
| $\ln(1 + x)$ | $x - \frac{x^{2}}{2} + \frac{x^{3}}{3} - \cdots$ | $-1 \lt x \leq 1$ |
| $\frac{1}{1 - x}$ | $1 + x + x^{2} + x^{3} + \cdots$ | $\lvert x\rvert \lt 1$ |
| $\arctan x$ | $x - \frac{x^{3}}{3} + \frac{x^{5}}{5} - \cdots$ | $\lvert x\rvert \leq 1$ |

泰勒公式:$f(x) = \sum \frac{f^{(n)}(a)}{n!} \cdot (x - a)^{n}$

## 最后

公式记得住不难,难的是看到题知道该用哪个。多做几道题,比反复背这张表有用。
