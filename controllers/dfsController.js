// Detect Cycle in Directed Graph
const dCD = (req, res) => {
  const { input1 } = req.body;

  if (!input1 || typeof input1 !== "object" || Array.isArray(input1)) {
    return res.status(400).json({ message: "Error" });
  }

  const visited = new Set();
  const recStack = new Set();

  const dfs = (node) => {
    if (!input1[node]) return false;
    if (recStack.has(node)) return true;
    if (visited.has(node)) return false;

    visited.add(node);
    recStack.add(node);

    for (const neighbor of input1[node]) {
      if (dfs(neighbor)) return true;
    }

    recStack.delete(node);
    return false;
  };

  for (const node of Object.keys(input1)) {
    if (dfs(node)) {
      return res.json({ message: "Success", output: true });
    }
  }

  res.json({ message: "Success", output: false });
};

// Shortest Path Length
const dSPL = (req, res) => {
  const { input1, input2, input3 } = req.body;

  if (!input1 || !input2 || !input3) {
    return res.status(400).json({ message: "Error" });
  }

  const graph = input1;
  const start = input2;
  const target = input3;
  let minLength = Infinity;
  const visited = new Set();

  const dfs = (node, length) => {
    if (node === target) {
      minLength = Math.min(minLength, length);
      return;
    }
    visited.add(node);
    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) dfs(neighbor, length + 1);
    }
    visited.delete(node);
  };

  dfs(start, 0);

  res.json({ message: "Success", output: minLength === Infinity ? -1 : minLength });
};

// Topological Sort
const TopoSort = (req, res) => {
  const { input1 } = req.body;
  if (!input1) return res.status(400).json({ message: "Error" });

  const visited = new Set();
  const stack = [];

  const dfs = (node) => {
    visited.add(node);
    for (const neighbor of (input1[node] || []))
      if (!visited.has(neighbor)) dfs(neighbor);
    stack.push(node);
  };

  for (const node of Object.keys(input1))
    if (!visited.has(node)) dfs(node);

  res.json({ message: "Success", output: stack.reverse() });
};

// Postfix Evaluation
const Postfix = (req, res) => {
  const { input1 } = req.body;
  if (!Array.isArray(input1)) return res.status(400).json({ message: "Error" });

  const stack = [];
  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };

  for (const t of input1) {
    if (ops[t]) {
      const b = stack.pop(), a = stack.pop();
      stack.push(ops[t](a, b));
    } else {
      stack.push(Number(t));
    }
  }

  res.json({ message: "Success", output: stack[0] });
};

// Count Islands
const CIS = (req, res) => {
  const { input1 } = req.body;

  if (!Array.isArray(input1) || input1.length === 0 || !Array.isArray(input1[0])) {
    return res.status(400).json({ message: "Error" });
  }

  const grid = input1.map((row) => [...row]);
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== 1) return;
    grid[r][c] = 0;
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        dfs(r, c);
        count++;
      }
    }
  }

  res.json({ message: "Success", output: count });
};

module.exports = { dCD, dSPL, TopoSort, Postfix, CIS };