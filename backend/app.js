//test
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const app = express();
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

const authRoute = require('./routes/auth');


app.get("/", (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>')
})

app.use('/auth', authRoute)


app.listen(8080, () => {
    console.log("Server is running on port 8080")
})
