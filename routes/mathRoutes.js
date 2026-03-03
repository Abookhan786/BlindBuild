const express = require("express");
const { MM, nthR } = require("../controllers/mathController");

const router = express.Router();

router.post("/problem1", MM);   // Matrix multiplication
router.post("/problem2", nthR); // Nth root

module.exports = router;