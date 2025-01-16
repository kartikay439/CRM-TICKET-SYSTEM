import jwt from "jsonwebtoken"

class AuthService {
    // constructor(secret) {
    //     this.secret = secret
    // }

    generateAccessToken(user) {
        return jwt.sign(
            {
                id: user._id,
                name: user.name,
                email: user.email
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
            }
        )
    }

    generateRefreshToken(user) {
        return jwt.sign(
            {
                id: user._id,
            },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRY
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