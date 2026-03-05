
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
//perutation of the array
const Perm =  (req, res) => {
  const { arr } = req.body;
  if (!Array.isArray(arr)) return res.status(400).json({ error: "invalid" });
  const results = [];
  const permute = (curr, rest) => {
    if (!rest.length) { results.push(curr); return; }
    for (let i = 0; i < rest.length; i++)
      permute([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
  };
  permute([], arr);
  res.json({ result: results });
};
const GCD = (req, res) => {
  const { values } = req.body;
  if (!Array.isArray(values) || values.length === 0)
    return res.status(400).json({ error: "invalid" });

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const result = values.reduce((acc, n) => gcd(acc, n));

  res.json({ result });
};
const perfect =  (req, res) => {
  const { n } = req.body;
  if (typeof n !== "number" || n < 1) return res.status(400).json({ error: "invalid" });

  const divisors = [];
  for (let i = 1; i < n; i++) if (n % i === 0) divisors.push(i);
  const sum = divisors.reduce((a, b) => a + b, 0);

  res.json({ result: { divisors, sum, perfect: sum === n } });
};

module.exports = { MM, nthR,Perm,GCD,perfect };