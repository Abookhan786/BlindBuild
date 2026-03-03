const express = require("express");
const { MM, nthR ,Perm,GCD} = require("../controllers/mathController");

const router = express.Router();
const { MM, nthR, LIS, JSP, SMT, DWC } = require("../controllers/mathController");

router.post("/problem1", MM);   // Matrix multiplication
router.post("/problem2", nthR);
router.post("/problem3",Perm) ;// Nth root
router.post("/problem4",GCD) ;// GCD
router.post("/problem3", LIS);
router.post("/problem4", JSP);
router.post("/problem5", SMT);
router.post("/problem6", DWC);


module.exports = router;