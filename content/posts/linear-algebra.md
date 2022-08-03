---
title: Notes for Linear Algebra
date: 2022-08-03
---

## 1 Linear Equations in Linear Algebra

### 1.2 Row Reduction and Echelon Forms

> DEFINITION (p13)
>
> A rectangular matrix is in **echelon form** (or **row echelon form**) if it has the following three properties:
>
> 1. All nonzero rows are above any rows of all zeros.
> 2. Each leading entry of a row is in a column to the right of the leading entry of the row above it.
> 3. All entries in a column below a leading entry are zeros.
>
> If a matrix in echelon form satisfies the following additional conditions, then it is in **reduced echelon form** (or **reduced row echelon form**):
>
> 4. The leading entry in each nonzero row is $1$.
> 5. Each leading $1$ is the only nonzero entry in its column.

> THEOREM 1 (p13)
>
> **Uniqueness of the Reduced Echelon Form**
>
> Each matrix is row equivalent to one and only one reduced echelon matrix.

> DEFINITION (p14)
> 
> A **pivot position** in a matrix $A$ is a location in $A$ that corresponds to a leading 1 in the reduced echelon form of $A$. A **pivot column** is a column of $A$ that contains a pivot position.

> THEOREM 2 (p21)
>
> **Existence and Uniqueness Theorem**
>
> A linear system is consistent if and only if the rightmost column of the augmented matrix is *not* a pivot column - that is, if and only if an echelon form of the augmented matrix has *no* row of the form
>
> $$
> \begin{bmatrix}
> 0 & \cdots & 0 & b
> \end{bmatrix}
> \quad \text{with} \, b \, \text{nonzero}
> $$
>
> If a linear system is consistent, then the solution set contains either (i) a unique solution, when there are no free variables, or (ii) infinitely many solutions, when there is at least one free variable.

### 1.3 Vector Equations

> DEFINITION (p30)
>
> If $\mathbf{v}_1,\dotsc,\mathbf{v}_p$ are in $\Bbb{R}^n$, then the set of all linear combinations of $\mathbf{v}_1,\dotsc,\mathbf{v}_p$ is denoted by $\text{Span}\{\mathbf{v}_1,\dotsc,\mathbf{v}_p\}$ and is called the **subset of $\Bbb{R}^n$ spanned** (or **generated**) **by** $\mathbf{v}_1,\dotsc,\mathbf{v}_p$. That is $\text{Span}\{\mathbf{v}_1,\dotsc,\mathbf{v}_p\}$ is the collection of all vectors that can be written in the form
>
> $$
> c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dotsb + c_p\mathbf{v}_p
> $$
>
> with $c_1,\dotsc,c_p$ scalars.

### 1.4 The Matrix Equation $A\mathbf{x} = \mathbf{b}$

> DEFINITION (p35)
>
> If $A$ is an $m \times n$ matrix, with columns $\mathbf{a}_1,\dotsc,\mathbf{a}_n$, and if $\mathbf{x}$ is in $\Bbb{R}^n$, then the **product of $A$ and $\mathbf{x}$**, denoted by $A\mathbf{x}$, is **the linear combination of the columns of $A$ using the corresponding entries in $\mathbf{x}$ as weights**; that is,
>
> $$
> A\mathbf{x} =
> \begin{bmatrix}
> \mathbf{a}_1 & \mathbf{a}_2 & \cdots & \mathbf{a}_n
> \end{bmatrix}
> \begin{bmatrix}
> x_1 \\
> \vdots \\
> x_n \\
> \end{bmatrix}
> = x_1\mathbf{a}_1 + x_2\mathbf{a}_2 + \dotsb + x_n\mathbf{a}_n
> $$

> THEOREM 3 (p36) 
>
> If $A$ is an $m \times n$ matrix, with columns $\mathbf{a}_1,\dotsc,\mathbf{a}_n$, and if $\mathbf{b}$ is in $\Bbb{R}^m$, the matrix equation
>
> $$
> A\mathbf{x} = \mathbf{b}
> $$
>
> has the same solution set as the vector equation
>
> $$
> x_1\mathbf{a}_1 + x_2\mathbf{a}_2 + \dotsb + x_n\mathbf{a}_n = \mathbf{b}
> $$
>
> which, in turn, has the same solution set as the system of linear equations whose augmented matrix is
>
> $$
> \begin{bmatrix}
> \mathbf{a}_1 & \mathbf{a}_2 & \cdots & \mathbf{a}_n & \mathbf{b}
> \end{bmatrix}
> $$

