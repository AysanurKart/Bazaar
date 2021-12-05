const express = require("express");
const router = express.Router();
const model = require("./../model/user");
const db = require("./../struktur/database");

router.post("/lav", (req, res) =>{
    const user = new model(req.body.email, req.body.password);
    db.saveUser(user);
    res.status(200).send(true);
});

module.exports = router;
