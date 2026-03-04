
// Matrix Multiplication
const MM = (req, res) => {
  const { input1, input2 } = req.body;

  if (!Array.isArray(input1) || !Array.isArray(input2)) {
    return res.status(400).json({ message: "Error" });
  }

  const rowsA = input1.length, colsA = input1[0].length;
  const rowsB = input2.length, colsB = input2[0].length;

  if (colsA !== rowsB) {
    return res.status(400).json({ message: "Error" });
  }

  const result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += input1[i][k] * input2[k][j];
      }
    }
  }

  res.json({ message: "Success", output: result });
};

// Nth Root
const nthR = (req, res) => {
  const { input1, input2 } = req.body;

  if (typeof input1 !== "number" || typeof input2 !== "number") {
    return res.status(400).json({ message: "Error" });
  }

  if (input2 <= 0) {
    return res.status(400).json({ message: "Error" });
  }

  if (input1 < 0 && input2 % 2 === 0) {
    return res.status(400).json({ message: "Error" });
  }

  const result = Math.pow(input1, 1 / input2);

  res.json({ message: "Success", output: result });
};

// Permutation of the array
const Perm = (req, res) => {
  const { input1 } = req.body;
  if (!Array.isArray(input1)) return res.status(400).json({ message: "Error" });

  const results = [];
  const permute = (curr, rest) => {
    if (!rest.length) { results.push(curr); return; }
    for (let i = 0; i < rest.length; i++)
      permute([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
  };
  permute([], input1);

  res.json({ message: "Success", output: results });
};

const GCD = (req, res) => {
  const { input1 } = req.body;
  if (!Array.isArray(input1) || input1.length === 0)
    return res.status(400).json({ message: "Error" });

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const result = input1.reduce((acc, n) => gcd(acc, n));

  res.json({ message: "Success", output: result });
};

// Longest Increasing Subsequence Length
const LIS = (req, res) => {
  const { input1 } = req.body;

  if (!Array.isArray(input1) || input1.length === 0) {
    return res.status(400).json({ message: "Error" });
  }

  const dp = Array(input1.length).fill(1);

  for (let i = 1; i < input1.length; i++) {
    for (let j = 0; j < i; j++) {
      if (input1[j] < input1[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  res.json({ message: "Success", output: Math.max(...dp) });
};

// Josephus Problem
const JSP = (req, res) => {
  const { input1, input2 } = req.body;

  if (
    typeof input1 !== "number" ||
    typeof input2 !== "number" ||
    input1 <= 0 ||
    input2 <= 0 ||
    !Number.isInteger(input1) ||
    !Number.isInteger(input2)
  ) {
    return res.status(400).json({ message: "Error" });
  }

  let pos = 0;
  for (let i = 2; i <= input1; i++) {
    pos = (pos + input2) % i;
  }

  res.json({ message: "Success", output: pos + 1 });
};

// Spiral Matrix Traversal
const SMT = (req, res) => {
  const { input1 } = req.body;

  if (!Array.isArray(input1) || input1.length === 0 || !Array.isArray(input1[0])) {
    return res.status(400).json({ message: "Error" });
  }

  const output = [];
  let top = 0, bottom = input1.length - 1;
  let left = 0, right = input1[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) output.push(input1[top][i]);
    top++;
    for (let i = top; i <= bottom; i++) output.push(input1[i][right]);
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) output.push(input1[bottom][i]);
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) output.push(input1[i][left]);
      left++;
    }
  }

  res.json({ message: "Success", output });
};

// Decode Ways Count
const DWC = (req, res) => {
  const { input1 } = req.body;

  if (typeof input1 !== "string" || input1.length === 0) {
    return res.status(400).json({ message: "Error" });
  }

  if (input1[0] === "0") {
    return res.status(400).json({ message: "Error" });
  }

  const n = input1.length;
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    const one = parseInt(input1[i - 1]);
    const two = parseInt(input1.substring(i - 2, i));

    if (one >= 1) dp[i] += dp[i - 1];
    if (two >= 10 && two <= 26) dp[i] += dp[i - 2];
  }

  res.json({ message: "Success", output: dp[n] });
};

module.exports = { LIS, JSP, SMT, DWC, MM, nthR, Perm, GCD };