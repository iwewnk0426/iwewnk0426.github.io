---
title: 微积分笔记:从函数、极限到导数与积分
description: 我的手写微积分笔记整理,涵盖反函数、对数、极限、连续、导数及其应用、积分及其应用、反常积分与微分方程。
publishDate: 2026-11-10
updatedDate: 2026-11-12
category: 微积分
tags: [数学, 笔记, 例题, 公式, 极限, 导数, 积分, 微分方程]
---

## 一、函数

### 求解反函数

先写出 $y=f(x)$

用 $y$ 表示 $x$

e.g. $y=x^3+2$

$$
x^3=y-2
$$

$$
x=\sqrt[3]{y-2}
$$

将 $x$ 与 $y$ 互换

e.g. $x=\sqrt[3]{y-2}$

$$
y=\sqrt[3]{x-2}
$$

$$
f(x)=x^3+2
$$

$$
f^{-1}(x)=\sqrt[3]{x-2}
$$

### 反三角函数

$$
\sin^{-1}x=y \iff \sin y=x
$$

$$
-\frac{\pi}{2}\le y\le\frac{\pi}{2}
$$

$\cos$,$\tan$ 类似。

## 二、对数与指数

### 换底公式

$$
\log_b x=\frac{\ln x}{\ln b}
$$

证明

令 $y=\log_b x$

$\therefore b^y=x$

两边取自然对数

$$
\ln(b^y)=\ln x
$$

$$
y\ln b=\ln x
$$

$$
y=\frac{\ln x}{\ln b}
$$

$$
\log_b x=\frac{\ln x}{\ln b}
$$

### 对数运算法则

$$
\log_b(b^x)=x
$$

$$
b^{\log_b x}=x
$$

$$
\log_b(xy)=\log_b x+\log_b y
$$

$$
\log_b\left(\frac{x}{y}\right)=\log_b x-\log_b y
$$

$$
\log_b(x^r)=r\log_b x
$$

$$
\ln(e^x)=x
$$

$$
e^{\ln x}=x
$$

### 幂的指数形式

$x$ 的幂可用等价的指数形式表示。

$$
x^r=e^{r\ln x}
$$

$$
x^r=e^{\ln(x^r)}=e^{r\ln x}
$$

## 三、极限

### $\ln x$ 的极限与垂直渐近线

$$
\lim_{x\to 0^+}\ln x=-\infty
$$

表函数 $y=\ln x$ 在 $x=0$ 有一条垂直渐近线。

### 极限运算法则

$$
\lim_{x\to a}[f(x)]^n=\left[\lim_{x\to a}f(x)\right]^n
$$

$$
\lim_{x\to a}\sqrt[n]{f(x)}=\sqrt[n]{\lim_{x\to a}f(x)}
$$

如果 $f$ 是多项式或有理函数

$$
\lim_{x\to a}f(x)=f(a)
$$

### 夹逼定理应用

证明 $\displaystyle\lim_{x\to 0}x^2\sin\frac{1}{x}=0$

任意正弦值都在 $1$ 与 $-1$ 间

$$
-1\le\sin\frac{1}{x}\le 1
$$

乘 $x^2$

$$
-x^2\le x^2\sin\frac{1}{x}\le x^2
$$

我们知道

$$
\lim_{x\to 0}x^2=0,\quad \lim_{x\to 0}(-x^2)=0
$$

$\therefore \lim x^2\sin\frac{1}{x}=0$

### 无穷远处的极限

如果 $r>0$ 是一个有理数

$$
\lim_{x\to+\infty}\frac{1}{x^r}=0
$$

如果 $r>0$ 是一个使 $x^r$ 对所有 $x$ 都有定义的有理数

$$
\lim_{x\to-\infty}\frac{1}{x^r}=0
$$

为了计算任意有理函数在无穷远处的极限,我们将分子分母同除分母中 $x$ 的最高次项

e.g.

$$
\lim_{x\to+\infty}\frac{3x^2-x-2}{5x^2+4x+1}=\lim_{x\to+\infty}\frac{\dfrac{3x^2-x-2}{x^2}}{\dfrac{5x^2+4x+1}{x^2}}=\lim_{x\to+\infty}\frac{3-\dfrac{1}{x}-\dfrac{2}{x^2}}{5+\dfrac{4}{x}+\dfrac{1}{x^2}}
$$

$$
=\frac{\displaystyle\lim_{x\to+\infty}3-\lim_{x\to+\infty}\frac{1}{x}-\lim_{x\to\infty}\frac{2}{x^2}}{\displaystyle\lim_{x\to+\infty}5+\lim_{x\to+\infty}\frac{4}{x}+\lim_{x\to\infty}\frac{1}{x^2}}
$$

$$
=\frac{3-0-0}{5+0+0}=\frac{3}{5}
$$

$$
\lim_{x\to-\infty}e^x=0
$$

通常,极限运算法则不能被应用在无穷极限上,因为 $\infty$ 不是一个数

然且,我们能说

