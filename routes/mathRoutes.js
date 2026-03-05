const express = require("express");
const { MM, nthR ,Perm,GCD,perfect} = require("../controllers/mathController");

const router = express.Router();

router.post("/problem1", MM);   // Matrix multiplication
router.post("/problem2", nthR);
router.post("/problem3",Perm) ;// Nth root
router.post("/problem4",GCD) ;// GCD
router.post("/problem5",perfect) ;// perfect

module.exports = router;