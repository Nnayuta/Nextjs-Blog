import JWT, { JwtPayload, SignOptions } from 'jsonwebtoken';

export class JWToken {
    public sign(payload: JwtPayload, options: SignOptions): string {
        return JWT.sign(payload, process.env.JWT_SECRET, options);
    }

    public verify(token: string) {
        return JWT.verify(token, process.env.JWT_SECRET);
    }
}