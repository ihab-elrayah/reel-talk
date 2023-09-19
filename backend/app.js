const express = require('express');
const passport = require('passport');
const app = express();

require('./auth')

app.get("/", (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>')
})

app.get('/auth/google', 
    passport.authenticate('google', { scope: ['email', 'profile'] })
)

app.get("/protected", (req, res) => {
    res.send("Welcome")
})

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})
