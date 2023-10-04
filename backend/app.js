//test
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const credentials = require('./firebase_config.json');
// const FirestoreStore = require("firestore-store")(session);
const crypto = require('crypto');

admin.initializeApp({
    credential: admin.credential.cert(credentials)
})

const db = admin.firestore();

app.use(session({
    // store: new FirestoreStore({
    //     database: db
    // }),
    secret: crypto.randomBytes(32).toString('hex'),
    resave: false,
    cookie: {
        secure: true,
        maxAge: 2 * 60 * 60 * 1000,
    }
}))

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

// app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');


app.get("/", (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>')
})

app.use('/auth', authRoute)
app.use('/user', userRoute)


app.listen(8080, () => {
    console.log("Server is running on port 8080")
})