> THEOREM 4 (p37)
>
> Let $A$ be an $m \times n* matrix. Then the following statements are logically equivalent. That is, for a particular $A$, either they are all true statements or they are all false.
>
> - For each $\mathbf{b}$ in $\Bbb{R}^m$, the equation $A\mathbf{x} = \mathbf{b}$ has a solution.
> - Each $\mathbf{b}$ in $\Bbb{R}^m$ is a linear combination of the columns of $A$.
> - The columns of $A$ span $\Bbb{R}^m$.
> - $A$ has a pivot position in every row.

> THEOREM 5 (p39)
>
> If $A$ is an $m \times n$ matrix, $\mathbf{u}$ and $\mathbf{v}$ are vectors in $\Bbb{R}^n$, and $c$ is a scalar, then:
> 
> - $A(\mathbf{u} + \mathbf{v}) = A\mathbf{u} + A\mathbf{v}$;
> - $A(c \mathbf{u}) = c(A\mathbf{u})$.

### 1.5 Solution Sets of Linear System

> The homogeneous equation $A\mathbf{x} = \mathbf{0}$ has a nontrivial solution if and only if the equation has at least one free variable.

> THEOREM 6 (p47)
>
> Suppose the equation $A\mathbf{x} = \mathbf{b}$ is consistent for some given $\mathbf{b}$, and let $\mathbf{p}$ be a solution. Then the solution set of $A\mathbf{x} = \mathbf{b}$ is the set of all vectors of the form $\mathbf{w} = \mathbf{p} + \mathbf{v}_h$, where $\mathbf{v}_h$ is any solution of the homogeneous equation $A\mathbf{x} = \mathbf{0}$.

### 1.7 Linear Independence

> DEFINITION (p57)
>
> An indexed set of vectors $\{ \mathbf{v}_1,\dotsc,\mathbf{v}_p \}$ in $\Bbb{R}^n$ is said to be **linearly independent** if the vector equation
>
> $$
> x_1\mathbf{v}_1 + x_2\mathbf{v}_2 + \dotsb + x_p\mathbf{v}_p = \mathbf{0}
> $$
>
> has only the trivial solution. The set $\{ \mathbf{v}_1,\dotsc,\mathbf{v}_p \}$ is said to be **linearly dependent** if there exist weights $c_1,\dotsc,c_p$, not all zero, such that
>
> $$
> c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dotsb + c_p\mathbf{v}_p = \mathbf{0}
> $$

> The columns of a matrix $A$ are linearly independent if and only if the equation $A\mathbf{x} = \mathbf{0}$ has *only* the trivial solution.

> THEOREM 7 (p59)
>
> **Characterization of Linearly Dependent Sets**
>
> An indexed set $S = \{ \mathbf{v}_1,\dotsc,\mathbf{v}_p \}$ of two or more vectors is linearly dependent if and only if at least one of the vectors in $S$ is a linear combination of the others. In fact, if $S$ is linearly dependent and $\mathbf{v}_1 \neq \mathbf{0}$, then some $\mathbf{v}_j$ (with $j > 1$) is a linear combination of the preceding vectors, $\mathbf{v} _ 1,\dotsc,\mathbf{v} _ {j-1}$.

> THEOREM 8 (p60)
>
> If a set contains more vectors than there are entries in each vector, then the set is linearly dependent. That is, any set $\{ \mathbf{v}_1,\dotsc,\mathbf{v}_p \}$ in $\Bbb{R}^n$ is linearly dependent if $p > n$.

> THEOREM 9 (p60)
>
> If a set $S = \{ \mathbf{v}_1,\dotsc,\mathbf{v}_p \}$ in $\Bbb{R}^n$ contains the zero vector, then the set is linearly dependent.

### 1.8 Introduction To Linear Transformations

> Definition (p66)
>
> A transformation (or mapping) $T$ is linear if:
>
> - $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ for all $\mathbf{u}$, $\mathbf{v}$ in the domain of $T$;
> - $T(c\mathbf{u}) = cT(\mathbf{u})$ for all scalars $c$ and all $\mathbf{u}$ in the domain of $T$.

