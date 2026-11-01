---
title: 微积分概述和常用公式表
date: 2026-11-01
description: 微积分的核心概念,以及常用的导数、积分和级数公式表。
---

## 微积分在讲什么

微积分研究"变化"。它有两个核心问题:一个量变得有多快,以及很多小变化加起来是多少。

前一个问题的答案是导数,后一个是积分。微积分基本定理把两者连在一起:求积分,本质上是求导数的逆运算。

## 极限

导数和积分都建立在极限上。lim(x→a) f(x) = L,意思是 x 越靠近 a,f(x) 就越靠近 L。

两个常用的极限:

- lim(x→0) sin(x)/x = 1
- lim(n→∞) (1 + 1/n)^n = e

## 导数

函数在一点的导数,就是它在这一点的瞬时变化率,也是图像在这一点的切线斜率:

f'(x) = lim(h→0) [f(x+h) − f(x)] / h

## 积分

定积分表示曲线下方的面积,是把无数个细窄的长条加起来:

∫ₐᵇ f(x) dx

不定积分是求"哪个函数的导数等于 f"。结果后面要加常数 C,因为常数的导数是 0。

## 微积分基本定理

如果 F'(x) = f(x),那么

∫ₐᵇ f(x) dx = F(b) − F(a)

## 常用公式表

### 一、代数与三角

**乘法与因式分解**

- (a ± b)² = a² ± 2ab + b²
- a² − b² = (a − b)(a + b)
- a³ ± b³ = (a ± b)(a² ∓ ab + b²)
- 二项式定理:(a + b)ⁿ = aⁿ + n·aⁿ⁻¹b + n(n−1)/2!·aⁿ⁻²b² + … + bⁿ
- 一元二次方程 ax² + bx + c = 0 的解:x = [−b ± √(b² − 4ac)] / 2a

**指数与对数**

- aˣ⁺ʸ = aˣ·aʸ,(aˣ)ʸ = aˣʸ
- log_a(xy) = log_a x + log_a y
- log_a(x/y) = log_a x − log_a y
- log_a(xʳ) = r·log_a x
- log_a x = ln x / ln a

**三角恒等式**

- sin²x + cos²x = 1
- 1 + tan²x = sec²x,1 + cot²x = csc²x
- sin 2x = 2 sin x cos x
- cos 2x = cos²x − sin²x = 2cos²x − 1 = 1 − 2sin²x
- sin(x ± y) = sin x cos y ± cos x sin y
- cos(x ± y) = cos x cos y ∓ sin x sin y
- sin²x = (1 − cos 2x)/2,cos²x = (1 + cos 2x)/2

**常见角的值**

| 角 | 0 | π/6 | π/4 | π/3 | π/2 |
| --- | --- | --- | --- | --- | --- |
| sin | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan | 0 | √3/3 | 1 | √3 | 无定义 |

### 二、极限

- lim(x→0) sin x / x = 1
- lim(x→0) (1 − cos x) / x = 0
- lim(x→0) (eˣ − 1) / x = 1
- lim(x→0) ln(1 + x) / x = 1
- lim(x→0) (1 + x)^(1/x) = e
- lim(x→∞) (1 + 1/x)ˣ = e
- 洛必达法则:如果 f/g 在极限处是 0/0 或 ∞/∞,则 lim f/g = lim f'/g'

### 三、导数

**基本函数**

| 函数 | 导数 |
| --- | --- |
| C | 0 |
| xⁿ | n·xⁿ⁻¹ |
| eˣ | eˣ |
| aˣ | aˣ·ln a |
| ln x | 1/x |
| log_a x | 1/(x·ln a) |

**三角函数**

| 函数 | 导数 |
| --- | --- |
| sin x | cos x |
| cos x | −sin x |
| tan x | sec²x |
| cot x | −csc²x |
| sec x | sec x·tan x |
| csc x | −csc x·cot x |

**反三角函数**

| 函数 | 导数 |
| --- | --- |
| arcsin x | 1/√(1−x²) |
| arccos x | −1/√(1−x²) |
| arctan x | 1/(1+x²) |
| arccot x | −1/(1+x²) |

**双曲函数**

| 函数 | 导数 |
| --- | --- |
| sinh x | cosh x |
| cosh x | sinh x |
| tanh x | sech²x |

**求导法则**

- 加法:(f + g)' = f' + g'
- 常数倍:(cf)' = c·f'
- 乘法:(fg)' = f'g + fg'
- 除法:(f/g)' = (f'g − fg') / g²
- 链式法则:[f(g(x))]' = f'(g(x))·g'(x)
- 反函数:(f⁻¹)'(y) = 1 / f'(x),其中 y = f(x)

### 四、积分

下面每一行结尾都省略了 + C。

**基本函数**

| 函数 | 积分 |
| --- | --- |
| xⁿ (n ≠ −1) | xⁿ⁺¹ / (n+1) |
| 1/x | ln\|x\| |
| eˣ | eˣ |
| aˣ | aˣ / ln a |
| ln x | x ln x − x |

**三角函数**

| 函数 | 积分 |
| --- | --- |
| sin x | −cos x |
| cos x | sin x |
| tan x | ln\|sec x\| |
| cot x | ln\|sin x\| |
| sec x | ln\|sec x + tan x\| |
| csc x | −ln\|csc x + cot x\| |
| sec²x | tan x |
| csc²x | −cot x |
| sec x tan x | sec x |
| csc x cot x | −csc x |

**含根号与分式**

| 函数 | 积分 |
| --- | --- |
| 1/(x² + a²) | (1/a)·arctan(x/a) |
| 1/√(a² − x²) | arcsin(x/a) |
| 1/(x² − a²) | (1/2a)·ln\|(x − a)/(x + a)\| |
| 1/√(x² + a²) | ln(x + √(x² + a²)) |
| 1/√(x² − a²) | ln\|x + √(x² − a²)\| |

**双曲函数**

| 函数 | 积分 |
| --- | --- |
| sinh x | cosh x |
| cosh x | sinh x |

**积分方法**

- 换元法:∫ f(g(x))·g'(x) dx = ∫ f(u) du,u = g(x)
- 分部积分:∫ u dv = uv − ∫ v du
- 微积分基本定理:∫ₐᵇ f(x) dx = F(b) − F(a),F' = f

### 五、级数与泰勒展开

**常用级数**

- 等比级数:1 + r + r² + … = 1/(1 − r),|r| < 1
- 调和级数 Σ 1/n 发散,p 级数 Σ 1/nᵖ 在 p > 1 时收敛

**麦克劳林展开**

| 函数 | 展开式 | 成立范围 |
| --- | --- | --- |
| eˣ | 1 + x + x²/2! + x³/3! + … | 所有 x |
| sin x | x − x³/3! + x⁵/5! − … | 所有 x |
| cos x | 1 − x²/2! + x⁴/4! − … | 所有 x |
| ln(1 + x) | x − x²/2 + x³/3 − … | −1 < x ≤ 1 |
| 1/(1 − x) | 1 + x + x² + x³ + … | \|x\| < 1 |
| arctan x | x − x³/3 + x⁵/5 − … | \|x\| ≤ 1 |

泰勒公式:f(x) = Σ f⁽ⁿ⁾(a)/n! · (x − a)ⁿ

## 最后

公式记得住不难,难的是看到题知道该用哪个。多做几道题,比反复背这张表有用。
