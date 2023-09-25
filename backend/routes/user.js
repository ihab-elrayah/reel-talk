const admin = require('firebase-admin');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    res.send('Hello from user page')
})

module.exports = router;