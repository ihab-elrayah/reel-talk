class Email {
    constructor(id, username, email, emailToken, isVerified, hash, salt) {
        this.id = id;
        this.username = username;
        this.emailToken = emailToken;
        this.email = email;
        this.isVerified = isVerified;
        this.hash = hash;
        this.salt = salt;
    }
} 