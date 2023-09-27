const admin = require('firebase-admin');
const express = require('express');
const router = express.Router();
const firestore = admin.firestore();
const bcrypt = require('bcrypt');
const auth = admin.auth();
const jwt = require('jsonwebtoken');
const mailSend = require('../sendmail')

router.get('/', async(req, res) => {
    res.send('Hello from user page')
})

router.post('/signup', async(req, res) => {
    try{
        const { email, password } = req.body;
        const checkUser = await firestore.collection('user').where('email', '==', email).limit(1).get();
        if (!checkUser.empty) return res.send({ message: "Email already in use, please sign in!"})
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = await admin.auth().createUser({
            email: email,
            password: hash
        })

        const actionCodeSettings = {
            // URL you want to redirect back to. The domain (www.example.com) for
            // this URL must be whitelisted in the Firebase Console.
            url: 'http://localhost:8080/user/email-verification',
            // This must be true for email link sign-in.
            handleCodeInApp: true,
            // iOS: {
            //   bundleId: 'com.example.ios',
            // },
            // android: {
            //   packageName: 'com.example.android',
            //   installApp: true,
            //   minimumVersion: '12',
            // },
            // // FDL custom domain.
            // dynamicLinkDomain: 'coolapp.page.link',
        };
        try {
            const link = await admin.auth().generateEmailVerificationLink(email, actionCodeSettings)
            const subject = "Email Verfication";
            await mailSend.sendEmail(email, subject, link).then(() => console.log("Sent!"))
        } catch (err) {
            console.log(err)
            res.send({ message: "Failed!"})
        }
                            

        await firestore.collection('user').doc(user.uid).set({
            email,
            hash
        })
        res.json({ message: "sign up successful!" })
    } catch (err) {
        res.json({ message: "Something went wrong!"})
    }
})

router.post('/signin', async (req, res) => {

    try {
        const { email, password } = req.body;
        await admin.auth().getUserByEmail(email)
        .then(async (userRecord) => {
            const uid = userRecord.uid
            if (userRecord.emailVerified) {
                const user = await firestore.collection('user').where('email', '==', email).limit(1).get();
                if (user.empty) return res.json({ message: "User not found"})
                const isPasswordMatch = await bcrypt.compare(password, user.docs[0].data().hash)
                if (!isPasswordMatch) return res.json({ message: "Invaild credentials!"})
                const token = await jwt.sign(
                    {uid: user.uid},
                    "testing-key",
                    { expiresIn: 1800 }
                )
        
                res.json({ message: "Login successful!"})
            } else {
                return res.json({ message: "Email has not verified!"})
            }
        })
    } catch (err) {
        res.json({ message: "Login failed!"})
    }

})

router.get('/email-verification', async(req, res) => {
    try {
        res.send("<p>You account has been verified!<p/>")
    } catch (err) {
        console.log(err)
    }
})


module.exports = router;