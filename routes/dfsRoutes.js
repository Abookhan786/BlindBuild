const express = require("express");
const { dCD, dSPL } = require("../controllers/dfsController");

const router = express.Router();

router.post("/problem1", dCD);   
router.post("/problem2", dSPL);  

module.exports = router;