$$
\lim_{x\to+\infty}(x^2-x)=\lim_{x\to+\infty}x(x-1)=+\infty
$$

## 四、连续性

### 连续的定义

如果

$$
\lim_{x\to a}f(x)=f(a)
$$

则称函数 $f$ 在 $a$ 处连续

### 连续函数的运算

如果 $f$ 和 $g$ 在 $a$ 连续,且 $c$ 是一个常数,则以下函数也在 $a$ 连续

$$
f+g\qquad f-g\qquad cf\qquad fg\qquad \frac{f}{g}\ \text{其中}\ g(a)\ne 0
$$

### 常见的连续函数

任意多项式都是处处连续的

任意有理函数在自己定义域上连续

以下类型的函数在其定义域上都是连续的

多项式  有理函数  平方根函数  三角函数  反三角函数(e.g. $\sin^{-1}$)  指数函数  对数函数

### 复合函数的连续性

如果 $f$ 在 $b$ 连续且 $\displaystyle\lim_{x\to a}g(x)=b$,那么 $\displaystyle\lim_{x\to a}f(g(x))=f(b)$

如果 $g$ 在 $a$ 连续,且 $f$ 在 $g(a)$ 连续,那么 $f\circ g$ 在 $a$ 连续

### 介值定理

假设 $f$ 在闭区间 $[a,b]$ 上连续,$N$ 是 $f(a)$ 和 $f(b)$ 之间的任意一个数,$f(a)\ne f(b)$,那么在 $(a,b)$ 内存在一个数 $c$,使得 $f(c)=N$。

e.g.(图见笔记原图第 2 页)

## 五、导数

### 导数的定义与记号

定义函数 $f(x)$ 在 $x=a$ 处的导数 $f'(a)$ 为

$$
f'(a)=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}
$$

$$
f'(x)=y'=\frac{dy}{dx}=\frac{df}{dx}=\frac{d}{dx}f(x)=Df(x)=D_xf(x)
$$

符号 $D$ 和 $d/dx$ 称为微分算子,因为它们代表微分运算,即求导的过程

用莱布尼茨符号 $dy/dx$ 表示某特定点 $a$ 处的导数,则可以记为

$$
\left.\frac{dy}{dx}\right|_{x=a}
$$

### 可微与连续

如果 $f$ 在 $a$ 处可微,则 $f$ 在 $a$ 处连续

逆命题不成立

### 高阶导数

$\dfrac{dy}{dx}$ 一阶导数  $\dfrac{d^2y}{dx^2}$ 二阶导数

### 数 $e$

数 $e$ 满足

$$
\lim_{h\to 0}\frac{e^h-1}{h}=1
$$

### 三角函数的导数

$$
\frac{d}{dx}(\sin x)=\cos x
$$

$$
\frac{d}{dx}(\cos x)=-\sin x
$$

$$
\frac{d}{dx}(\tan x)=\sec^2x
$$

$$
\frac{d}{dx}(\csc x)=-\csc x\cot x
$$

$$
\frac{d}{dx}(\sec x)=\sec x\tan x
$$

$$
\frac{d}{dx}(\cot x)=-\csc^2x
$$

仅 $x$ 为弧度制时适用

$$
\csc\theta=\frac{1}{\sin\theta}\qquad \sec\theta=\frac{1}{\cos\theta}\qquad \cot\theta=\frac{1}{\tan\theta}
$$

$$
\lim_{\theta\to 0}\frac{\sin\theta}{\theta}=1
$$

$$
\lim_{\theta\to 0}\frac{\cos\theta-1}{\theta}=0
$$

### 链式法则

$$
F'(x)=f'(g(x))\cdot g'(x)
$$

$$
\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}
$$

e.g.

$F(x)=\sqrt{x^2+1}$,求 $F'(x)$

令 $u=x^2+1$

$$
f(u)=\sqrt{u},\quad g(x)=x^2+1
$$

$$
f'(u)=\frac{1}{2}u^{-1/2}=\frac{1}{2\sqrt{u}},\quad g'(x)=2x
$$

$$
F'(x)=f'(g(x))\cdot g'(x)
$$

$$
=\frac{1}{2\sqrt{x^2+1}}\cdot 2x
$$

$$
=\frac{x}{\sqrt{x^2+1}}
$$

### 指数函数的导数

$$
\frac{d}{dx}(b^x)=b^x\ln b
$$

### 隐函数求导法

求形如 $x^2+y^2=25$ 函数的 $\dfrac{dy}{dx}$ 时

在两边求导,解关于 $\dfrac{dy}{dx}$ 的方程

"隐函数求导法"

e.g. $x^2+y^2=25$,求 $\dfrac{dy}{dx}$,求圆 $x^2+y^2=25$ 在点 $(3,4)$ 处切线方程

$$
\frac{d}{dx}(x^2+y^2)=\frac{d}{dx}(25)
$$

$$
\frac{d}{dx}(x^2)+\frac{d}{dx}(y^2)=0
$$

$y$ 是 $x$ 的函数,应用链式法则