> If $T$ is a linear transformation, then
>
> $$
> T(\mathbf{0}) = \mathbf{0}
> $$
>
> and
>
> $$
> T(c\mathbf{u} + d\mathbf{v}) = cT(\mathbf{u}) + dT(\mathbf{v})
> $$
>
> for all vectors $\mathbf{u}$, $\mathbf{v}$ in the domain of $T$ and all scalars $c$, $d$.

> $$
> T(c_1\mathbf{v}_1 + \dotsb + c_p\mathbf{v}_p) = c_1 T (\mathbf{v}_1) + \dotsb + c_p T (\mathbf{v}_p)
> $$

### 1.9 The Matrix Of A Linear Transformation

> THEOREM 10 (p72)
>
> Let $T : \Bbb{R}^n \rightarrow \Bbb{R}^m$ be a linear transformation. Then there exists a unique matrix $A$ such that
>
> $$
> T(\mathbf{x}) = A\mathbf{x} \quad \text{for all } \mathbf{x} \text{ in } \Bbb{R}^n
> $$
>
> In fact, $A$ is the $m \times n$ matrix whose $j$ th column is the vector $T(\mathbf{e}_j)$, where $\mathbf{e}_j$ is the $j$ th column of the identity matrix in $\Bbb{R}^n$:
>
> $$
> A =
> \begin{bmatrix}
> T(\mathbf{e}_1) & \cdots & T(\mathbf{e}_n)
> \end{bmatrix}
> $$

> DEFINITION (p76)
>
> A mapping $T : \Bbb{R}^n \rightarrow \Bbb{R}^m$ is said to be **onto** $\Bbb{R}^m$ if each $\mathbf{b}$ in $\Bbb{R}^m$ is the image of *at least one* $\mathbf{x}$ in $\Bbb{R}^n$.

> DEFINITION (p76)
>
> A mapping $T : \Bbb{R}^n \rightarrow \Bbb{R}^m$ is said to be **one-to-one** $\Bbb{R}^m$ if each $\mathbf{b}$ in $\Bbb{R}^m$ is the image of *at most one* $\mathbf{x}$ in $\Bbb{R}^n$.

> THEOREM 11 (p77)
>
> Let $T : \Bbb{R}^n \rightarrow \Bbb{R}^m$ be a linear transformation. Then $T$ is one-to-one if and only if the equation $T(\mathbf{x}) = \mathbf{0}$ has only the trivial solution.

> THEOREM 12 (p78)
>
> Let $T : \Bbb{R}^n \rightarrow \Bbb{R}^m$ be a linear transformation, and let $A$ be the standard matrix for $T$. Then:
> - $T$ maps $\Bbb{R}^n$ onto $\Bbb{R}^m$ if and only if the columns of $A$ span $\Bbb{R}^m$;
> - $T$ is one-to-one if and only if the columns of $A$ are linearly independent.

## 2 Matrix Algebra

### 2.1 Matrix Operations

> THEOREM 1 (p95)
>
> Let $A$, $B$, and $C $be matrices of the same size, and let $r$ and $s$ be scalars.
> - $A + B = B + A$
> - $(A + B) + C = A + (B + C)$
> - $A + 0 = A$
> - $r(A + B) = rA + rB$
> - $(r + s)A = rA + sA$
> - $r(sA) = (rs)A$

> DEFINITION (p97)
>
> If $A$ is an $m \times n$ matrix, and if $B$ is an $n \times p$ matrix with columns $\mathbf{b}_1,\dotsc,\mathbf{b}_p$, then the product $AB$ is the $m \times p$ matrix whose columns are $A\mathbf{b}_1,\dotsc,A\mathbf{b}_p$. That is,
>
> $$
> AB = A
> \begin{bmatrix}
> \mathbf{b}_1 & \mathbf{b}_2 & \cdots & \mathbf{b}_p
> \end{bmatrix}
> = \begin{bmatrix}
> A\mathbf{b}_1 & A\mathbf{b}_2 & \cdots & A\mathbf{b}_p
> \end{bmatrix}
> $$

> Each column of $AB$ is a linear combination of the columns of $A$ using weights from the corresponding column of $B$.

> THEOREM 2 (p99)
>
> Let $A$ be an $m \times n$ matrix, and let $B$ and $C$ have sizes for which the indicated sums and products are defined.
>
> $$
> \begin{align*}
> \text{a.} &\quad A(BC) = (AB)C         & \qquad & \text{(associative law of multiplication)} \\
> \text{b.} &\quad A(B+C) = AB + AC      & \qquad & \text{(left distributive law)} \\
> \text{c.} &\quad (B+C)A = BA + CA      & \qquad & \text{(right distributive law)} \\
> \text{d.} &\quad r(AB) = (rA)B = A(rB) & \qquad & \text{for any scalar } r \\
> \text{e.} &\quad I_mA = A = AI_n       & \qquad & \text{(identity for matrix multiplication)}
> \end{align*}
> $$

