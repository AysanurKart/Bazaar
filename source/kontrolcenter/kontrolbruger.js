const express = require("express");
const router = express.Router();
const model = require("./../model/user");
const db = require("./../struktur/database");

router.post("/lav", (req, res) =>{
    const user = new model(req.body.email, req.body.password);
    db.saveUser(user);
    res.status(200).send(true);
});

router.post("/login", (req, res) => {
    const user = new model(req.body.email, req.body.password);
    const found = db.findUser(user);
    if (found) {
        if (user.password == found.password) {
            res.status(200).send(true);
        } else {
            res.status(401).send(false);
        }
    } else {
        res.status(404).send(false)
    }
});

router.delete("/delete", (req, res) => {
    const user = new model(req.body.email, req.body.password);
    db.deleteUser(user);
    res.status(200).send(true);
});

router.delete("/logout", (req, res) => {
    const user = new model(req.body.email, req.body.password);
    db.findUser(user);
    if (req.session) {
        req.session.destroy(err => {
          if (err) {
            res.status(400).send('Unable to log out')
          } else {
            res.send('Logout successful')

          }
        });
      } else {
        res.end()
      }

});

module.exports = router;
