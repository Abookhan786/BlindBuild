const express = require("express");
const { dCD, dSPL,TopoSort ,Postfix} = require("../controllers/dfsController");

const router = express.Router();

router.post("/problem1", dCD);   
router.post("/problem2", dSPL);  
router.post("/problem3", TopoSort);  
router.post("/problem4", Postfix);  

module.exports = router;