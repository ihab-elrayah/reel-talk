'use strict';
const dotenv = require('dotenv');

dotenv.config();

const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDERID,
    APP_ID,
    MEASUREMENT_ID
} = process.env;


module.exports = {
    firebaseConfig = {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDERID,
        appId: APP_ID,
        measurementId: MEASUREMENT_ID
    };
}