# BlindBuild -- Backend API Documentation

This document describes the available backend routes, expected request
bodies, and response formats for **BlindBuild**.

------------------------------------------------------------------------

## Round 1 (POST routes for participants to send requests and note the output to decode the logic)

------------------------------------------------------------------------

##  Math Routes (`/api/m1`)

### 🔹 1. POST `/problem1`

**Description:**\
Returns the sum of digits of a given non-negative integer.

#### ✅ Request Body

``` json
{
  "n": 1234
}
```

#### 🎯 Success Response

``` json
{
  "message": "Success",
  "output": 10,
  "hint": "Think about breaking the number into parts."
}
```

#### ❌ Error Response

``` json
{
  "constraints": "Provide a non-negative integer"
}
```

## Likewise , /problem2, /problem3 .../problemn is created,
## each problem has a separate controller function 

------------------------------------------------------------------------

##  DFS Routes (`/api/d1`)

### 🔹 2. POST `/problem1`

**Description:**\
Performs DFS traversal starting from a given node.

#### ✅ Request Body

``` json
{
  "graph": {
    "A": ["B", "C"],
    "B": ["D"],
    "C": [],
    "D": []
  },
  "start": "A"
}
```

#### 🎯 Success Response

``` json
{
  "message": "Success",
  "output": ["A", "B", "D", "C"],
  "hint": "Explore as deep as possible before backtracking."
}
```

#### ❌ Error Response

``` json
{
  "constraints": "Graph and start node required"
}
```

## Same as math questions