> THEOREM 3 (p101)
>
> Let $A$ and $B$ denote matrices whose sizes are appropriate for the following sums and products.
> - $(A^T)^T = A$
> - $(A + B)^T = A^T + B^T$
> - For any scalar $r$, $(rA)^T = rA^T$
> - $(AB)^T = B^TA^T$

> The transpose of a product of matrices equals the product of their transposes in the *reverse* order.

### 2.2 The Inverse of a Matrix

> THEOREM 4 (p105)
>
> Let $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$. If $ad - bc \neq 0$, then $A$ is invertible and
>
> $$
> A^{-1} = \frac 1 {ad - bc}
> \begin{bmatrix}
> d & -b \\
> -c & a
> \end{bmatrix}
> $$
>
> If  $ad - bc = 0$, then $A$ is not invertible.

> $$
> \det A = ad - bc
> $$

> THEOREM 5 (p106)
>
> If $A$ is an invertible $n \times n$ matrix, then for each $\mathbf{b}$ in $\Bbb{R}^n$, the equation $A\mathbf{x} = \mathbf{b}$ has the unique solution $\mathbf{x} = A^{-1}\mathbf{b}$.

> THEOREM 6 (p107)
>
> - If $A$ is an invertible matrix, then $A^{-1}$ is invertible and
>
> $$
> (A^{-1})^{-1} = A
> $$
>
> - If $A$ and $B$ are $n \times n$ invertible matrices, then so is $AB$, and the inverse of $AB$ is the product of the inverses of $A$ and $B$ in the reverse order. That is,
>
> $$
> (AB)^{-1} = B^{-1}A^{-1}
> $$
>
> - IF $A$ is an invertible matrix, then so is $A^T$, and the inverse of $A^T$ is the transpose of $A^{-1}$. That is,
>
> $$
> (A^T)^{-1} = (A^{-1})^T
> $$

> THEOREM 7 (p109)
>
>  An $n \times n$ matrix $A$ is invertible if and only if $A$ is row equivalent to $I_n$, and in this case, any sequence of elementary row operations that reduces $A$ to $I_n$ also transforms $I_n$ into $A^{-1}$.

### 2.3 Characterizations of Invertible Matrices

> THEOREM 7 (p114)
>
> **The Invertible Matrix Theorem**
>
> Let $A$ be a square $n \times n$ matrix. Then the following statements are equivalent. That is, for a given $A$, the statements are either all true or all false.
> - $A$ is an invertible matrix.
> - $A$ is row equivalent to the $n \times n$ identity matrix.
> - $A$ has $n$ pivot positions.
> - The equation $A\mathbf{x} = \mathbf{0}$ has only the trivial solution.
> - The columns of $A$ form a linearly independent set.
> - The linear transformation $\mathbf{x} \mapsto A \mathbf{x}$ is one-to-one.
> - The equation $A\mathbf{x} = \mathbf{b}$ has at least one solution for each $\mathbf{b}$ in $\Bbb{R}^n$.
> - The columns of $A$ span $\Bbb{R}^n$ .
> - The linear transformation $\mathbf{x} \mapsto A \mathbf{x}$ maps $\Bbb{R}^n$ onto $\Bbb{R}^n$.
> - There is an $n \times n$ matrix $C$ such that $CA = I$.
> - There is an $n \times n$ matrix $D$ such that $AD = I$.
> - $A^T$ is an invertible matrix.

A linear transformation $T : \Bbb{R}^n \rightarrow \Bbb{R}^n$ is said to be **invertible** if there exists a function $S : \Bbb{R}^n \rightarrow \Bbb{R}^n$ such that

$$
\begin{align}
S(T(\mathbf{x})) = \mathbf{x} \quad & \text{for all } \mathbf{x} \text{ in } \Bbb{R}^n \\
T(S(\mathbf{x})) = \mathbf{x} \quad & \text{for all } \mathbf{x} \text{ in } \Bbb{R}^n
\end{align}
$$