$$
\frac{d}{dx}(x^2)+\frac{d}{dy}(y^2)\frac{dy}{dx}=0
$$

$$
2x+2y\frac{dy}{dx}=0
$$

解关于 $\dfrac{dy}{dx}$ 的方程

$$
\frac{dy}{dx}=-\frac{x}{y}
$$

在点 $(3,4)$ 处

$$
\frac{dy}{dx}=-\frac{3}{4}
$$

圆在 $(3,4)$ 切线方程为

$$
y-4=-\frac{3}{4}(x-3)
$$

### 对数函数的导数

$$
\frac{d}{dx}(\log_b x)=\frac{1}{x\ln b}
$$

$$
\frac{d}{dx}(\ln x)=\frac{1}{x}
$$

$$
\frac{d}{dx}(\ln\lvert x\rvert)=\frac{1}{x}
$$

### 对数求导法

对数求导法的步骤

a. 在方程 $y=f(x)$ 两边同时取自然对数,并用对数运算法化简

b. 求关于 $x$ 的导数

c. 解方程,求 $y'$,并将用 $f(x)$ 替换 $y$

求 $\dfrac{d}{dx}[f(x)]^{g(x)}$ 时用对数求导法

e.g. 求 $y=x^{\sqrt{x}}$ 的导数

$$
\ln y=\ln x^{\sqrt{x}}=\sqrt{x}\ln x
$$

$$
\frac{y'}{y}=\sqrt{x}\cdot\frac{1}{x}+(\ln x)\frac{1}{2\sqrt{x}}
$$

$$
y'=y\left(\frac{1}{\sqrt{x}}+\frac{\ln x}{2\sqrt{x}}\right)=x^{\sqrt{x}}\left(\frac{2+\ln x}{2\sqrt{x}}\right)
$$

或

$$
x^{\sqrt{x}}=e^{\sqrt{x}\ln x}
$$

$$
\frac{d}{dx}\left(x^{\sqrt{x}}\right)=\frac{d}{dx}\left(e^{\sqrt{x}\ln x}\right)=e^{\sqrt{x}\ln x}\frac{d}{dx}(\sqrt{x}\ln x)
$$

$$
=x^{\sqrt{x}}\left(\frac{2+\ln x}{2\sqrt{x}}\right)
$$

### $e$ 的极限表示

如果 $y=\ln x$ 则 $y'=\dfrac{1}{x}$

因此 $f'(1)=1$

$$
f'(1)=\lim_{h\to 0}\frac{f(1+h)-f(1)}{h}=\lim_{x\to 0}\frac{f(1+x)-f(1)}{x}
$$

$$
=\lim_{x\to 0}\frac{\ln(1+x)-\ln 1}{x}=\lim_{x\to 0}\frac{1}{x}\ln(1+x)
$$

$$
=\lim_{x\to 0}\ln(1+x)^{1/x}
$$

$\because f'(1)=1$

$$
\therefore \lim_{x\to 0}\ln(1+x)^{1/x}=1
$$

$$
e=e^1=e^{\lim_{x\to 0}\ln(1+x)^{1/x}}=\lim_{x\to 0}(1+x)^{1/x}
$$

$$
e=\lim_{x\to 0}(1+x)^{1/x}\qquad e=\lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n
$$

### 反三角函数的导数

$$
\frac{d}{dx}(\sin^{-1}x)=\frac{1}{\sqrt{1-x^2}}\qquad \frac{d}{dx}(\csc^{-1}x)=-\frac{1}{x\sqrt{x^2-1}}
$$

$$
\frac{d}{dx}(\cos^{-1}x)=-\frac{1}{\sqrt{1-x^2}}\qquad \frac{d}{dx}(\sec^{-1}x)=\frac{1}{x\sqrt{x^2-1}}
$$

$$
\frac{d}{dx}(\tan^{-1}x)=\frac{1}{1+x^2}\qquad \frac{d}{dx}(\cot^{-1}x)=-\frac{1}{1+x^2}
$$

## 六、导数的应用

### 自然增长定理

$$
\frac{dy}{dt}=ky
$$

自然增长定理

$$
\frac{dy}{dt}=C(ke^{kt})=k(Ce^{kt})=ky
$$

$$
y(0)=Ce^{k\cdot 0}=C
$$

微分方程 $dy/dt=ky$ 的唯一解是指数函数

$$
y(t)=y(0)e^{kt}
$$

### 费马定理

如果 $f$ 在 $c$ 处取得极大值或极小值,并且 $f'(c)$ 存在,那么 $f'(c)=0$

逆定理不存在

### 临界值

$f$ 的临界值是指 $f$ 的定义域内的数 $c$,它使得 $f'(c)=0$ 或 $f'(c)$ 不存在

如果 $f$ 在 $c$ 处有极大值或极小值,那么 $c$ 是 $f$ 的临界值

### 罗尔定理

设 $f$ 符合以下假设

a. $f$ 是闭区间 $[a,b]$ 上的连续函数

b. $f$ 在开区间 $(a,b)$ 上可微

c. $f(a)=f(b)$

那么在 $(a,b)$ 存在一个数 $c$,使得 $f'(c)=0$

### 中值定理

设 $f$ 满足以下假设

a. $f$ 是 $[a,b]$ 上的连续函数

b. $f$ 在开区间 $(a,b)$ 上可微

那么在区间 $(a,b)$ 内存在一个数 $c$,使得

$$
f'(c)=\frac{f(b)-f(a)}{b-a}
$$

### 二阶导数判定

假设 $f''$ 在 $c$ 附近是连续的

a. 当 $f'(c)=0$ 且 $f''(c)>0$ 时,$f$ 在 $c$ 处有一个极小值

b. 当 $f'(c)=0$ 且 $f''(c)<0$ 时,$f$ 在 $c$ 处有一个极大值

### 洛必达法则

如果我们将得到一个 $\dfrac{0}{0}$ 型不定式或 $\dfrac{\infty}{\infty}$ 型不定式

那么当 $\displaystyle\lim_{x\to a}\frac{f'(x)}{g'(x)}$ 存在(或者为 $\pm\infty$ 时)

$$
\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)}
$$

