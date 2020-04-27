const express = require('express');

const router = express.Router();


router.post('/', (req, res) => {
    console.log("user", req.body.user);
    res.send(true);
});




module.exports = router;

