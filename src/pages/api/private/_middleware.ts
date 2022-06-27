import { StatusCodes } from "http-status-codes";
import { NextRequest, NextResponse } from "next/server";

export default async function JWTMiddleware(req: NextRequest, res: NextResponse) {
    try {
        const authHeader = req.headers.get("Authorization");

        if (authHeader == null) {
            throw new Error("Need to be authenticated");
        }

        const [type, token] = authHeader.split(' ');

        if (type !== 'Bearer' || !token) {
            throw new Error('Authentication type is not supported');
        }

        return NextResponse.next();

    } catch (error) {

        return new Response(
            JSON.stringify({
                error: error.message
            }),
            {
                status: StatusCodes.UNAUTHORIZED,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

    }
}