e.g. 求 $\displaystyle\lim_{x\to 1}\frac{\ln x}{x-1}$

$$
\because \lim_{x\to 1}\ln x=0,\quad \lim_{x\to 1}(x-1)=0
$$

$$
\lim_{x\to 1}\frac{\ln x}{x-1}\overset{\text{l'H}}{=}\lim_{x\to 1}\frac{\dfrac{d}{dx}(\ln x)}{\dfrac{d}{dx}(x-1)}=\lim_{x\to 1}\frac{\frac{1}{x}}{1}=1
$$

### 牛顿-拉夫森法

$$
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}
$$

## 七、积分

### 求和公式

$$
\sum_{i=1}^{n}1=n
$$

$$
\sum_{i=1}^{n}i=\frac{n(n+1)}{2}
$$

$$
\sum_{i=1}^{n}i^2=\frac{n(n+1)(2n+1)}{6}
$$

$$
\sum_{i=1}^{n}i^3=\left[\frac{n(n+1)}{2}\right]^2
$$

### 不定积分公式

$$
\int cf(x)\,dx=c\int f(x)\,dx
$$

$$
\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\quad(n\ne -1)
$$

$$
\int\sin x\,dx=-\cos x+C
$$

$$
\int\sec^2x\,dx=\tan x+C
$$

$$
\int\sec x\tan x\,dx=\sec x+C
$$

$$
\int\csc^2x\,dx=-\cot x+C
$$

$$
\int\cos x\,dx=\sin x+C
$$

$$
\int b^x\,dx=\frac{b^x}{\ln b}+C
$$

$$
\int\frac{1}{x}\,dx=\ln\lvert x\rvert+C
$$

$$
\int\frac{1}{x^2+1}\,dx=\tan^{-1}x+C
$$

$$
\int\frac{1}{\sqrt{1-x^2}}\,dx=\sin^{-1}x+C
$$

$$
\int\csc x\cot x\,dx=-\csc x+C
$$

### 净变化定理

变化率的积分等于净变化量

### 换元法

如果 $u=g(x)$ 是一个可微函数,其值域为区间 $I$,并且 $f$ 在 $I$ 上连续

那么

$$
\int f(g(x))g'(x)\,dx=\int f(u)\,du
$$

e.g. 求 $\displaystyle\int\sqrt{2x+1}\,dx$

令 $u=2x+1$

则 $\dfrac{du}{dx}=2$

$$
du=2\,dx
$$

$$
dx=\frac{1}{2}du
$$

$$
\int\sqrt{2x+1}\,dx=\int\sqrt{u}\cdot\frac{1}{2}du=\frac{1}{2}\int u^{\frac{1}{2}}du
$$

$$
=\frac{1}{2}\cdot\frac{u^{\frac{3}{2}}}{\frac{3}{2}}+C=\frac{1}{3}u^{\frac{3}{2}}+C
$$

$$
=\frac{1}{3}(2x+1)^{\frac{3}{2}}+C
$$

### 定积分的换元法

如果

$g'$ 在 $[a,b]$ 上连续且 $f$ 在 $u=g(x)$ 的值域上连续

那么

$$
\int_a^b f(g(x))g'(x)\,dx=\int_{g(a)}^{g(b)}f(u)\,du
$$

e.g. 求 $\displaystyle\int_0^4\sqrt{2x+1}\,dx$  $u=2x+1$,$dx=\dfrac{1}{2}du$

当 $x=0$ 时 $u=1$,当 $x=4$ 时,$u=9$

因此

$$
\int_0^4\sqrt{2x+1}\,dx=\int_1^9\frac{1}{2}\sqrt{u}\,du
$$

$$
=\frac{1}{2}\cdot\frac{2}{3}u^{\frac{3}{2}}\Big|_1^9
$$

$$
=\frac{26}{3}
$$

### 分部积分法

$$
\frac{d}{dx}[f(x)g(x)]=f'(x)g(x)+f(x)g'(x)
$$

用不定积分表示

$$
\int[f'(x)g(x)+f(x)g'(x)]\,dx=f(x)g(x)
$$

改写为

$$
\int f(x)g'(x)\,dx=f(x)g(x)-\int g(x)f'(x)\,dx
$$

换元法可知

$$
\int u\,dv=uv-\int v\,du
$$

e.g. $\displaystyle\int x\sin x\,dx$

可根据以下模板

$u=$  $dv=$

$du=$  $v=$

令 $u=x$,$dv=\sin x\,dx$

$du=dx$  $v=-\cos x$

$$
\int x\sin x\,dx=x(-\cos x)-\int(-\cos x)\,dx
$$

$$
=-x\cos x+\int\cos x\,dx
$$

$$
=-x\cos x+\sin x+C
$$

### 有理函数的积分与部分分式法

部分分式法

有理函数 $f(x)=\dfrac{P(x)}{Q(x)}$  记 $P$ 次数为 $\deg(P)$

如果 $\deg(P)<\deg(Q)$ 则称 $f$ 为真分式

如果 $\deg(P)\ge\deg(Q)$ 则称 $f$ 为假分式

遇见这种情况先要用长除法,得到余式 $R(x)$ 满足 $\deg(R)<\deg(Q)$

$$
f(x)=\frac{P(x)}{Q(x)}=S(x)+\frac{R(x)}{Q(x)}\qquad\text{\textcircled{1}}
$$

有时只需要这样处理就可以了

e.g. $\displaystyle\int\frac{x^3+x}{x-1}\,dx$

$$
\int\frac{x^3+x}{x-1}\,dx=\int\left(x^2+x+2+\frac{2}{x-1}\right)dx
$$

$$
=\frac{x^3}{3}+\frac{x^2}{2}+2x+2\ln\lvert x-1\rvert+C
$$

第二步将 ① 中的 $Q(x)$ 因式分解

第三步是将有理函数的真分式部分 $R(x)/Q(x)$ 表示为

$$
\frac{A}{(ax+b)^i}\quad\text{或}\quad\frac{Ax+B}{(ax^2+bx+c)^j}
$$

有四种情况

#### 情况 I:分母是线性因式的乘积,其中没有重因式

在这种情况下 存在常数 $A_1,A_2,\cdots,A_k$

使得

$$
\frac{R(x)}{Q(x)}=\frac{A_1}{a_1x+b_1}+\frac{A_2}{a_2x+b_2}+\cdots+\frac{A_k}{a_kx+b_k}
$$

e.g. 求 $\displaystyle\int\frac{x^2+2x-1}{2x^3+3x^2-2x}\,dx$

因为此为真分式,无需长除法

$$
2x^3+3x^2-2x=x(2x^2+3x-2)=x(2x-1)(x+2)
$$

函数可以分解为如下形式

$$
\frac{x^2+2x-1}{x(2x-1)(x+2)}=\frac{A}{x}+\frac{B}{2x-1}+\frac{C}{x+2}
$$

将等式两边同乘最小公倍数 $x(2x-1)(x+2)$

得

$$
x^2+2x-1=A(2x-1)(x+2)+Bx(x+2)+Cx(2x-1)
$$

展开,整理成标准形式

得

$$
x^2+2x-1=(2A+B+2C)x^2+(3A+2B-C)x-2A
$$

多项式相等,得系数相等

得

$$
\begin{aligned}
2A+B+2C&=1\\
3A+2B-C&=2\\
-2A&=-1
\end{aligned}
$$

解得 $A=\dfrac{1}{2}$  $B=\dfrac{1}{5}$,$C=-\dfrac{1}{10}$

$$
\int\frac{x^2+2x-1}{2x^3+3x^2-2x}\,dx=\int\left(\frac{1}{2}\times\frac{1}{x}+\frac{1}{5}\times\frac{1}{2x-1}-\frac{1}{10}\times\frac{1}{x+2}\right)dx
$$

$$
=\frac{1}{2}\ln\lvert x\rvert+\frac{1}{10}\ln\lvert 2x-1\rvert-\frac{1}{10}\ln\lvert x+2\rvert+K
$$

在对中间的项积分时,使用了换元 $u=2x-1$

同时有公式

$$
\int\frac{dx}{x^2-a^2}=\frac{1}{2a}\ln\left\lvert\frac{x-a}{x+a}\right\rvert+C
$$

#### 情况 II:$Q(x)$ 是线性因式的乘积,其中有重因式

假设 $Q(x)$ 的因式分解中包含 $(a_1x+b_1)^r$

那么用

$$
\frac{A_1}{a_1x+b_1}+\frac{A_2}{(a_1x+b_1)^2}+\cdots+\frac{A_r}{(a_1x+b_1)^r}
$$

e.g. 求 $\displaystyle\int\frac{x^4-2x^2+4x+1}{x^3-x^2-x+1}\,dx$

长除法

得

$$
\frac{x^4-2x^2+4x+1}{x^3-x^2-x+1}=x+1+\frac{4x}{x^3-x^2-x+1}
$$

因式分解 $Q(x)$,因为 $Q(1)=0$,所以 $(x-1)$ 是一个因式

$$
x^3-x^2-x+1=(x-1)(x^2-1)=(x-1)(x-1)(x+1)
$$

$$
=(x-1)^2(x+1)
$$

得

$$
\frac{4x}{x^3-x^2-x+1}=\frac{A}{x-1}+\frac{B}{(x-1)^2}+\frac{C}{x+1}
$$

以下省略

$$
\int\frac{x^4-2x^2+4x+1}{x^3-x^2-x+1}\,dx=\int\left[x+1+\frac{1}{x-1}+\frac{2}{(x-1)^2}-\frac{1}{x+1}\right]dx
$$

$$
=\frac{x^2}{2}+x-\frac{2}{x-1}+\ln\left\lvert\frac{x-1}{x+1}\right\rvert+K
$$

#### 情况 III:$Q(x)$ 含不可约二次因式,其中没有重因式

如果 $Q(x)$ 包含因式 $ax^2+bx+c$,$R(x)/Q(x)$ 的表达式有一项为

$$
\frac{Ax+B}{ax^2+bx+c}
$$

e.g.

$$
f(x)=x/[(x-2)(x^2+1)(x^2+4)]
$$

可分解为

$$
\frac{x}{(x-2)(x^2+1)(x^2+4)}=\frac{A}{x-2}+\frac{Bx+C}{x^2+1}+\frac{Dx+E}{x^2+4}
$$

我们可以通过

$$
\int\frac{dx}{x^2+a^2}=\frac{1}{a}\tan^{-1}\left(\frac{x}{a}\right)+C
$$

和配方来求积分

配方 e.g.

求 $\displaystyle\int\frac{x-1}{4x^2-4x+3}\,dx$

由于 $b^2-4ac<0$ 无法因式分解

配方得 $4x^2-4x+3=(2x-1)^2+2$

令 $u=2x-1$,$du=2\,dx$,$x=\dfrac{1}{2}(u+1)$

以下省略

#### 情况 IV:$Q(x)$ 包含不可约二次因式,其中有重因式

如果 $Q(x)$ 包含因式 $(ax^2+bx+c)^r$

我们用

$$
\frac{A_1x+B_1}{ax^2+bx+c}+\frac{A_2x+B_2}{(ax^2+bx+c)^2}+\cdots+\frac{A_rx+B_r}{(ax^2+bx+c)^r}
$$

之后通过换元或配方

以下省略

### 积分策略

#### 补充积分

$$
\int\frac{dx}{x^2+a^2}=\frac{1}{a}\tan^{-1}\left(\frac{x}{a}\right)+C
$$

$$
\int\frac{dx}{\sqrt{x^2\pm a^2}}=\ln\left\lvert x+\sqrt{x^2\pm a^2}\right\rvert+C
$$

$$
\int\frac{dx}{\sqrt{a^2-x^2}}=\sin^{-1}\left(\frac{x}{a}\right)+C
$$

$$
\int\frac{dx}{x^2-a^2}=\frac{1}{2a}\ln\left\lvert\frac{x-a}{x+a}\right\rvert+C
$$

#### 步骤

1. 尽可能化简积分

2. 寻找明显的换元

   如 $\displaystyle\int\frac{x}{x^2-1}\,dx$

3. 按照被积函数形式分类

   (a) 有理函数 考虑部分分式法

   (b) 分部积分,如果 $f(x)$ 是 $x$ 的幂(或多项式)与超越函数的乘积,考虑分部积分法

   (c) 根式 考虑特定类型的换元

   (i) 如果出现 $\sqrt{x^2\pm a^2}$ 等使用上述补充积分换元

   (ii) 如果出现 $\sqrt[n]{ax+b}$,可以令 $u=\sqrt[n]{ax+b}$,更一般的,它有时也适用于 $\sqrt[n]{g(x)}$

4. 再次尝试

   (a) 尝试换元法

   (b) 尝试分部积分法

   (c) 将被积函数变形

### 积分的近似

#### 中点法则

$$
\int_a^b f(x)\,dx\approx M_n=\Delta x\left[f(\bar{x}_1)+f(\bar{x}_2)+\cdots+f(\bar{x}_n)\right]
$$

其中 $\Delta x=\dfrac{b-a}{n}$,$\bar{x}_i=\dfrac{1}{2}(x_{i-1}+x_i)$ 为 $[x_{i-1},x_i]$ 的中点

(图见笔记原图第 15 页)

#### 梯形法则

$$
\int_a^b f(x)\,dx\approx T_n=\frac{\Delta x}{2}\left[f(x_0)+2f(x_1)+2f(x_2)+\cdots+2f(x_{n-1})+f(x_n)\right]
$$

其中 $\Delta x=\dfrac{b-a}{n}$,$x_i=a+i\Delta x$

(图见笔记原图第 15 页)

第 $i$ 个区间对应的梯形面积为

$$
\Delta x\left(\frac{f(x_{i-1})+f(x_i)}{2}\right)=\frac{\Delta x}{2}\left[f(x_{i-1})+f(x_i)\right]
$$

#### 误差

$$
\int_a^b f(x)\,dx=\text{近似值}+\text{误差}
$$

误差界:假设对于 $a\le x\le b$,$\lvert f''(x)\rvert\le K$,$E_T$ 和 $E_M$ 分别表示梯形法则和中点法则的误差

$$
\lvert E_T\rvert\le\frac{K(b-a)^3}{12n^2},\qquad \lvert E_M\rvert\le\frac{K(b-a)^3}{24n^2}
$$

#### 辛普森法则

$$
\int_a^b f(x)\,dx\approx S_n=\frac{\Delta x}{3}\left[f(x_0)+4f(x_1)+2f(x_2)+4f(x_3)+\cdots+2f(x_{n-2})+4f(x_{n-1})+f(x_n)\right]
$$

其中 $n$ 为偶数,$\Delta x=\dfrac{b-a}{n}$

辛普森法则的误差界

$$
\lvert E_S\rvert\le\frac{K(b-a)^5}{180n^4}
$$

其中 $\lvert f^{(4)}(x)\rvert\le K$,$a\le x\le b$

### 反常积分

积分区间为无穷区间,或 $f$ 在区间 $[a,b]$ 上有无穷间断的情况,称这类积分为反常积分。

#### 反常积分的定义(类型 1)

(a) 如果对于任意 $t\ge a$,$\displaystyle\int_a^t f(x)\,dx$ 都存在,那么

$$
\int_a^{+\infty}f(x)\,dx=\lim_{t\to+\infty}\int_a^t f(x)\,dx
$$

只要极限存在

(b) 如果对于任意 $t\le b$,$\displaystyle\int_t^b f(x)\,dx$ 都存在,那么

$$
\int_{-\infty}^b f(x)\,dx=\lim_{t\to-\infty}\int_t^b f(x)\,dx
$$

只要极限存在

如果极限存在,则称反常积分收敛

反之,称发散

(c) 如果 $\displaystyle\int_a^{+\infty}f(x)\,dx$ 和 $\displaystyle\int_{-\infty}^{a}f(x)\,dx$ 都收敛

定义

$$
\int_{-\infty}^{+\infty}f(x)\,dx=\int_{-\infty}^{a}f(x)\,dx+\int_a^{+\infty}f(x)\,dx
$$

$a$ 为任意实数

e.g.

$$
A(t)=\int_1^t\frac{1}{x^2}\,dx=-\frac{1}{x}\Big|_1^t=1-\frac{1}{t}
$$

$$
\lim_{t\to+\infty}A(t)=1
$$

$$
\int_1^{+\infty}\frac{1}{x^2}\,dx=\lim_{t\to+\infty}\int_1^t\frac{1}{x^2}\,dx=1
$$

收敛

如果 $p>1$,那么 $\displaystyle\int_1^{+\infty}\frac{1}{x^p}\,dx$ 收敛;反之发散

#### 反常积分的定义(类型 2)

(a) 如果 $f$ 在 $[a,b)$ 上连续且在 $b$ 处不连续,那么

$$
\int_a^b f(x)\,dx=\lim_{t\to b^-}\int_a^t f(x)\,dx
$$

只要极限存在

(b) 如果 $f$ 在 $(a,b]$ 上连续且在 $a$ 处不连续,那么

$$
\int_a^b f(x)\,dx=\lim_{t\to a^+}\int_t^b f(x)\,dx
$$

只要极限存在

如果极限存在,称反常积分收敛;反之,发散

(c) 如果 $f$ 在 $c$ 处有间断,其中 $a<c<b$,并且 $\displaystyle\int_a^c f(x)\,dx$ 和 $\displaystyle\int_c^b f(x)\,dx$ 均收敛,定义

$$
\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx
$$

#### 比较定理

假设 $f$ 和 $g$ 是连续函数,且 $x\ge a$ 时 $f(x)\ge g(x)\ge 0$

(a) 如果 $\displaystyle\int_a^{+\infty}f(x)\,dx$ 收敛,则 $\displaystyle\int_a^{+\infty}g(x)\,dx$ 收敛

(b) 如果 $\displaystyle\int_a^{+\infty}g(x)\,dx$ 发散,则 $\displaystyle\int_a^{+\infty}f(x)\,dx$ 发散

## 八、积分的应用

### 曲线间的面积

$$
A=\int_a^b[f(x)-g(x)]\,dx
$$

其中 $f$ 和 $g$ 是连续函数,且对于 $[a,b]$ 内的所有 $x$,有 $f(x)\ge g(x)$

$$
A=\int_a^b\lvert f(x)-g(x)\rvert\,dx
$$

(图见笔记原图第 9 页)

### 柱壳法

曲线 $y=f(x)$ 下方从 $x=a$ 到 $x=b$ 的区域绕 $y$ 轴旋转所得立体

$$
V=\int_a^b 2\pi xf(x)\,dx \quad \text{其中}\ 0\le a<b
$$

### 函数的平均值

函数 $f$ 在 $[a,b]$ 上的平均值为

$$
f_{\text{avg}}=\frac{1}{b-a}\int_a^b f(x)\,dx
$$

如果 $f$ 在 $[a,b]$ 上连续,那么 $[a,b]$ 内一定存在 $c$ 使得

$$
f(c)=f_{\text{avg}}
$$

### 弧长公式

如果 $f'$ 在 $[a,b]$ 上连续,那么曲线 $y=f(x)$,$a\le x\le b$ 的长度为

$$
L=\int_a^b\sqrt{1+[f'(x)]^2}\,dx=\int_a^b\sqrt{1+\left(\frac{dy}{dx}\right)^2}\,dx
$$

## 九、微分方程

### 微分方程与初值问题

通常,微分方程是包含一个未知函数及其一个或多个导数的等式

最高阶导数称为微分方程的阶数

e.g.

$$
y'=xy
$$

$y$ 是 $x$ 的未知函数

如果将 $y=f(x)$ 及其导数代入微分方程后,方程成立

那么 $f$ 为微分方程的解

在许多问题中,解需要满足形如 $y(t_0)=y_0$ 的条件,这个条件称为初值条件,求微分方程满足初值条件的解的问题,称为初值问题

一般地,有形如 $y'=F(x,y)$ 的一阶微分方程,$F(x,y)$ 是关于 $x,y$ 的表达式

### 平衡解

e.g.

$$
\frac{dP}{dt}=kP\left(1-\frac{P}{M}\right)
$$

$P(t)=0$,$P(t)=M$ 时,使方程右边的一个因子为 $0$

这两个解称为平衡解

### 欧拉法

设步长为 $h$,初值问题 $y'=F(x,y)$,$y(x_0)=y_0$ 的解在 $x_n=x_{n-1}+h$ 处的近似值为

$$
y_n=y_{n-1}+hF(x_{n-1},y_{n-1}),\quad n=1,2,3,\cdots
$$

e.g. 令步长为 $0.1$,利用欧拉法计算初值问题

$$
y'=x+y,\quad y(0)=1,\quad F(x,y)=x+y,\quad x_0=0,\quad y_0=1
$$

有

$$
y_1=y_0+hF(x_0,y_0)=1+0.1\times(0+1)=1.1
$$

$$
y_2=y_1+hF(x_1,y_1)=1.1+0.1\times(0.1+1.1)=1.22
$$

$$
y_3=y_2+hF(x_2,y_2)=1.22+0.1\times(0.2+1.22)=1.362
$$

$$
\cdots
$$

### 分离变量法

可分离变量的微分方程可写成如下形式

$$
\frac{dy}{dx}=g(x)f(y)
$$

如果 $f(y)\ne 0$

方程可以写成

$$
\frac{dy}{dx}=\frac{g(x)}{h(y)},\quad\text{其中}\ h(y)=\frac{1}{f(y)}
$$

然后写成微分的形式

$$
h(y)\,dy=g(x)\,dx
$$

两边积分

$$
\int h(y)\,dy=\int g(x)\,dx
$$

## 笔记原图

![笔记原图 第 1 页](/images/calculus-handwritten-notes/notes-1.jpg)

![笔记原图 第 2 页](/images/calculus-handwritten-notes/notes-2.jpg)

![笔记原图 第 3 页](/images/calculus-handwritten-notes/notes-3.jpg)

![笔记原图 第 4 页](/images/calculus-handwritten-notes/notes-4.jpg)

![笔记原图 第 5 页](/images/calculus-handwritten-notes/notes-5.jpg)

![笔记原图 第 6 页](/images/calculus-handwritten-notes/notes-6.jpg)

![笔记原图 第 7 页](/images/calculus-handwritten-notes/notes-7.jpg)

![笔记原图 第 8 页](/images/calculus-handwritten-notes/notes-8.jpg)

![笔记原图 第 9 页](/images/calculus-handwritten-notes/notes-9.jpg)

![笔记原图 第 10 页](/images/calculus-handwritten-notes/notes-10.jpg)

![笔记原图 第 11 页](/images/calculus-handwritten-notes/notes-11.jpg)

![笔记原图 第 12 页](/images/calculus-handwritten-notes/notes-12.jpg)

![笔记原图 第 13 页](/images/calculus-handwritten-notes/notes-13.jpg)

![笔记原图 第 14 页](/images/calculus-handwritten-notes/notes-14.jpg)

![笔记原图 第 15 页](/images/calculus-handwritten-notes/notes-15.jpg)

![笔记原图 第 16 页](/images/calculus-handwritten-notes/notes-16.jpg)

![笔记原图 第 17 页](/images/calculus-handwritten-notes/notes-17.jpg)

![笔记原图 第 18 页](/images/calculus-handwritten-notes/notes-18.jpg)

![笔记原图 第 19 页](/images/calculus-handwritten-notes/notes-19.jpg)
