# BlindBuild -- API Documentation

This document describes the DFS and Math controller endpoints, request
expectations, and response formats.

------------------------------------------------------------------------

## 🔍 DFS Controllers

### 🔹 1. Cycle Detection (POST `/api/d1/problem1`)

**Description:**\
Detects whether a cycle exists in the given graph.

#### ❌ Error Cases

-   Missing inputs

``` json
{ "constraints": "Graph required" }
```

-   Invalid graph structure

``` json
{ "constraints": "Graph must be an adjacency list object" }
```

#### ✅ Success Cases

-   Cycle exists

``` json
{ "message": "Success", "output": true }
```

-   No cycle

``` json
{ "message": "Success", "output": false }
```

------------------------------------------------------------------------

### 🔹 2. Shortest Path Length (POST `/api/d1/shortestPathLength`)

**Description:**\
Returns the shortest path length between start and target nodes.

#### ❌ Error Cases

-   Missing inputs

``` json
{ "constraints": "Graph, start, and target required" }
```

-   Start/target not in graph

``` json
{ "constraints": "Start or target node not found in graph" }
```

#### ✅ Success Cases

-   Path exists

``` json
{ "message": "Success", "output": 2 }
```

 Likewise , /problem2, /problem3 .../problemn is created,
 each problem has a separate controller function 

------------------------------------------------------------------------

##  Math Controllers

### 🔹 3. Matrix Multiplication (POST `/api/m1/matrixMultiplication`)

**Description:**\
Performs matrix multiplication of matrices A and B.

#### ❌ Error Cases

-   Invalid input type

``` json
{ "constraints": "Provide valid A and B as 2D arrays" }
```

-   Dimension mismatch

``` json
{ "constraints": "Matrix dimensions do not match for this operation (columns of A must equal rows of B)" }
```

#### ✅ Success Case

``` json
{
  "message": "Success",
  "output": [[19, 22], [43, 50]]
}
```

Example:\
When `A = [[1,2],[3,4]]` and `B = [[5,6],[7,8]]`.

------------------------------------------------------------------------

### 🔹 4. Nth Root (POST `/api/m1/nthRoot`)

**Description:**\
Computes the nth root of a given value.

#### ❌ Error Cases

-   Invalid input types

``` json
{ "constraints": "Provide both 'value' and 'n' as numbers" }
```

-   Invalid root (non-positive)

``` json
{ "constraints": "Root 'n' must be a positive integer" }
```

-   Negative value with even root

``` json
{ "constraints": "Cannot compute even root of a negative number" }
```

#### ✅ Success Case

``` json
{ "message": "Success", "output": 3 }
```

 Same as math questions
