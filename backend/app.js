const express = require('express');
const passport = require('passport');
const session = require('express-session');
const app = express();
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

const authRoute = require('./routes/auth');

// function isLoggedIn(req, res, next) {
//     req.user ? next() : res.sendStatus(401);
// }

app.get("/", (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>')
})

app.use('/auth', authRoute)

// app.get('/auth/google', 
//     passport.authenticate('google', { scope: ['email', 'profile'] })
// )

// app.get('/auth/google/callback', 
//     passport.authenticate('google', {
//         successRedirect: '/protected',
//         failureRedirect: '/auth/failure'
//     })
// )

// app.get('/auth/failure', (req, res) => {
//     res.send('Something went wrong!')
// })

// app.get("/protected", isLoggedIn, (req, res) => {
//     res.send(`Welcome, ${req.user.displayName}`)
// })

// app.get('/logout', (req, res) => {
//     req.logOut();
//     req.session.destroy();
//     res.send("You've successfully logout!")
// })

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})
