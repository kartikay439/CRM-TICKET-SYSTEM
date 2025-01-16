import jwt from "jsonwebtoken"

class AuthService {
    constructor(secret) {
        this.secret = secret
    }

    generateAccessToken(user) {
        return jwt.sign(
            {
                id: user._id,
                name: user.name,
                email: user.email
            },
            this.secret.passphrase,
            {
                expiresIn: this.secret.expiresIn,
            }
        )
    }

    generateRefreshToken(user) {
        return jwt.sign(
            {
                id: user._id,
            },
            this.secret.passphrase,
            {
                expiresIn: this.secret.expiresIn
            }
        )
    }

    verifyToken(token) {
        try {
            return jwt.verify(token, this.secret.passphrase)

        }
        catch (error) {
            throw new Error("Invalid token")
        }
    }
}

export default AuthService