> THEOREM 9 (p116)
>
> Let $T : \Bbb{R}^n \rightarrow \Bbb{R}^n$ be a linear transformation and let $A$ be the standard matrix for $T$. Then $T$ is invertible if and only if $A$ is an invertible matrix. In that case, the linear transformation $S$ given by $S(\mathbf{x}) = A^{-1}\mathbf{x}$ is the unique function satisfying equations $(1)$ and $(2)$.

### 2.4 Partitioned Matrices

> THEOREM 10 (p121)
>
> **Column-Row Expansion of $AB$**
>
> If $A$ is $m \times n$ and B is $n \times p$, then
>
> $$
> \begin{align*}
> AB &=
>   \begin{bmatrix}
>     \mathrm{col}_1(A) & \mathrm{col}_2(A) & \cdots & \mathrm{col}_n(A)
>   \end{bmatrix}
>   \begin{bmatrix}
>     \mathrm{row}_1(B) \\
>     \mathrm{row}_2(B) \\
>     \vdots \\
>     \mathrm{row}_n(B)
>   \end{bmatrix} \\
>    &= \mathrm{col}_1(A)\mathrm{row}_1(B) + \dotsb + \mathrm{col}_n(A)\mathrm{row}_n(B)
> \end{align*}
> $$

### 2.5 Matrix Factorizations

> **Algorithm for an LU Factorization**
>
> 1. Reduce $A$ to an echelon form $U$ by a sequence of row replacement operations, if possible.
> 2. Place entries in $L$ such that the *same sequence of row operations* reduces *L* to *I*.

### 2.6 The Leontief Input-Output Model

> **The Leontief Input-Output Model, or Production Equation**
>
> $$
> \begin{array}{c}
> \mathbf{x} & = & C\mathbf{x} & + & \mathbf{d} \\
> \text{\color{aqua}{Amount}} & & \text{\color{aqua}{Intermediate}} & & \text{\color{aqua}{Final}} \\
> \text{\color{aqua}{produced}} & & \text{\color{aqua}{demand}} & & \text{\color{aqua}{demand}}
> \end{array}
> $$

It may also be written as $I\mathbf{x} - C\mathbf{x} = \mathbf{d}$, or $(I - C)\mathbf{x} = \mathbf{d}$.

> THEOREM 11 (p136)
>
> Let $C$ be the consumption matrix for an economy, and let $\mathbf{d}$ be the final demand. If $C$ and $\mathbf{d}$ have nonnegative entries and if each column sum of $C$ is less than 1, then $(I-C)^{-1}$ exists and the production vector
>
> $$
> \mathbf{x} = (I - C)^{-1} \mathbf{d}
> $$
>
> has nonnegative entries and is the unique solution of
>
> $$
> \mathbf{x} = C\mathbf{x} + \mathbf{d}
> $$

## 2.7 Applications to Computer Graphics

**Homogeneous 3D Coordinates**

By analogy with the 2D case, we say that $(x, y, z, 1)$ are homogeneous coordinates for the point $(x, y, z)$ in $\Bbb{R}^3$. In general, $(X, Y, Z, H)$ are **homogeneous coordinates** for $(x, y, z)$ if $H \neq 0$ and

$$
x = \frac X H, \quad y = \frac Y H, \quad \text{and} \quad z = \frac Z H
$$

Each nonzero scalar multiple of $(x, y, z, 1)$ gives a set of homogeneous coordinates for $(x, y, z)$.

## 3 Determinants

### 3.1 Introduction to Determinants

> DEFINITION (p167)
>
> For $n \geq 2$, the **determinant** of an $n \times n$ matrix $A = \begin{bmatrix} a_{ij} \end{bmatrix}$ is the sum of $n$ terms of the form $\pm a_{1j} \det A_{1j}$, with plus and minus signs alternating, where the entries $a_{11},a_{12},\dotsc,a_{1n}$ are from the first row of $A$. In symbols,
> 
> $$
> \begin{align*}
> \det A &= a_{11} \det A_{11} - a_{12} \det A_{12} + \dotsb + (-1)^{1+n} \, a_{1n} \det A_{1n} \\
>        &= \sum_{j=1}^{n} (-1)^{1+j} a_{1j} \det A_{1j}
> \end{align*}
> $$

Given $A = \begin{bmatrix} a_{ij} \end{bmatrix}$, the **$(i,j)$-cofactor** of A is the number $C_{ij}$ given by

$$
C_{ij} = (-1)^{i+j} \det A_{ij}
$$

Then

