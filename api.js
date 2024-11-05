const express = require('express')
const router = express.Router();

// import models so we can interact with the database
const emp = require("./models/test");


router.get("/hello", (req, res) => {
    res.send({status: "Express on Vercel"});
});

router.get("/dataTest", (req, res) => {
    emp.find({number : req.query.number}).then((doc) => {
        console.log(doc);
        res.send(doc)})
});





// anything else falls to this "not found" case
router.all("*", (req, res) => {
    console.log(`API route not found: ${req.method} ${req.url}`);
    res.status(404).send({ msg: "API route not found" });
});
  
module.exports = router;
  