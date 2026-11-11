---
title: 微积分笔记:从函数、极限到导数与积分
description: 我的手写微积分笔记整理,涵盖反函数、对数、极限、连续、导数及其应用、积分及其应用。
publishDate: 2026-11-10
category: 数学
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