$$
\det A = a_{11} C_{11} + a_{12} C_{12} + \dotsb + a_{1n} C_{1n}
$$

> THEOREM 1 (p168)
> 
> The determinant of an $n \times n$ matrix $A$ can be computed by a cofactor expansion across any row or down any column. The expansion across the $i$ th row using the cofactors above is
> 
> $$
> \det A = a_{i1} C_{i1} + a_{i2} C_{i2} + \dotsb + a_{in} C_{in}
> $$
>
> The cofactor expansion down the $j$ th column is
> 
> $$
> \det A = a_{1j} C_{1j} + a_{2j} C_{2j} + \dotsb + a_{nj} C_{nj}
> $$

The plus or minus sign in the $(i,j)$-cofactor depends on the position of $a_{ij}$ in the matrix regardless of the sign of $a_{ij}$ itself. The factor $(-1)^{i+j}$ determines the following checkerboard pattern of signs:

$$
\begin{bmatrix}
+ & - & + & \cdots \\
- & + & - & \\
+ & - & + & \\
\vdots & & & \ddots
\end{bmatrix}
$$

> THEOREM 2 (p169)
>
> If $A$ is a triangular matrix, then $\det A$ is the product of the entries on the main diagonal of $A$.

### 3.2 Properties of Determinants

> THEOREM 3 (p171)
> 
> **Row Operations**
>
> Let $A$ be a square matrix.
> - If a multiple of one row of $A$ is added to another row to produce a matrix $B$, then $\det B = \det A$.
> - If two rows of $A$ are interchanged to produce $B$, then $\det B = = - \det A$.
> - If one row of $A$ is multiplied by $k$ to produce $B$, then $\det B = = k \cdot \det A$.

> THEOREM 4 (p173)
>
> A square matrix $A$ is invertible if and only if $\det A \neq 0$.

> THEOREM 5 (p174)
>
> If $A$ is an $n \times n$ matrix, then $\det A^T = \det A$.

> THEOREM 6 (p175)
>
> **Multiplicative Property**
>
> If $A$ and $B$ are $n \times n$ matrices, then $\det AB = (\det A)(\det B)$.

### 3.3 Cramer's Rule Volume And Linear Transformations

For any $n \times n$ matrix $A$ and any $\mathbf{b}$ in $\Bbb{R}^n$, let $A_i (\mathbf{b})$ be the matrix obtained from $A$ by replacing column $i$ by the vector $\mathbf{b}$.

$$
A_i (\mathbf{b}) =
\begin{bmatrix}
\mathbf{a}_1 & \cdots & \underset{\color{aqua}\mathrm{col} \, i}{\underset{\color{aqua}\uparrow}{\mathbf{b}}} & \cdots & \mathbf{a}_n
\end{bmatrix}
$$

> THEOREM 7 (p179)
>
> **Cramer's Rule**
>
> Let $A$ be an invertible $n \times n$ matrix. For any $\mathbf{b}$ in $\Bbb{R}^n$, the unique solution $\mathbf{x}$ of $A\mathbf{x} = \mathbf{b}$ has entries given by
>
> $$
> x_i = \frac {\det A_i (\mathbf{b})} {\det A}, \qquad i = 1, 2, \dotsc, n
> $$

> THEOREM 8 (p181)
>
> **An Inverse Formula**
>
> Let $A$ be an invertible $n \times n$ matrix. Then
>
> $$
A^{-1} = \frac 1 {\det A} \, \mathrm{adj} \, A
> $$

> THEOREM 9 (p182)
>
> If $A$ is a $2 \times 2$ matrix, the area of the parallelogram determined by the columns of $A$ is $| \det A |$.
>
> If $A$ is a $3 \times 3$ matrix, the volume of the parallelepiped determined by the columns of $A$ is $| \det A |$.

> THEOREM 10 (p184)
>
> Let $T : \Bbb{R}^2 \rightarrow \Bbb{R}^2$ be the linear transformation determined by a $2 \times 2$ matrix $A$. If $S$ is a parallelogram in $\Bbb{R}^2$, then
>
> $$
> \{\text{area of } T(S)\} = |\det A| \cdot \{\text{area of } S\}
> $$
>
> If $T$ is determined by a $3 \times 3$ matrix $A$, and if $S$ is a parallelepiped in $\Bbb{R}^3$, then
>
> $$
> \{\text{volume of } T(S)\} = |\det A| \cdot \{\text{volume of } S\}
> $$
