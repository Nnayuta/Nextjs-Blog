import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';

class JWT {
    public sign(payload: JwtPayload, options: SignOptions): string {
        return jwt.sign(payload, process.env.JWT_SECRET, options);
    }

    public verify(token: string) {
        return jwt.verify(token, process.env.JWT_SECRET);
    }
}

export const JWToken = new JWT();