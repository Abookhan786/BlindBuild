const express = require("express");
const { MM, nthR ,Perm,GCD} = require("../controllers/mathController");

const router = express.Router();

router.post("/problem1", MM);   // Matrix multiplication
router.post("/problem2", nthR);
router.post("/problem3",Perm) ;// Nth root
router.post("/problem4",GCD) ;// GCD

module.exports = router;